import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';
import * as util from '../../../utilities';
import * as TASKS from '../../../store/actions';
import styles from '../../../styles';
import Icon from 'react-native-vector-icons/Entypo';
import Header from '../../../components/userHeader';
import {FlatList} from 'react-native-gesture-handler';
import {sortBy} from 'lodash';

export class CheckStatus extends Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });

  constructor(props) {
    super(props);

    this.state = {
      currentReq: false,
    };
  }

  render() {
    const {allRequests} = this.props;
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
              data={sortBy(allRequests, 'date')}
              keyExtractor={(request) => request.id}
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
                    {console.log(currentReq)}
                    <Text style={styles.requestHeadText}>
                      From: {currentReq.email}
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
      <TouchableOpacity style={styles.itemContainer}>
        <Text>{item.date}</Text>
        <View style={styles.deleteItemName}>
          <Text>{item.type}</Text>
        </View>
        <View>
          <Text>{item.status.toUpperCase()}</Text>
        </View>
        <Icon
          name="layers"
          color="#4d4d4d"
          size={util.WP(7)}
          style={styles.deleteItemIcon}
          onPress={() => this.setState({currentReq: item})}
        />
      </TouchableOpacity>
    );
  }
}

mapStateToProps = (state) => {
  console.log('Forms: ', state.formManagement.forms);
  return {
    allRequests: state.requests.requests,
  };
};

mapDispatchToProps = (dispatch) => {
  return {
    deleteForm: (formId, allForms) =>
      dispatch(TASKS.deleteForm(formId, allForms)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckStatus);
