import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import Header from '../../../components/userHeader';
import styles from '../../../styles/index';
import * as util from '../../../utilities';
import {sortBy} from 'lodash';
import * as TASKS from '../../../store/actions';
import uuid from 'react-uuid';

export class Requests extends Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });

  constructor(props) {
    super(props);
    this.state = {
      currentForm: false,
      requestDescr: '',
    };
  }

  componentDidMount() {
    this.props.getAllForms();
  }

  async submitRequest() {
    const {currentForm, requestDescr} = this.state;
    const {submitRequest, user} = this.props;
    if (requestDescr.trim()) {
      const newRequest = {
        type: currentForm.formType,
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
      this.setState({currentForm: false, requestDescr: ''});
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
    const {allForms, user} = this.props;
    const {currentForm} = this.state;
    return (
      <View style={{flex: 1}}>
        <Header />
        <Text style={styles.faqText}>Click on a form to open it:</Text>
        <FlatList
          data={sortBy(allForms, 'FormName')}
          keyExtractor={(form) => form.formId}
          renderItem={(form) => this.renderForms(form)}
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
        {currentForm && this.renderSelectedForm()}
      </View>
    );
  }

  renderForms = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.faqs}
        onPress={() => {
          this.setState({currentForm: item});
        }}>
        <Text style={styles.queText}>{item.FormName}</Text>
      </TouchableOpacity>
    );
  };

  renderSelectedForm = () => {
    const {currentForm, requestDescr} = this.state;
    const {user} = this.props;
    return (
      <Modal animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView style={styles.modalContainer}>
            <View style={styles.requestContainer}>
              <Icon
                name="cross"
                size={util.WP(8)}
                style={{alignSelf: 'flex-end'}}
                onPress={() => this.setState({currentForm: false})}
              />
              <View style={styles.requestModalHead}>
                <Text style={styles.requestHeadText}>
                  From: {user.email.split('@')[0]}
                </Text>
                <Text style={styles.requestHeadText}>
                  Type: {currentForm.formType}
                </Text>
              </View>
              <TextInput
                style={styles.requestInput}
                multiline
                maxLength={470}
                value={requestDescr}
                onChangeText={(text) => this.setState({requestDescr: text})}
                placeholder="Enter your description (max 470 characters)..."
              />
              <View style={styles.requestModalOptions}>
                <TouchableOpacity
                  onPress={() => this.submitRequest()}
                  style={styles.requestSubmitBtn}>
                  <Text style={styles.respondOptions}>SUBMIT</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    allForms: state.formManagement.forms,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitRequest: (newRequest) => dispatch(TASKS.addRequest(newRequest)),
    getAllForms: () => dispatch(TASKS.getAllForms()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Requests);
