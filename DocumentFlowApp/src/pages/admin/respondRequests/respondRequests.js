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
    //max length of rquest 473 chars
    this.requests = [
      {
        id: '1',
        type: 'leave',
        desc: 'Mai ko chuti chaheye. Mai ni aye ga. mai ko chuti do',
        email: 'bsef17m520',
        status: 'pending',
      },
      {
        id: '2',
        type: 'leave',
        desc: 'Mai ko chuti chaheye. Mai ni aye ga. mai ko chuti do',
        email: 'bsef17m520',
        status: 'pending',
      },
      {
        id: '3',
        type: 'scholarship',
        desc:
          'Mai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa do Mai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa doMai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa do',
        email: 'bsef17m520',
        status: 'pending',
      },
      {
        id: '4',
        type: 'leave',
        desc: 'Mai ko chuti chaheye. Mai ni aye ga. mai ko chuti do',
        email: 'bsef17m520',
        status: 'pending',
      },
      {
        id: '5',
        type: 'scholarship',
        desc: 'Mai ko paisa chaheye. Mai bohut gahreeb hai. mai ko Pesa do',
        email: 'bsef17m520',
        status: 'pending',
      },
      {
        id: '6',
        type: 'add',
        desc: 'Mai ko subject parhna hai. Mai ko add karo plis',
        email: 'bsef17m520',
        status: 'pending',
      },
      {
        id: '7',
        type: 'leave',
        desc: 'Mai ko chuti chaheye. Mai ni aye ga. mai ko chuti do',
        email: 'bsef17m520',
        status: 'pending',
      },
      {
        id: '8',
        type: 'drop',
        desc: 'Mai ni ye parh skta. Mai ko drop karo',
        email: 'bsef17m520',
        status: 'pending',
      },
      {
        id: '9',
        type: 'drop',
        desc: 'Mai ni ye parh skta. Mai ko drop karo',
        email: 'bsef17m520',
        status: 'pending',
      },
      {
        id: '10',
        type: 'drop',
        desc: 'Mai ni ye parh skta. Mai ko drop karo',
        email: 'bsef17m520',
        status: 'pending',
      },
      {
        id: '11',
        type: 'drop',
        desc: 'Mai ni ye parh skta. Mai ko drop karo',
        email: 'bsef17m520',
        status: 'pending',
      },
      {
        id: '12',
        type: 'drop',
        desc: 'Mai ni ye parh skta. Mai lko drop karo',
        email: 'bsef17m520',
        status: 'pending',
      },
      {
        id: '13',
        type: 'drop',
        desc: 'Mai ni ye parh skta. Mai ko drop karo',
        email: 'bsef17m520',
        status: 'pending',
      },
      {
        id: '14',
        type: 'drop',
        desc: 'Mai ni ye parh skta. Mai ko drop karo',
        email: 'bsef17m520',
        status: 'pending',
      },
    ];

    this.state = {
      modalVisible: false,
      allUsers: this.props.allUsers,
      currentReq: false,
    };
  }

  render() {
    const {navigation, allUsers} = this.props;
    const {currentReq, email} = this.state;
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
            data={sortBy(this.requests, 'email')}
            keyExtractor={(req) => req.id}
            renderItem={(req) => this.renderRequests(req)}
            fadingEdgeLength={50}
          />
        </View>
        {currentReq ? (
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
                      this.rejectRequest();
                    }}
                    style={styles.requestReject}>
                    <Text style={styles.respondOptions}>Reject</Text>
                    {/* <Icon name="cross" color="white" size={util.WP(8)} /> */}
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => this.acceptRequest()}
                    style={styles.requestAccept}>
                    <Text style={styles.respondOptions}>Accept</Text>
                    {/* <Icon name="check" color="white" size={util.WP(8)} /> */}
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        ) : null}
      </View>
    );
  }

  renderRequests({item}) {
    return (
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
    );
  }

  acceptRequest() {
    console.log('Request Accepted');
    this.setState({currentReq: false});
  }
  rejectRequest() {
    console.log('Request Rejected');
    this.setState({currentReq: false});
  }
}

mapStateToProps = (state) => {
  return {
    allUsers: state.userManagement.users,
  };
};

mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (email, allUsers) =>
      dispatch(TASKS.deleteUser(email, allUsers)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RespondRequests);
