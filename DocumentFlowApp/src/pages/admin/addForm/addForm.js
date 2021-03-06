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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export class AddForm extends Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      formId: '',
      formType: '',
      formName: '',
    };
  }
  render() {
    const {navigation} = this.props;
    const {modalVisible, formType, formName, formId} = this.state;
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAwareScrollView>
          <View style={{flex: 1}}>
            <Header navigation={navigation} />
            <SmallButton
              text="Add Form"
              color="#C54BE2"
              imgAddress={require('../../../assets/addForm.png')}
            />
            <Text style={styles.addUserTxt}>
              {'Please add the following required information:'}
            </Text>
            <View style={styles.addUserContainer}>
              <Text style={styles.addUserLabel}>Form Type:</Text>
              <TextInput
                style={styles.addUserInput}
                placeholder="Enter form type..."
                onChangeText={(formType) => this.setState({formType: formType})}
                value={formType}
              />
              <Text style={styles.addUserLabel}>Form Name:</Text>
              <TextInput
                style={styles.addUserInput}
                placeholder="Enter form name..."
                onChangeText={(formName) => this.setState({formName: formName})}
                value={formName}
              />
              <Text style={styles.addUserLabel}>Form ID:</Text>
              <TextInput
                style={styles.addUserInput}
                placeholder="Assign a unique form ID..."
                onChangeText={(formId) => this.setState({formId})}
                value={formId}
              />

              <TouchableOpacity
                style={styles.submitBtn}
                onPress={() => this.checkInputs()}>
                <Text style={styles.submitTxt}>Add Form</Text>
              </TouchableOpacity>
            </View>

            <Modal animationType="slide" visible={modalVisible} transparent>
              <View style={styles.modalContainer}>
                <View style={styles.reviewForm}>
                  <Text style={styles.reviewFormText}>Form Review</Text>
                </View>
                <View style={styles.requestContainer}>
                  <Icon
                    name="cross"
                    size={util.WP(8)}
                    style={{alignSelf: 'flex-end'}}
                    onPress={() => this.setState({modalVisible: false})}
                  />
                  <View style={styles.requestModalHead}>
                    <Text style={styles.requestHeadText}>
                      From: User Email Here...
                    </Text>
                    <Text style={styles.requestHeadText}>Type: {formType}</Text>
                  </View>
                  <Text style={styles.requestDesc}>
                    User Description Here......
                  </Text>
                  <View style={styles.requestModalOptions}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({modalVisible: false});
                      }}
                      style={styles.requestReject}>
                      <Icon name="cross" color="white" size={util.WP(8)} />
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => this.addForm()}
                      style={styles.requestAccept}>
                      <Icon name="check" color="white" size={util.WP(8)} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    );
  }

  checkInputs() {
    const {formType, formName, formId} = this.state;
    if (formName === '' || formType === '' || formId === '') {
      Alert.alert(`Alert!`, `All fields are required!`, [{text: 'OK'}], {
        cancelable: false,
      });
      return;
    } else {
      this.setState({modalVisible: true});
    }
  }
  addForm() {
    const {formType, formName, formId} = this.state;
    const {addForm, allForms} = this.props;
    const newForm = {formType, formName, formId: formId.toLowerCase()};

    const response = addForm(newForm, allForms);
    if (response === 'old') {
      Alert.alert(
        `Failed`,
        `Form with ID: ${formId} already exists!`,
        [{text: 'OK'}],
        {
          cancelable: false,
        },
      );
    } else {
      Alert.alert(
        `Successful`,
        `Form with ID: ${formName} has been added!`,
        [{text: 'OK'}],
        {cancelable: false},
      );
      this.setState({
        modalVisible: false,
        formId: '',
        formType: '',
        formName: '',
      });
    }

    //API call to add user
    //if successful
  }
}
mapStateToProps = (state) => {
  return {
    allForms: state.formManagement.forms,
  };
};

mapDispatchToProps = (dispatch) => {
  return {
    addForm: (newUser, allUsers) => dispatch(TASKS.addForm(newUser, allUsers)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
