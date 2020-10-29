import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.white,
    paddingHorizontal: '7%',
  },
  formCard: {
    paddingTop: '10%',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  tag: {
    fontSize: 14,
    paddingTop: '7%',
    color: color.darkBlue,
    paddingBottom: '3%',
  },
  areaInput: {
    // width: '90%',
    // height: 40,
    // borderBottomWidth: 0.5,
    // fontSize: 15,
    // marginBottom: '2%',
    width: '100%',
    backgroundColor: color.softGray,
    borderRadius: 25,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingVertical: 10,
    paddingHorizontal: '3%',
    height: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '5%',
  },
  createButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addUserContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '15%',
  },
  addUser: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addUserButton: {
    width: '100%',
    backgroundColor: color.yellow,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: 55,
  },
  addUserText: {
    color: color.white,
    fontSize: 18,
  },
  cancelButton: {
    backgroundColor: color.red,
    width: '40%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  textCancelButton: {
    color: color.white,
    fontSize: 18,
  },
  confirmButton: {
    width: '100%',
    backgroundColor: color.darkBlue,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: 55,
  },
  textConfirmButton: {
    color: color.white,
    fontSize: 18,
  },
});

export default { ...styles };
