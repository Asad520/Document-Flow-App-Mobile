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

export class DeleteForm extends Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      allForms: this.props.allForms,
      curForm: {},
    };
  }
  componentDidMount() {
    this.props.getAllForms();
  }
  render() {
    const {allForms} = this.props;
    const {modalVisible, curForm} = this.state;
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{flex: 1}}>
          <SmallButton
            text="Delete Form"
            color="#45AD5D"
            imgAddress={require('../../../assets/delForm.png')}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={[styles.backBtn, {marginTop: util.WP(-20)}]}>
            <Image
              source={require('../../../assets/back.png')}
              style={{height: util.WP(10), width: util.WP(10)}}
            />
          </TouchableOpacity>

          <Text style={styles.delTxt}>Which Form do you want to delete?</Text>
          <View style={styles.deleteContainer}>
            <View style={styles.deleteHeader}>
              <Text style={styles.deleteEmailHead}>ID:</Text>
              <Text style={styles.deleteTypeHead}>Type:</Text>
              <Text style={styles.deleteFormNameHead}>Name:</Text>
            </View>
            <FlatList
              data={sortBy(allForms, 'formName')}
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
          </View>
          <Modal animationType="slide" visible={modalVisible} transparent>
            <View style={styles.modalContainer}>
              <View style={styles.modalInnerContainer}>
                <Text style={styles.modalHeading}>
                  {'Are you sure, you want to\n         delete this form?'}
                </Text>
                <View style={{...styles.modalOptions, marginTop: util.WP(6)}}>
                  <TouchableOpacity
                    onPress={() => this.setState({modalVisible: false})}
                    style={styles.modalReject}>
                    <Icon name="cross" color="white" size={util.WP(8)} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => this.deleteForm(curForm)}
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

  renderForms({item}) {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => this.setState({modalVisible: true, curForm: item})}>
        <Text style={styles.deleteItemTxt}>{item.formId}</Text>
        <Text style={styles.deleteItemTxt}>{item.formType}</Text>
        <Text style={styles.deleteItemTxt}>{item.FormName}</Text>
        <Icon
          name="circle-with-cross"
          color="red"
          size={util.WP(7)}
          style={styles.deleteItemIcon}
        />
      </TouchableOpacity>
    );
  }

  async deleteForm(curForm) {
    const {allForms, deleteFormAction} = this.props;
    const res = await deleteFormAction(curForm, allForms);
    this.setState({modalVisible: false, allForms: this.props.allForms});
    if (res) {
      alert(`Form deleted successfully: ${curForm.formId}`);
    }
  }
}

mapStateToProps = (state) => {
  return {
    allForms: state.formManagement.forms,
  };
};

mapDispatchToProps = (dispatch) => {
  return {
    deleteFormAction: (curForm, allForms) =>
      dispatch(TASKS.deleteForm(curForm, allForms)),
    getAllForms: () => dispatch(TASKS.getAllForms()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm);
