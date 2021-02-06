import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import * as util from '../../../utilities';
import * as TASKS from '../../../store/actions';
import styles from '../../../styles';
import Icon from 'react-native-vector-icons/Entypo';
import Header from '../../../components/adminHeader';
import SmallButton from '../../../components/smallButton';
import {TextInput} from 'react-native-gesture-handler';

export class AddUser extends Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      fName: '',
      lName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }
  render() {
    const {navigation} = this.props;
    const {modalVisible} = this.state;
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{flex: 1}}>
          <Header navigation={navigation} />
          <SmallButton
            text="Add User"
            color="#FC4C59"
            imgAddress={require('../../../assets/addUser.png')}
          />
          <Text style={styles.addUserTxt}>
            {'Please fill out following details to add new user!'}
          </Text>
          <View style={styles.addUserContainer}>
            <Text style={styles.addUserLabel}>First Name:</Text>
            <TextInput
              style={styles.addUserInput}
              placeholder="Enter First Name..."
              onChangeText={(fName) => this.setState({fName: fName})}
              value={this.state.fName}
            />
            <Text style={styles.addUserLabel}>Last Name:</Text>
            <TextInput
              style={styles.addUserInput}
              placeholder="Enter Last Name..."
              onChangeText={(lName) => this.setState({lName: lName})}
              value={this.state.lName}
              maxLength={4}
              multiline={false}
            />
            <Text style={styles.addUserLabel}>Email:</Text>
            <TextInput
              style={styles.addUserInput}
              placeholder="Enter Email..."
              onChangeText={(email) =>
                this.setState({email: email.toLowerCase()})
              }
            />
            <Text style={styles.addUserLabel}>User Password:</Text>
            <TextInput
              style={styles.addUserInput}
              placeholder="Enter Password..."
              onChangeText={(password) => this.setState({password: password})}
              value={this.state.password}
              secureTextEntry
            />
            <Text style={styles.addUserLabel}>Confirm Password:</Text>
            <TextInput
              style={styles.addUserInput}
              placeholder="Confirm Password..."
              onChangeText={(confirmPassword) =>
                this.setState({confirmPassword: confirmPassword})
              }
              value={this.state.confirmPassword}
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.submitBtn}
              onPress={() => this.setState({modalVisible: true})}>
              <Text style={styles.submitTxt}>Add User</Text>
            </TouchableOpacity>
          </View>
          <Modal animationType="slide" visible={modalVisible} transparent>
            <View style={styles.modalContainer}>
              <View style={styles.modalInnerContainer}>
                <Text style={styles.modalHeading}>
                  {'Are you sure, you want to\n         add this user?'}
                </Text>
                <View style={{...styles.modalOptions, marginTop: util.WP(6)}}>
                  <TouchableOpacity
                    onPress={() => this.setState({modalVisible: false})}
                    style={styles.modalReject}>
                    <Icon name="cross" color="white" size={util.WP(8)} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => this.addUser()}
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

  addUser() {
    const {fName, lName, email, password, confirmPassword} = this.state;
    const {addUser, allUsers} = this.props;
    const newUser = {fName, lName, email, password};
    if (
      fName === '' ||
      lName === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      this.setState({modalVisible: false});
      Alert.alert(`Alert!`, `All fields are required!`, [{text: 'OK'}], {
        cancelable: false,
      });
      return;
    }
    const response = addUser(newUser, allUsers);
    if (response === 'old') {
      Alert.alert(`Failed`, `User ${email} already exists!`, [{text: 'OK'}], {
        cancelable: false,
      });
    } else {
      Alert.alert(
        `Successful`,
        `User ${email} has been added!`,
        [{text: 'OK'}],
        {cancelable: false},
      );
      this.setState({
        modalVisible: false,
        fName: '',
        lName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    }
    this.setState({
      modalVisible: false,
    });
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
    addUser: (newUser, allUsers) => dispatch(TASKS.addUser(newUser, allUsers)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
