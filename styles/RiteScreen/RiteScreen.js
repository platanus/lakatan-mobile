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
  },
  riteTitle: {
    fontSize: globalStyle.fontSizeTitle,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSharedHeader: {
    color: color.darkBlue,
    paddingTop: globalStyle.paddingContainer,
    fontSize: globalStyle.fontSizePrincipalText
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
    padding: globalStyle.paddingContainer,
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
  },
  hookButton: {
    width: '100%',
    backgroundColor: color.lightBlue,
    borderRadius: globalStyle.borderRadiusButton,
    paddingVertical: 10,
    marginVertical: '2%',
    paddingLeft: '10%',
    height: globalStyle.heightButton,
  },
  titleHookText: {
    color: color.darkBlue,
    fontSize: globalStyle.fontSizePrincipalText,
  },
  descriptionHookText: {
    color: color.cian,
  },
  icon: {
    position: 'absolute',
    right: 1,
    bottom: '50%',
    paddingRight: '5%',
  },
  header: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
  },
  title: {
    fontSize: globalStyle.fontSizeHeader,
  },
  raffleUserList: {
    alignSelf: 'center',
    width: '90%',
    flex: 1,
  },
});

export default { ...styles };
