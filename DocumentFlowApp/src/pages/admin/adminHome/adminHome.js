import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {connect} from 'react-redux';
import * as util from '../../../utilities';
import styles from '../../../styles';
import Icon from 'react-native-vector-icons/Entypo';
import Footer from '../../../components/adminFooter';
import BigButton from '../../../components/bigButton';

class AdminHome extends Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  render() {
    const {navigation} = this.props;
    const {modalVisible} = this.state;
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../../../assets/adminBg.png')}
          style={{
            height: util.HP(20),
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/adminIcon.png')}
            style={{height: util.WP(25)}}
            resizeMode="contain"
          />
          <View>
            <Text
              style={{
                alignSelf: 'center',
                color: 'white',
                fontSize: util.WP(10),
              }}>
              Welcome!
            </Text>
            <Text style={{alignSelf: 'center', color: 'white'}}>
              You're logged in as Admin
            </Text>
          </View>
        </ImageBackground>
        <Modal animationType="slide" visible={modalVisible} transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalInnerContainer}>
              <Text style={styles.modalHeading}>
                Are you sure, you want to logout?
              </Text>
              <View style={styles.modalOptions}>
                <TouchableOpacity
                  onPress={() => this.setState({modalVisible: false})}
                  style={styles.modalReject}>
                  <Icon name="cross" color="white" size={util.WP(8)} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => this.logout()}
                  style={styles.modalAccept}>
                  <Icon name="check" color="white" size={util.WP(8)} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <View style={{flex: 1, marginTop: util.WP(3)}}>
          <ScrollView fadingEdgeLength={50}>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => util.navigate('addUser')}>
              <BigButton
                text="Add User"
                color="#FC4C59"
                imgAddress={require('../../../assets/addUser.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => util.navigate('deleteUser')}>
              <BigButton
                text="Delete User"
                color="#23909D"
                imgAddress={require('../../../assets/delUser.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <BigButton
                text="Add Form"
                color="#C54BE2"
                imgAddress={require('../../../assets/addForm.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <BigButton
                text="Delete Form"
                color="#45AD5D"
                imgAddress={require('../../../assets/delForm.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <BigButton
                text="Respond Requests"
                color="#E89F15"
                imgAddress={require('../../../assets/respondReq.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => {
                this.setState({modalVisible: true});
              }}>
              <BigButton
                text="Logout"
                color="#538FE0"
                imgAddress={require('../../../assets/logout.png')}
              />
            </TouchableOpacity>
            <Footer />
          </ScrollView>
        </View>
      </View>
    );
  }
  logout() {
    //empty store
    this.setState({modalVisible: false});
    util.navigate('welcome');
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);
