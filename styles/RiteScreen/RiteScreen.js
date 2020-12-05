import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: color.white,
    paddingHorizontal: globalStyle.paddingContainer,
  },
  screen: {
    paddingTop: globalStyle.paddingContainer,
    paddingVertical: '8%',
  },
  riteTitle: {
    fontSize: globalStyle.fontSizeTitle,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSharedHeader: {
    color: color.darkBlue,
    paddingTop: '8%',
    paddingVertical: '2%',
    fontSize: globalStyle.fontSizePrincipalText,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: globalStyle.fontSizePrincipalText,
    paddingTop: '5%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: globalStyle.buttonMarginVertival,
  },
  raffleButtonContainer: {
    width: '100%',
  },
  newHookContainer: {
    width: '100%',
  },
  raffleButton: {
    backgroundColor: color.blue,
    width: '100%',
    borderRadius: globalStyle.borderRadiusButton,
    alignItems: 'center',
    justifyContent: 'center',
    height: globalStyle.heightButton,
  },
  disabledRaffleButton: {
    backgroundColor: color.darkBlue,
    width: '100%',
    borderRadius: globalStyle.borderRadiusButton,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: globalStyle.heightButton,
    opacity: 0.5,
  },
  textRaffleButton: {
    color: color.white,
    fontSize: globalStyle.fontSizeButton,
  },
  subScreenContainer: {
    width: '100%',
    height: '100%',
  },
  subScreen: {
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: globalStyle.paddingContainer,
    paddingTop: globalStyle.paddingContainer,
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
  textApplyButton: {
    color: color.white,
    fontSize: globalStyle.fontSizeButton,
    fontWeight: '500',
  },
  hookHeader: {
    color: color.darkBlue,
    fontSize: globalStyle.fontSizePrincipalText,
  },
  textInfo: {
    paddingBottom: globalStyle.paddingTopInput,
    paddingVertical: '2%',
  },
  hookButton: {
    width: '100%',
    backgroundColor: color.lightBlue,
    borderRadius: globalStyle.borderRadiusButton,
    paddingVertical: 10,
    marginVertical: 3,
    paddingLeft: '10%',
    height: 65,
  },
  titleHookText: {
    color: color.darkBlue,
    fontSize: globalStyle.fontSizePrincipalText,
  },
  descriptionHookText: {
    color: color.cian,
    fontSize: 12,
  },
  icon: {
    position: 'absolute',
    right: 1,
    bottom: '50%',
    paddingRight: '5%',
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
  raffleUserList: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },
  listHooksContainerInput: {
  },
  listHooksContainerOutput: {
  },
});

export default { ...styles };
