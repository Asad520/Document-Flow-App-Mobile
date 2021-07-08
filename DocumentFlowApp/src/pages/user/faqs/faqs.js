import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, Modal} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import Header from '../../../components/userHeader';
import styles from '../../../styles/index';
import * as util from '../../../utilities';
import * as TASKS from '../../../store/actions';
import {sortBy} from 'lodash';

export class Faqs extends Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentFaq: '',
    };
  }

  componentDidMount() {
    this.props.getAllFaqs();
  }

  render() {
    const {faqs} = this.props;
    const {modalVisible, currentFaq} = this.state;
    return (
      <View style={{flex: 1}}>
        <Header />
        <Text style={styles.faqText}>
          Click on a topic to discover information about it:
        </Text>
        <FlatList
          data={sortBy(faqs, 'que')}
          keyExtractor={(faq) => faq.id.toString()}
          renderItem={(faq) => this.renderFaqs(faq)}
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
        <Modal animationType="slide" transparent visible={modalVisible}>
          <View style={styles.modalContainer}>
            <View style={styles.requestContainer}>
              <Icon
                name="cross"
                size={util.WP(9)}
                style={{alignSelf: 'flex-end', right: util.WP(1)}}
                onPress={() =>
                  this.setState({modalVisible: false, currentFaq: ''})
                }
              />

              <Text style={styles.currentQue}>Question: {currentFaq.que}</Text>

              <Text style={styles.currentAns}>{currentFaq.ans}</Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  renderFaqs = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.faqs}
        onPress={() => this.setState({currentFaq: item, modalVisible: true})}>
        <Text style={styles.queText}>{item.que}</Text>
      </TouchableOpacity>
    );
  };
}

const mapStateToProps = (state) => ({
  faqs: state.faqs.faqs,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAllFaqs: () => dispatch(TASKS.getAllFaqs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Faqs);
