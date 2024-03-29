import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Modal, Image} from 'react-native';
import {connect} from 'react-redux';
import * as util from '../../../utilities';
import * as TASKS from '../../../store/actions';
import styles from '../../../styles';
import Icon from 'react-native-vector-icons/Entypo';
import SmallButton from '../../../components/smallButton';
import {FlatList} from 'react-native-gesture-handler';
import {sortBy} from 'lodash';

export class RespondRequests extends Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentReq: false,
      allRequests: this.props.allRequests,
    };
  }

  componentDidMount() {
    this.props.getAllRequests();
  }

  async respondRequests(newStatus) {
    const {allRequests, saveRequests, user} = this.props;
    const {currentReq} = this.state;
    const request = {...currentReq, status: newStatus, respondedBy: user.email};
    const res = await saveRequests(request, allRequests);
    if (res) {
      alert('Request ' + newStatus + ' successfully!');
    }
    this.setState({currentReq: false});
  }

  render() {
    const {allRequests} = this.props;
    const {currentReq} = this.state;
    return (
      <View style={{flex: 1}}>
        <SmallButton
          text="Respond Requests"
          color="#E89F15"
          imgAddress={require('../../../assets/respondReq.png')}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={[styles.backBtn, {marginTop: util.WP(-20)}]}>
          <Image
            source={require('../../../assets/back.png')}
            style={{height: util.WP(10), width: util.WP(10)}}
          />
        </TouchableOpacity>

        <Text style={styles.delTxt}>
          Following requests are waiting for your response:
        </Text>
        <View style={styles.deleteContainer}>
          <View style={styles.deleteHeader}>
            <Text style={styles.requestEmailHead}>Applicant ID:</Text>
            <Text style={styles.requestTypeHead}>Request Type:</Text>
          </View>
          <FlatList
            data={sortBy(allRequests, 'email')}
            keyExtractor={(req) => req.id.toString()}
            renderItem={(req) => this.renderRequests(req)}
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
                    From: {currentReq.email}
                  </Text>
                  <Text style={styles.requestHeadText}>
                    Type: {currentReq.type}
                  </Text>
                </View>
                <Text style={styles.requestDesc}>{currentReq.desc}</Text>
                <View style={styles.requestModalOptions}>
                  <TouchableOpacity
                    onPress={() => {
                      this.respondRequests('rejected');
                    }}
                    style={styles.requestReject}>
                    <Text style={styles.respondOptions}>Reject</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => this.respondRequests('accepted')}
                    style={styles.requestAccept}>
                    <Text style={styles.respondOptions}>Accept</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        )}
      </View>
    );
  }

  renderRequests({item}) {
    return (
      item.status === 'pending' && (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => this.setState({currentReq: item})}>
          <Text style={[styles.deleteItemTxt, {marginLeft: util.WP(3)}]}>
            {item.email}
          </Text>
          <Text style={[styles.deleteItemTxt, {marginLeft: util.WP(3)}]}>
            {item.type}
          </Text>
          <Icon
            name="layers"
            color="#4d4d4d"
            size={util.WP(7)}
            style={styles.deleteItemIcon}
          />
        </TouchableOpacity>
      )
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
    saveRequests: (request, allRequests) =>
      dispatch(TASKS.saveRequests(request, allRequests)),
    getAllRequests: () => dispatch(TASKS.getAllRequests()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RespondRequests);
