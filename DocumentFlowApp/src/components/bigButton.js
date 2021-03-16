import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import * as util from '../utilities';

class BigButton extends Component {
  render() {
    const {text, imgAddress, color} = this.props;
    return (
      <View
        style={{
          alignSelf: 'center',
          backgroundColor: color,
          width: util.WP(80),
          height: util.WP(30),
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: util.WP(2),
          borderRadius: util.WP(4),
        }}>
        <Image
          source={imgAddress}
          style={{height: util.WP(22)}}
          resizeMode="contain"
        />
        <Text style={{color: 'white', fontSize:util.WP(3)}}> {text} </Text>
      </View>
    );
  }
}

export default BigButton;
