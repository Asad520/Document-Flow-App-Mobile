import React from 'react';
import {connect} from 'react-redux';
import styles from '../../../styles';
import {
  Text,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from 'react-native';

import * as util from '../../../utilities';
import Footer from '../../../components/adminFooter';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class AdminLogin extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View>
          <KeyboardAvoidingView behavior="padding">
            <ImageBackground
              source={require('../../../assets/adminBg.png')}
              style={{height: util.HP(40)}}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backBtn}>
                <Image source={require('../../../assets/back.png')} />
              </TouchableOpacity>
              <Image
                source={require('../../../assets/adminIcon.png')}
                style={styles.adminImage}
              />
              <Image
                source={require('../../../assets/adminText.png')}
                style={styles.adminText}
              />
            </ImageBackground>

            <View style={styles.innerContainer}>
              <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
                Please provide the required credentials!
              </Text>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../../../assets/userNameIcon.png')}
                  style={styles.inputIcon}
                />
              </View>

              <TextInput
                style={styles.loginInput}
                placeholder="Enter Email..."
                onChangeText={(email) => this.setState({email: email})}
                value={this.state.email}
              />
              <View style={styles.iconContainer}>
                <Image
                  source={require('../../../assets/pwdIcon.png')}
                  style={styles.inputIcon}
                />
              </View>

              <TextInput
                style={styles.loginInput}
                placeholder="Enter Password..."
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password: password})}
                value={this.state.password}
              />
            </View>

            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => {
                this.login();
              }}>
              <Text style={{alignSelf: 'center', color: 'white'}}>
                Get Started
              </Text>
            </TouchableOpacity>
            <Footer />
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  login() {
    const {email, password} = this.state;

    // if (email.length === 0 || password.length === 0) {
    //   Alert.alert('ALERT!', '\nPlease fill in all fields', [{text: 'OK'}], {
    //     cancelable: false,
    //   });
    //   return;
    // }
    // if (!util.emailValidator(email)) {
    //   Alert.alert('ALERT!', '\nInvalid Email ID', [{text: 'OK'}], {
    //     cancelable: false,
    //   });
    //   return;
    // }
    //API call to login admin

    //if correct
    util.navigate('adminHome');
  }
}
mapStateToProps = (state) => {
  return {};
};
mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin);
