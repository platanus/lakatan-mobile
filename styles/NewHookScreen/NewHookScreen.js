import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: '7%',
  },
  infoContainer: {
    paddingTop: '10%',
  },
  textHeader: {
    fontSize: 14,
    paddingTop: '5%',
    color: color.darkBlue,
    paddingBottom: '3%',
  },
  picker: {
    backgroundColor: color.softGray,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  dropDownPicker: {
    backgroundColor: color.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  areaInput: {
    width: '100%',
    backgroundColor: color.softGray,
    borderRadius: 25,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingVertical: 10,
    paddingLeft: '3%',
    height: 40,
  },
  instructionContainer: {
    marginTop: '5%',
  },
  instructionText: {
    color: color.gray,
    textAlign: 'center',
    paddingTop: '5%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '5%',
    left: '7%',
  },
  confirmButton: {
    width: '100%',
    marginLeft: '7%',
  },
  createButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButton: {
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
    fontWeight: '500',
  },
});

export default { ...styles };
