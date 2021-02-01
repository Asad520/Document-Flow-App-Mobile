import React from 'react';
import {connect} from 'react-redux';
import styles from '../../styles';
import {
  Text,
  StatusBar,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import * as util from '../../utilities/index';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="grey" />

        <ImageBackground
          source={require('../../assets/forest.png')}
          style={{height: util.HP(40)}}>
          <View style={styles.welcomeImg}>
            <Image source={require('../../assets/welcome.png')} />
          </View>
        </ImageBackground>
        <View style={styles.innerContainer}>
          <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
            Please Choose a Portal!
          </Text>
          <TouchableOpacity style={styles.portalButton}>
            <Text style={styles.portalBtnTxt}>Login as Admin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.portalButton}>
            <Text style={styles.portalBtnTxt}>Login as User</Text>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={require('../../assets/foot.png')}
          style={styles.findUs}
          resizeMode="cover">
          <Image
            source={require('../../assets/gmail.png')}
            style={styles.footImg}
          />
          <Image
            source={require('../../assets/fb.png')}
            style={styles.footImg}
          />
          <Image
            source={require('../../assets/twitter.png')}
            style={styles.footImg}
          />
        </ImageBackground>
      </>
    );
  }
}
mapStateToProps = (state) => {
  return {};
};
mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
