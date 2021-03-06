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
    flex: 1,
    paddingTop: globalStyle.paddingContainer,
  },
  textHeader: {
    fontSize: globalStyle.fontSizePrincipalText,
    paddingTop: globalStyle.paddingTopInput,
    color: color.darkBlue,
    paddingBottom: globalStyle.paddingBottomInput,
  },
  pickerContainer: {
    backgroundColor: color.lightSoftGray,
    borderRadius: globalStyle.borderRadiusTextInput,
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
    backgroundColor: color.lightSoftGray,
    borderRadius: globalStyle.borderRadiusTextInput,
    paddingLeft: '3%',
    height: globalStyle.heightInput,
  },
  httpAreaInput: {
    width: '100%',
    backgroundColor: color.lightSoftGray,
    borderRadius: globalStyle.borderRadiusTextInput,
    paddingLeft: '3%',
    height: globalStyle.heightInput,
    flexDirection: 'row',
    alignItems: 'center',
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
    marginVertical: globalStyle.buttonMarginVertival,
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
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: globalStyle.fontSizeHeader,
  },
});

export default { ...styles };
