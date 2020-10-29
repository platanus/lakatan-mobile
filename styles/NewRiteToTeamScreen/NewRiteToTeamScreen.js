import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.white,
    paddingHorizontal: '7%',
  },

  infoContainer: {
    paddingTop: '5%',
  },

  teamTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '5%',
  },

  textHeader: {
    // fontWeight: 'bold',
    // fontSize: 16,
    // marginTop: '10%',
    fontSize: 14,
    paddingTop: '7%',
    color: color.darkBlue,
    paddingBottom: '3%',
  },

  areaInput: {
    // width: '100%',
    // height: 40,
    // borderBottomWidth: 0.5,
    // fontSize: 14,
    width: '100%',
    backgroundColor: color.softGray,
    borderRadius: 25,
    paddingLeft: '3%',
    height: 40,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '5%',
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
    // width: '40%',
    // backgroundColor: color.blue,
    // borderRadius: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  applyButton: {
    width: '100%',
    // backgroundColor: color.darkBlue,
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
  headerScreen: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
  },
  titleScreen: {
    fontSize: 20,
  },
});

export default { ...styles };
