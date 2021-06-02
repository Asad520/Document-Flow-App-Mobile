import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
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
      user: {},
    };
  }

  componentDidMount() {
    this.props.getAllUsers();
  }
  render() {
    const allUsers = this.props.allUsers.filter(
      (user) => user.email !== this.props.user.email,
    );
    const {modalVisible, user} = this.state;
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

          <Text style={styles.delTxt}>Which user do you want to delete?</Text>
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
                    onPress={() => this.deleteUser(user)}
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
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => this.setState({modalVisible: true, user: item})}>
        <Text style={styles.deleteItemTxt}>{item.email}</Text>
        <Text style={styles.deleteItemTxt}>
          {item.fName} {item.lName}
        </Text>
        <Icon name="remove-user" color="#4d4d4d" size={util.WP(7)} />
      </TouchableOpacity>
    );
  }

  async deleteUser(user) {
    const {deleteUserAction, getAllUsers} = this.props;
    const {allUsers} = this.state;
    const res = await deleteUserAction(user, allUsers);
    this.setState({modalVisible: false, allUsers: this.props.allUsers});
    if (res) {
      alert(`User deleted successfully: ${user.email}`);
      getAllUsers();
    }
  }
}

mapStateToProps = (state) => {
  return {
    allUsers: state.userManagement.users,
    user: state.auth.user,
  };
};

mapDispatchToProps = (dispatch) => {
  return {
    deleteUserAction: (email, allUsers) =>
      dispatch(TASKS.deleteUser(email, allUsers)),
    getAllUsers: () => dispatch(TASKS.getAllUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUser);
