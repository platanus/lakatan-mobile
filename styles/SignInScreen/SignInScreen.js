import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: color.darkBlue,
  },

  lakatanHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.darkBlue,
    flex: 1,
  },
  icon: {
    width: 54,
    height: 60,
    marginBottom: 10,
  },
  text: {
    width: 100,
    height: 23,
  },

  body: {
    backgroundColor: color.white,
    paddingHorizontal: globalStyle.paddingContainer,
    flex: 3,
  },
  tag: {
    fontSize: globalStyle.fontSizePrincipalText,
    color: color.darkBlue,
    paddingTop: globalStyle.paddingTopInput,
    paddingBottom: globalStyle.paddingBottomInput,
  },
  areaInput: {
    width: '100%',
    backgroundColor: color.lightSoftGray,
    borderRadius: globalStyle.borderRadiusTextInput,
    paddingHorizontal: globalStyle.paddingInput,
    height: globalStyle.heightInput,
  },
  eyeIcon: {
    marginTop: 7,
    position: 'absolute',
    right: 15,
    bottom: '15%',
  },
  forgotPasswordView: {
    marginTop: 30,
    alignSelf: 'center',
  },
  forgotPasswordText: {
    alignSelf: 'center',
    color: color.darkBlue,
    fontSize: globalStyle.fontSizePrincipalText,
    textDecorationLine: 'underline',
  },

  confirmButton: {
    borderRadius: globalStyle.borderRadiusButton,
    height: globalStyle.heightButton,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: globalStyle.buttonMarginVertival,
  },
  textConfirmButton: {
    color: color.white,
    fontSize: globalStyle.fontSizeButton,
  },
  subBody: {
    flex: 1,
  },
});

export default { ...styles };
