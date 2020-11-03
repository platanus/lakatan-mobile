import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: globalStyle.paddingContainer,
  },
  infoContainer: {
    paddingTop: globalStyle.paddingContainer,
  },
  textHeader: {
    fontSize: globalStyle.fontSizePrincipalText,
    paddingTop: globalStyle.paddingTopInput,
    color: color.darkBlue,
    paddingBottom: globalStyle.paddingBottomInput,
  },
  pickerContainer: {
    backgroundColor: color.softGray,
    borderRadius: globalStyle.borderRadiusButton,
    height: globalStyle.heightInput,
  },
  icon: {
    position: 'absolute',
    right: 1,
    bottom: '25%',
    paddingRight: '5%',
  },
  itemPicker: {
    height: '100%',
    fontSize: globalStyle.fontSizeSecondaryText,
  },
  areaInput: {
    width: '100%',
    backgroundColor: color.softGray,
    borderRadius: globalStyle.borderRadiusButton,
    paddingLeft: '3%',
    height: globalStyle.heightInput,
  },
  instructionContainer: {
    marginTop: globalStyle.paddingContainer,
  },
  instructionText: {
    color: color.gray,
    textAlign: 'center',
    paddingTop: globalStyle.paddingContainer,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: globalStyle.paddingBottomButton,
  },
  createButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyButton: {
    width: '100%',
    backgroundColor: color.darkBlue,
    borderRadius: globalStyle.borderRadiusButton,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: globalStyle.heightButton,
  },
  textConfirmButton: {
    color: color.white,
    fontSize: globalStyle.fontSizeButton,
    fontWeight: '500',
  },
  header: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
  },
  title: {
    fontSize: globalStyle.fontSizeHeader,
  },
});

export default { ...styles };
