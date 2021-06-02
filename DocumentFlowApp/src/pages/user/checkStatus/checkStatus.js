import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import * as util from '../../../utilities';
import * as TASKS from '../../../store/actions';
import styles from '../../../styles';
import Icon from 'react-native-vector-icons/Entypo';
import Header from '../../../components/userHeader';
import {sortBy} from 'lodash';

export class CheckStatus extends Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });

  constructor(props) {
    super(props);

    this.state = {
      currentReq: false,
      allRequests: this.props.allRequests,
    };
  }

  componentDidMount() {
    this.props.getAllRequests();
  }

  render() {
    const {user} = this.props;
    const allRequests = this.props.allRequests.filter(
      (req) => req.email !== user.email,
    );
    const {currentReq} = this.state;
    return (
      <TouchableWithoutFeedback>
        <View style={{flex: 1}}>
          <Header />
          <Text style={{...styles.addUserTxt, marginTop: util.WP(3)}}>
            Your submitted requests:
          </Text>
          <View style={{...styles.deleteContainer, flex: 1}}>
            <View style={styles.deleteHeader}>
              <Text style={styles.deleteEmailHead}>Date:</Text>
              <Text style={styles.deleteTypeHead}>Type:</Text>
              <Text style={styles.deleteFormNameHead}>Status:</Text>
            </View>
            <FlatList
              data={sortBy(allRequests, 'published_at')}
              keyExtractor={(request) => request.id.toString()}
              renderItem={(request) => this.renderRequests(request)}
              fadingEdgeLength={50}
              ListEmptyComponent={() => (
                <View style={styles.emptyList}>
                  <Text style={styles.emptyListText}>
                    {'No items to show...      '}
                  </Text>
                  <Icon name="warning" color="white" size={util.WP(6)} />
                </View>
              )}
            />
          </View>
          {currentReq && (
            <Modal animationType="slide" transparent>
              <View style={styles.modalContainer}>
                <View style={styles.requestContainer}>
                  <Icon
                    name="cross"
                    size={util.WP(8)}
                    style={{alignSelf: 'flex-end'}}
                    onPress={() => this.setState({currentReq: false})}
                  />
                  <View style={styles.requestModalHead}>
                    <Text style={styles.requestHeadText}>
                      From: {currentReq.email.split('@')[0]}
                    </Text>
                    <Text style={styles.requestHeadText}>
                      Type: {currentReq.type}
                    </Text>
                  </View>
                  <Text style={styles.requestDesc}>{currentReq.desc}</Text>
                  <View style={styles.requestModalOptions}>
                    <View>
                      <Text style={styles.requestStatus}>
                        {currentReq.status.toUpperCase()}
                      </Text>
                      <Text
                        style={{
                          fontSize: util.WP(3),
                          fontWeight: 'bold',
                          fontStyle: 'italic',
                        }}>
                        Responded By:{' '}
                        {currentReq.respondedBy.toUpperCase().split('@')[0]}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderRequests({item}) {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => this.setState({currentReq: item})}>
        <Text style={styles.deleteItemTxt}>
          {item.published_at.split('T')[0]}
        </Text>
        <Text style={styles.deleteItemTxt}>{item.type}</Text>
        <Text style={styles.deleteItemTxt}>{item.status.toUpperCase()}</Text>
        <Icon
          name="layers"
          color="#4d4d4d"
          size={util.WP(7)}
          style={styles.deleteItemIcon}
        />
      </TouchableOpacity>
    );
  }
}

mapStateToProps = (state) => {
  return {
    allRequests: state.requests.requests,
    user: state.auth.user,
  };
};

mapDispatchToProps = (dispatch) => {
  return {
    getAllRequests: () => dispatch(TASKS.getAllRequests()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckStatus);
