import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: color.white,
    paddingHorizontal: globalStyle.paddingContainer,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
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
  passwordInput: {
    width: '100%',
    backgroundColor: color.lightSoftGray,
    borderRadius: globalStyle.borderRadiusTextInput,
    height: globalStyle.heightInput,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: globalStyle.buttonMarginVertival,
  },
  eyeIcon: {
    marginTop: 7,
    position: 'absolute',
    right: 15,
    bottom: '15%',
  },
  cancelButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    borderRadius: globalStyle.borderRadiusButton,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: globalStyle.buttonMarginVertival,
  },
  signInButton: {
    width: '100%',
    borderRadius: globalStyle.borderRadiusButton,
    alignItems: 'center',
    justifyContent: 'center',
    height: globalStyle.heightButton,
  },
  registerButton: {
    width: '100%',
    backgroundColor: color.yellow,
    borderRadius: globalStyle.borderRadiusButton,
    alignItems: 'center',
    justifyContent: 'center',
    height: globalStyle.heightButton,
  },
  textConfirmButton: {
    color: color.white,
    fontSize: globalStyle.fontSizeButton,
  },
  textCancelButton: {
    color: color.white,
    fontSize: globalStyle.fontSizeButton,
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
  logo: {
    // resizeMode: 'stretch',
    width: '100%',
  },
});

export default { ...styles };
