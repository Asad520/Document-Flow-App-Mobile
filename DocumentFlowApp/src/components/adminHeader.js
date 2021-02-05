import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import styles from '../styles/index';
import * as util from '../utilities';

class Header extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/adminBg.png')}
        style={{
          height: util.HP(20),
        }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.backBtn}>
          <Image
            source={require('../assets/back.png')}
            style={{height: util.WP(10), width: util.WP(10)}}
          />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            top: util.WP(-2.5),
          }}>
          <Image
            source={require('../assets/adminIcon.png')}
            style={{height: util.WP(25)}}
            resizeMode="contain"
          />
          <View style={{}}>
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
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
