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
    fontSize: util.WP(3.75),
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
    fontSize:util.WP(3)
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
    marginTop: util.WP(4),
    alignSelf:'center'
  },
  loginInput: {
    width: util.WP(90),
    borderWidth: 2,
    borderRadius: util.WP(10),
    marginLeft: util.WP(5),
    marginVertical:util.WP(2),
    paddingLeft: util.WP(3),
    paddingRight:util.WP(10),
    paddingVertical: util.WP(2),
    flex: 1,
  },
  iconContainer: {
    top: util.WP(2),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: '#074D65',
    width: util.WP(40),
    height: util.WP(15),
    paddingVertical: util.WP(4),
    marginBottom: util.WP(3),
    marginTop: util.WP(-3),
    alignSelf: 'center',
    justifyContent:'center'
  },
  addUserTxt: {
    alignSelf: 'center',
    marginTop: util.WP(4),
    fontWeight: 'bold',
    fontSize:util.WP(3)
  },
  delTxt: {
    alignSelf: 'center',
    marginTop: util.WP(10),
    fontWeight: 'bold',
    fontSize:util.WP(3)
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
    marginLeft: util.WP(5),
    marginBottom: util.WP(-2),
    marginTop: util.WP(3),
    fontWeight: 'bold',
    fontSize:util.WP(2)
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
    fontSize:util.WP(3)
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
    borderWidth: util.WP(0.5),
    borderRadius: util.WP(2),
    borderColor: 'grey',
    marginHorizontal: util.WP(3),
    marginTop: util.WP(1),
    paddingBottom: util.WP(2.5),
    marginBottom: util.WP(1),
    flex:1
  },
  deleteHeader: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    height: util.WP(10),
    alignItems: 'center',
    marginBottom: util.WP(2.5),
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#cccccc',
    borderWidth: util.WP(0.2),
    borderRadius: util.WP(1),
    marginVertical: util.WP(1),
    marginHorizontal: util.WP(2),
    paddingVertical: util.WP(4),
    paddingHorizontal: util.WP(1),
    justifyContent: 'space-between',
    alignItems:'center'
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
  requestEmailHead: {
    fontWeight: 'bold',
    marginLeft: util.WP(5),
    color: 'white',
    fontSize: util.WP(4),
  },
  requestTypeHead: {
    fontWeight: 'bold',
    marginLeft: util.WP(18),
    color: 'white',
    fontSize: util.WP(4),
  },
  requestContainer: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: util.WP(90),
    height: util.HP(70),
    marginTop: util.HP(10),
    borderRadius: util.WP(4),
  },
  requestDesc: {
    paddingHorizontal: util.WP(3),
    fontWeight: 'bold',
    marginTop: util.WP(4),
    fontSize: util.WP(4.5),
  },
  requestModalOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    bottom: util.WP(7),
  },
  requestReject: {
    backgroundColor: 'red',
    borderRadius: util.WP(100),
    padding: util.WP(3),
  },
  requestAccept: {
    backgroundColor: 'black',
    borderRadius: util.WP(100),
    padding: util.WP(3),
    marginLeft: util.WP(8),
  },
  requestModalHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: util.WP(3),
  },
  requestHeadText: {
    color: 'grey',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: util.WP(4),
  },
  reviewForm: {
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: util.WP(5),
    top: util.WP(30),
    borderTopLeftRadius: util.WP(7),
    borderTopRightRadius: util.WP(7),
    borderColor: 'grey',
    borderWidth: 2,
  },
  reviewFormText: {
    fontWeight: 'bold',
  },
  emptyList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'grey',
    alignSelf: 'center',
    padding: util.WP(4),
    paddingHorizontal: util.WP(5),
    borderRadius: util.WP(5),
  },
  emptyListText: {
    color: 'white',
    fontSize: util.WP(3)
  },
  deleteTypeHead: {
    fontWeight: 'bold',
    marginLeft: util.WP(13),
    color: 'white',
    fontSize: util.WP(5),
  },
  deleteFormNameHead: {
    fontWeight: 'bold',
    marginLeft: util.WP(14),
    color: 'white',
    fontSize: util.WP(5),
  },
  respondOptions: {
    fontSize: util.WP(4),
    color: 'white',
    fontWeight: 'bold',
  },
  faqText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginVertical: util.WP(4),
    fontSize:util.WP(3)
  },
  faqs: {
    backgroundColor: util.USER_BASE_COLOR,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: util.WP(90),
    height: util.WP(18),
    marginVertical: util.WP(2),
    borderRadius: util.WP(4),
  },
  queText: {
    fontWeight: 'bold',
    fontSize: util.WP(4.5),
    color: 'white',
  },
  currentQue: {
    color: 'grey',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: util.WP(4.5),
    marginLeft: util.WP(3),
    marginTop: util.WP(-5),
  },
  currentAns: {
    paddingHorizontal: util.WP(3),
    fontWeight: 'bold',
    marginTop: util.WP(3),
    fontSize: util.WP(4.5),
  },
  requestInput: {
    marginTop: util.WP(4),
    marginHorizontal: util.WP(4),
    borderWidth: util.WP(0.5),
    paddingHorizontal:util.WP(2),
    borderRadius: util.WP(3),
    height: util.WP(63),
    fontSize:util.WP(3)
  },
  requestSubmitBtn: {
    backgroundColor: util.USER_BASE_COLOR,
    borderRadius: util.WP(100),
    padding: util.WP(4),
  },
  requestNewForm: {
    marginTop: util.WP(4),
    marginHorizontal: util.WP(1),
    borderWidth: util.WP(0.5),
    borderRadius: util.WP(3),
    height: util.WP(70),
    paddingHorizontal: util.WP(2),
    fontSize:util.WP(3)
  },
  newFormHeading: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: util.WP(3),
    fontSize: util.WP(5),
    fontStyle: 'italic',
  },
  requestStatus: {
    fontSize: util.WP(4),
    color: 'grey',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  inputIcon:{
    left:util.WP(-10)
  },
  deleteItemTxt:{
    fontSize:util.WP(2),
     fontWeight:'bold'
  },
  credsText:{
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:util.WP(3)
  },
  loginBtnText:{
    alignSelf: 'center',
    color: 'white',
    fontSize:util.WP(3)
  },
  headerText:{
    alignSelf: 'center',
    color: 'white',
    fontSize:util.WP(3)
  }
});

export default styles;
