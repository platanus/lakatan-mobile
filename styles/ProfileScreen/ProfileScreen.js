import { StyleSheet } from 'react-native';
import colors from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: globalStyle.paddingContainer,
    flex: 1,
    paddingTop: '5%',
  },
  infoContainer: {
    paddingVertical: '8%',
    paddingTop: globalStyle.paddingContainer,
    alignItems: 'center',
  },
  emailContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  name: {
    fontSize: 32,
  },
  email: {
    fontSize: 20,
  },
  nameTag: {
    color: colors.darkBlue,
    textAlign: 'left',
    fontSize: globalStyle.fontSizePrincipalText,
    marginVertical: '2%',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: '10%',
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'stretch',
    borderRadius: 100,
  },
  profileContainer: {
  },
  button: {
    backgroundColor: colors.lightBlue,
    flexDirection: 'row',
    borderRadius: 50,
    width: 200,
    marginVertical: 5,
    height: 60,
    alignItems: 'center',
    paddingLeft: 20,
  },
  areaInput: {
    width: '100%',
    backgroundColor: colors.lightSoftGray,
    borderRadius: globalStyle.borderRadiusTextInput,
    paddingLeft: globalStyle.paddingInput,
    height: globalStyle.heightInput,
    marginBottom: '2%',
  },
  buttonText: {
    color: colors.darkBlue,
    textDecorationLine: 'underline',
    fontSize: globalStyle.fontSizeSecondaryText,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: globalStyle.buttonMarginVertival,
  },
  confirmButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: globalStyle.borderRadiusButton,
    backgroundColor: colors.darkBlue,
  },
  applyButton: {
    width: '100%',
    borderRadius: globalStyle.borderRadiusButton,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: globalStyle.heightButton,
  },
  textConfirmButton: {
    color: colors.white,
    fontSize: globalStyle.fontSizeButton,
  },
  headerScreen: {
    flexDirection: 'row',
    width: '100%',
  },
  titleScreen: {
    fontSize: globalStyle.fontSizeHeader,
  },
});

export default styles;
