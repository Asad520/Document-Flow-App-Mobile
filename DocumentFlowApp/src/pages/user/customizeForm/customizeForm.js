import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../../components/userHeader';
import styles from '../../../styles/index';
import * as util from '../../../utilities';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import * as TASKS from '../../../store/actions';

export class CustomizeForm extends Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });

  constructor(props) {
    super(props);
    this.state = {
      requestDescr: '',
    };
  }

  async submitRequest() {
    const {requestDescr} = this.state;
    const {submitRequest, user} = this.props;
    if (requestDescr.trim()) {
      const newRequest = {
        type: 'Customize Form',
        desc: requestDescr,
        email: user.email,
        status: 'pending',
      };
      const res = await submitRequest(newRequest);
      if (res) {
        Alert.alert(
          `Alert`,
          `Request submitted successfully!`,
          [{text: 'OK'}],
          {
            cancelable: false,
          },
        );
      }
      this.setState({requestDescr: ''});
    } else {
      Alert.alert(
        `Alert`,
        `Pleas add a valid description for your request!`,
        [{text: 'OK'}],
        {
          cancelable: false,
        },
      );
    }
  }
  render() {
    const {requestDescr} = this.state;
    const {user} = this.props;
    return (
      <KeyboardAwareScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View>
          <Header />
          <Text style={styles.newFormHeading}>Customize Form Request!</Text>
          <View style={{...styles.requestContainer, marginTop: util.WP(15)}}>
            <View style={styles.requestModalHead}>
              <Text style={styles.requestHeadText}>
                From: {user.email.split('@')[0]}
              </Text>
              <Text style={styles.requestHeadText}>Type: Customize Form</Text>
            </View>
            <TextInput
              style={styles.requestNewForm}
              multiline
              maxLength={470}
              value={requestDescr}
              onChangeText={(text) => this.setState({requestDescr: text})}
              placeholder="Enter your description for new form (max 470 characters)..."
            />
            <View style={styles.requestModalOptions}>
              <TouchableOpacity
                onPress={() => this.submitRequest()}
                style={styles.requestSubmitBtn}>
                <Text style={styles.respondOptions}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitRequest: (newRequest) => dispatch(TASKS.addRequest(newRequest)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeForm);
