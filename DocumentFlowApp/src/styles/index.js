import {StyleSheet} from 'react-native';
import * as util from '../utilities/index';

const styles = StyleSheet.create({
  welcomeImg: {
    marginTop: util.WP(65),
    alignSelf: 'center',
  },
  innerContainer: {
    marginVertical: util.WP(8),
  },
  portalButton: {
    backgroundColor: '#3B4B5A',
    marginHorizontal: util.WP(10),
    paddingVertical: util.WP(7),
    marginVertical: util.WP(5),
  },
  portalBtnTxt: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15,
  },
  findUs: {
    width: util.WP(100),
    height: util.WP(40),
    flexDirection: 'row',
  },
  footImg: {
    marginTop: util.WP(18),
    marginHorizontal: util.WP(9),
  },
});

export default styles;
