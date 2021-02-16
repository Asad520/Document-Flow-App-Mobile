import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import * as util from '../../../utilities';
import * as TASKS from '../../../store/actions';
import styles from '../../../styles';
import Icon from 'react-native-vector-icons/Entypo';
import SmallButton from '../../../components/smallButton';
import {FlatList} from 'react-native-gesture-handler';
import {sortBy} from 'lodash';

export class DeleteUser extends Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      allUsers: this.props.allUsers,
      email: '',
    };
  }

  render() {
    const {allUsers} = this.props;
    const {modalVisible, email} = this.state;
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{flex: 1}}>
          <SmallButton
            text="Delete User"
            color="#23909D"
            imgAddress={require('../../../assets/delUser.png')}
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
            Which user do you want to delete?
          </Text>
          <View style={styles.deleteContainer}>
            <View style={styles.deleteHeader}>
              <Text style={styles.deleteEmailHead}>Email:</Text>
              <Text style={styles.deleteNameHead}>Name:</Text>
            </View>
            <FlatList
              data={sortBy(allUsers, 'email')}
              keyExtractor={(user) => user.email}
              renderItem={(user) => this.renderUsers(user)}
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
          <Modal animationType="slide" visible={modalVisible} transparent>
            <View style={styles.modalContainer}>
              <View style={styles.modalInnerContainer}>
                <Text style={styles.modalHeading}>
                  {'Are you sure, you want to\n         delete this user?'}
                </Text>
                <View style={{...styles.modalOptions, marginTop: util.WP(6)}}>
                  <TouchableOpacity
                    onPress={() => this.setState({modalVisible: false})}
                    style={styles.modalReject}>
                    <Icon name="cross" color="white" size={util.WP(8)} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => this.deleteUser(email)}
                    style={styles.modalAccept}>
                    <Icon name="check" color="white" size={util.WP(8)} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderUsers({item}) {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Text>{item.email}</Text>
        <View style={styles.deleteItemName}>
          <Text>
            {item.fName} {item.lName}
          </Text>
        </View>
        <Icon
          name="remove-user"
          color="#4d4d4d"
          size={util.WP(7)}
          style={styles.deleteItemIcon}
          onPress={() => this.setState({modalVisible: true, email: item.email})}
        />
      </TouchableOpacity>
    );
  }
  deleteUser(email) {
    const {allUsers, deleteUser} = this.props;
    const response = deleteUser(email, allUsers);
    if (response) {
      Alert.alert(
        `Success`,
        `User ${email} has been deleted!`,
        [{text: 'OK'}],
        {
          cancelable: false,
        },
      );
    } else {
      Alert.alert(`Failed`, `Error deleting user: ${email}`, [{text: 'OK'}], {
        cancelable: false,
      });
    }
    this.setState({modalVisible: false});
    //input checks
    //API call to add user
    //if successful
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

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);
