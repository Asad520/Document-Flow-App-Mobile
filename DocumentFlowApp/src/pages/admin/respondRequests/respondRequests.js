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
    };
  }

  respondRequests(newStatus) {
    const {allRequests, saveRequests} = this.props;
    const {currentReq} = this.state;
    const newRequests = allRequests.map((request) => {
      if (request.id === currentReq.id) {
        return {...currentReq, status: newStatus};
      }
      return request;
    });
    saveRequests(newRequests);
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

        <Text style={styles.addUserTxt}>
          Following requests are waiting for your response:
        </Text>
        <View style={styles.deleteContainer}>
          <View style={styles.deleteHeader}>
            <Text style={styles.requestEmailHead}>Applicant ID:</Text>
            <Text style={styles.requestTypeHead}>Request Type:</Text>
          </View>
          <FlatList
            data={sortBy(allRequests, 'email')}
            keyExtractor={(req) => req.id}
            renderItem={(req) => this.renderRequests(req)}
            fadingEdgeLength={50}
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
        <TouchableOpacity style={styles.itemContainer}>
          <Text>{item.email}</Text>
          <View style={styles.deleteItemName}>
            <Text>{item.type}</Text>
          </View>
          <Icon
            name="layers"
            color="#4d4d4d"
            size={util.WP(7)}
            style={styles.deleteItemIcon}
            onPress={() => this.setState({currentReq: item})}
          />
        </TouchableOpacity>
      )
    );
  }
}

mapStateToProps = (state) => {
  return {
    allRequests: state.requests.requests,
  };
};

mapDispatchToProps = (dispatch) => {
  return {
    saveRequests: (newRequests) => dispatch(TASKS.saveRequests(newRequests)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RespondRequests);
