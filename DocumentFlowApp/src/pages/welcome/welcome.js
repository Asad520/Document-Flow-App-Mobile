import React from 'react';
import {connect} from 'react-redux';
import styles from '../../styles';
import {
  Text,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as util from '../../utilities/index';

class Welcome extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerShown: false,
  });
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <ImageBackground
          source={require('../../assets/forest.png')}
          style={{height: util.HP(40)}}>
          <View style={styles.welcomeImg}>
            <Image source={require('../../assets/welcome.png')} />
          </View>
        </ImageBackground>
        <View style={styles.innerContainer}>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: util.WP(4),
            }}>
            Please Choose a Portal!
          </Text>
          <TouchableOpacity
            style={styles.portalButton}
            onPress={() => util.navigate('adminLogin')}>
            <Text style={styles.portalBtnTxt}>Login as Admin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.portalButton}
            onPress={() => util.navigate('userLogin')}>
            <Text style={styles.portalBtnTxt}>Login as User</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            height: util.HP(15),
            marginTop: util.WP(8),
            backgroundColor: '#525F6D',
          }}></View>
      </ScrollView>
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
