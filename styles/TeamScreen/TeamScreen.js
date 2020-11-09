import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  teamContainer: {
    width: '100%',
    paddingHorizontal: globalStyle.paddingContainer,
    backgroundColor: color.white,
  },
  riteContainer: {
    width: '100%',
  },
  teamScreen: {
    backgroundColor: color.white,
    paddingTop: globalStyle.paddingContainer,
  },
  riteScreen: {
    height: '100%',
    backgroundColor: color.white,
    padding: globalStyle.paddingContainer,
  },
  teamTitle: {
    fontSize: globalStyle.fontSizeTitle,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textHeader: {
    color: color.darkBlue,
    paddingTop: globalStyle.paddingContainer,
    fontSize: globalStyle.fontSizePrincipalText,
  },
  cardOfRite: {
    width: '100%',
    backgroundColor: color.lightBlue,
    borderRadius: globalStyle.borderRadiusButton,
    paddingLeft: '10%',
    paddingVertical: 10,
    marginVertical: globalStyle.marginVerticalPrincipal,
    height: globalStyle.heightButton,
  },
  newRiteButton: {
    backgroundColor: color.darkBlue,
    width: '100%',
    borderRadius: globalStyle.borderRadiusButton,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: globalStyle.heightButton,
  },
  newRiteText: {
    color: color.white,
    fontSize: globalStyle.fontSizeButton,
  },
  riteText: {
    fontSize: globalStyle.fontSizePrincipalText,
    color: color.darkBlue,
  },
  ritePeople: {
    fontSize: globalStyle.fontSizeSecondaryText,
    color: color.cian,
  },
  icon: {
    position: 'absolute',
    right: 1,
    bottom: '15%',
    paddingRight: '5%',
  },
  listOfTeam: {
    height: '100%',
    alignItems: 'center',
  },
  cardOfMember: {
    width: '100%',
    backgroundColor: color.lightBlue,
    borderRadius: globalStyle.borderRadiusButton,
    alignItems: 'center',
    justifyContent: 'center',
    height: globalStyle.heightButton,
    marginVertical: globalStyle.marginVerticalPrincipal,
  },
  cardOfMemberView: {
    width: '100%',
    overflow: 'hidden',
  },
  items: {
    fontSize: globalStyle.fontSizePrincipalText,
    color: color.darkBlue,
  },
  teamListContainer: {
    height: '60%',
  },
  modal: {
    backgroundColor: color.white,
    opacity: 0.9,
    flex: 0.6,
    marginTop: '50%',
    borderRadius: 5,
  },
  modalView: {
    flex: 1,
    padding: '10%',
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: '5%',
  },
  modalUser: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: '10%',
  },
  modalEmoji: {
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: '4%',
  },
  exitButtonContainer: {
    marginTop: '1%',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  exitButton: {
    backgroundColor: color.gray,
    width: '40%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  textExitButton: {
    color: color.white,
    fontSize: globalStyle.fontSizeButton,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    bottom: globalStyle.paddingBottomButton,
  },
  applyContainer: {
    width: '100%',
  },
  listRites: {
    height: '85%',
  },
  header: {
    flexDirection: 'row',
    height: '65%',
    width: '100%',
  },
  title: {
    fontSize: globalStyle.fontSizeHeader,
  },
});

export default { ...styles };
