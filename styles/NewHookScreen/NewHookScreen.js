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
    paddingTop: '7%',
    color: color.darkBlue,
    paddingBottom: '3%',
  },
  pickerContainer: {
    backgroundColor: color.softGray,
    borderRadius: 25,
    height: 40,
  },
  icon: {
    position: 'absolute',
    right: 1,
    bottom: '25%',
    paddingRight: '5%',
  },
  itemPicker: {
    height: '100%',
    fontSize: 14,
  },
  dropDownPicker: {
    backgroundColor: color.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    alignSelf: 'center',
    position: 'absolute',
    bottom: '5%',
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
  header: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
  },
  title: {
    fontSize: 20,
  },
});

export default { ...styles };
