import {StyleSheet} from 'react-native';
import * as util from '../utilities/index';

const styles = StyleSheet.create({
  welcomeImg: {
    marginTop: util.WP(18),
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
    marginTop: util.WP(2),
  },
  footerText: {
    color: 'white',
    marginTop: util.WP(5),
    alignSelf: 'center',
  },
  findContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: util.WP(6),
  },
  footImg: {
    marginHorizontal: util.WP(-9),
  },
  backBtn: {
    height: util.WP(12),
    width: util.WP(13.25),
  },
  adminImage: {
    alignSelf: 'center',
  },
  adminText: {
    marginTop: util.WP(18),
    marginHorizontal: util.WP(22),
  },
  loginInput: {
    width: util.WP(90),
    borderWidth: 2,
    borderRadius: util.WP(10),
    marginHorizontal: util.WP(5),
    paddingHorizontal: util.WP(6),
  },
  iconContainer: {
    left: util.WP(84),
    top: util.WP(11),
  },
  loginBtn: {
    backgroundColor: '#074D65',
    width: util.WP(40),
    height: util.WP(15),
    paddingVertical: util.WP(4),
    marginBottom: util.WP(3),
    marginTop: util.WP(-3),
    alignSelf: 'center',
  },
});

export default styles;
