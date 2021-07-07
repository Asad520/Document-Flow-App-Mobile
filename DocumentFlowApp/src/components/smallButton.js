import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import * as util from '../utilities';

class SmallButton extends Component {
  render() {
    const {text, imgAddress, color} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          backgroundColor: color,
          width: '100%',
          height: util.WP(20),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={imgAddress}
          style={{height: util.WP(16)}}
          resizeMode="contain"
        />
        <Text
          style={{color: 'white', fontSize: util.WP(8), fontWeight: 'bold'}}>
          {' '}
          {text}{' '}
        </Text>
      </View>
    );
  }
}

export default SmallButton;
