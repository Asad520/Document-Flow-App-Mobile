import React from 'react';
import {connect} from 'react-redux';
import styles from '../../styles';
import {
  Text,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import * as util from '../../utilities/index';
import * as actions from '../../store/actions/index';

class Welcome extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.checkLogin();
  }

  checkLogin() {
    if (this.props.user) {
      if (this.props.user.type === 'user') {
        this.props.navigation.navigate('userHome');
      } else {
        this.props.navigation.navigate('adminHome');
      }
    }
  }
  login() {
    const {email, password} = this.state;
    const {loginUser} = this.props;
    if (email.length === 0 || password.length === 0) {
      Alert.alert('ALERT!', '\nPlease fill in all fields', [{text: 'OK'}], {
        cancelable: false,
      });
      return;
    }
    if (!util.emailValidator(email)) {
      Alert.alert('ALERT!', '\nInvalid Email!', [{text: 'OK'}], {
        cancelable: false,
      });
      return;
    }
    //API call to login admin
    const newEmail = email.toLowerCase().trim();
    loginUser({email: newEmail, password});
    //if correct
    // util.navigate('adminHome');
  }

  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require('../../assets/forest.png')}
          style={{height: util.HP(40)}}>
          <View style={styles.welcomeImg}>
            <Image source={require('../../assets/welcome.png')} />
          </View>
        </ImageBackground>
        <View style={styles.innerContainer}>
          <View style={styles.innerContainer}>
            <Text style={styles.credsText}>
              Please provide the required credentials!
            </Text>
            <View style={styles.iconContainer}>
              <TextInput
                style={styles.loginInput}
                placeholder="Enter Email..."
                onChangeText={(email) => this.setState({email: email})}
                value={this.state.email}
              />
              <Image
                source={require('../../assets/userNameIcon.png')}
                style={styles.inputIcon}
              />
            </View>
            <View style={styles.iconContainer}>
              <TextInput
                style={styles.loginInput}
                placeholder="Enter Password..."
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password: password})}
                value={this.state.password}
              />
              <Image
                source={require('../../assets/pwdIcon.png')}
                style={styles.inputIcon}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              this.login();
            }}>
            <Text style={styles.loginBtnText}>Get Started</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: util.HP(6.5),
            marginTop: util.WP(8),
            backgroundColor: '#525F6D',
          }}></View>
      </ScrollView>
    );
  }
}
mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};
mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (curUser) => dispatch(actions.login(curUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
