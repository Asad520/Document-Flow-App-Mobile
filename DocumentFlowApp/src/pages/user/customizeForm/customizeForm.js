import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../../components/userHeader';
import styles from '../../../styles/index';
import * as util from '../../../utilities';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import * as TASKS from '../../../store/actions';
import uuid from 'react-uuid';

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

  componentDidMount() {
    //get forms from api
  }

  submitRequest() {
    const {requestDescr} = this.state;
    const {submitRequest} = this.props;
    if (requestDescr.trim()) {
      const newRequest = {
        id: uuid(),
        type: 'Customize Form',
        desc: requestDescr,
        email: 'BSEF17m520',
        status: 'pending',
        date: new Date().toLocaleDateString(),
      };
      submitRequest(newRequest);
      Alert.alert(`Alert`, `Request submitted successfully!`, [{text: 'OK'}], {
        cancelable: false,
      });
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
    return (
      <KeyboardAwareScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View>
          <Header />
          <Text style={styles.newFormHeading}>Customize Form Request!</Text>
          <View style={{...styles.requestContainer, marginTop: util.WP(15)}}>
            <View style={styles.requestModalHead}>
              <Text style={styles.requestHeadText}>From: BSEF17m520</Text>
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitRequest: (newRequest) => dispatch(TASKS.addRequest(newRequest)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeForm);
