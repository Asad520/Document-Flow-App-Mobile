import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from '../styles/index';
import {Image, ImageBackground, Text, View} from 'react-native';

class UserFooter extends Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={require('../assets/userFoot.png')}
          style={styles.findUs}
          resizeMode="cover">
          <Text style={styles.footerText}>Find Us On !</Text>
          <View style={styles.findContainer}>
            <Image
              source={require('../assets/gmail.png')}
              style={styles.footImg}
            />
            <Image
              source={require('../assets/fb.png')}
              style={styles.footImg}
            />
            <Image
              source={require('../assets/twitter.png')}
              style={styles.footImg}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserFooter);
