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
        source={require('../assets/userBg.png')}
        style={{
          height: util.HP(18),
        }}>
        <TouchableOpacity onPress={() => util.back()} style={styles.backBtn}>
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
            top: util.WP(-8.5),
          }}>
          <Image
            source={require('../assets/userIcon.png')}
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
            <Text style={styles.headerText}>
              You're logged in as Student
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
