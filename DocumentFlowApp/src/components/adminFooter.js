import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from '../styles/index';
import {Image, ImageBackground, Text, View} from 'react-native';
class adminFooter extends Component {
  render() {
    return <View style={{...styles.findUs, backgroundColor: '#1F647D'}}></View>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(adminFooter);
