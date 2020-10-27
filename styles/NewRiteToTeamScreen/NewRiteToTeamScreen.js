import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // margin: '5%',
    borderRadius: 5,
    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 1 },
    // shadowRadius: 3,
    // shadowOpacity: 0.26,
    // elevation: 8,
    backgroundColor: 'white',
    padding: '5%',
  },

  infoContainer: {
    padding: '5%',
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

});

export default { ...styles };
