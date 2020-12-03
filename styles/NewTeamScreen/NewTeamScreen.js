import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.white,
    paddingHorizontal: globalStyle.paddingContainer,
  },
  formCard: {
    paddingTop: globalStyle.paddingContainer,
  },
  title: {
    textAlign: 'center',
    fontSize: globalStyle.fontSizeTitle,
    fontWeight: 'bold',
  },
  tag: {
    fontSize: globalStyle.fontSizePrincipalText,
    paddingTop: '7%',
    color: color.darkBlue,
    paddingBottom: '3%',
  },
  areaInput: {
    width: '100%',
    backgroundColor: color.lightSoftGray,
    borderRadius: globalStyle.borderRadiusTextInput,
    paddingHorizontal: '3%',
    height: globalStyle.heightInput,
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
  addUserContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: globalStyle.buttonMarginVertival,
  },
  addUser: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addUserButton: {
    width: '100%',
    backgroundColor: color.yellow,
    borderRadius: globalStyle.borderRadiusButton,
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: 10,
    height: globalStyle.heightButton,
  },
  addUserText: {
    color: color.white,
    fontSize: globalStyle.fontSizeButton,
  },
  confirmButton: {
    width: '100%',
    backgroundColor: color.darkBlue,
    borderRadius: globalStyle.borderRadiusButton,
    alignItems: 'center',
    justifyContent: 'center',
    height: globalStyle.heightButton,
  },
  textConfirmButton: {
    color: color.white,
    fontSize: globalStyle.fontSizeButton,
  },
  headerScreen: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  titleScreen: {
    fontSize: globalStyle.fontSizeHeader,
  },
  usersList: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: '5%',
  },
});

export default { ...styles };
