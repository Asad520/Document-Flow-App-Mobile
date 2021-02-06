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
  addUserTxt: {
    alignSelf: 'center',
    marginTop: util.WP(4),
    fontWeight: 'bold',
  },
  addUserContainer: {
    paddingVertical: util.WP(1),
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: util.WP(2),
    marginHorizontal: util.WP(5),
    marginTop: util.WP(3),
  },
  addUserLabel: {
    marginLeft: util.WP(6),
    marginBottom: util.WP(-2),
    marginTop: util.WP(3),
    fontWeight: 'bold',
  },
  addUserInput: {
    borderBottomWidth: util.WP(0.5),
    borderColor: 'grey',
    width: util.WP(80),
    alignSelf: 'center',
    paddingVertical: util.WP(2.5),
  },
  submitBtn: {
    backgroundColor: '#FC4C59',
    width: util.WP(30),
    height: util.WP(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: util.WP(10),
    alignSelf: 'center',
    marginVertical: util.WP(5),
  },
  submitTxt: {
    color: 'white',
  },
  modalContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: util.HP(100),
  },
  modalInnerContainer: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: util.WP(80),
    height: util.WP(40),
    marginTop: util.HP(30),
    borderRadius: util.WP(4),
  },
  modalHeading: {
    color: 'red',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: util.WP(5),
    fontSize: util.WP(4.5),
  },
  modalOptions: {
    flexDirection: 'row',
    marginLeft: util.WP(24),
    marginTop: util.WP(8),
  },
  modalReject: {
    backgroundColor: 'red',
    borderRadius: util.WP(100),
    padding: util.WP(3),
  },
  modalAccept: {
    backgroundColor: 'black',
    borderRadius: util.WP(100),
    padding: util.WP(3),
    marginLeft: util.WP(8),
  },
  deleteContainer: {
    flex: 1,
    borderWidth: util.WP(0.5),
    borderRadius: util.WP(2),
    borderColor: 'grey',
    marginHorizontal: util.WP(3),
    marginTop: util.WP(3),
  },
  deleteHeader: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    height: util.WP(10),
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#cccccc',
    marginVertical: util.WP(2),
    borderWidth: util.WP(0.2),
    borderRadius: util.WP(1),
    marginHorizontal: util.WP(2),
    paddingVertical: util.WP(4),
    paddingHorizontal: util.WP(1),
    justifyContent: 'space-between',
  },
  deleteEmailHead: {
    fontWeight: 'bold',
    marginLeft: util.WP(5),
    color: 'white',
    fontSize: util.WP(5),
  },
  deleteNameHead: {
    fontWeight: 'bold',
    marginLeft: util.WP(30),
    color: 'white',
    fontSize: util.WP(5),
  },
});

export default styles;
