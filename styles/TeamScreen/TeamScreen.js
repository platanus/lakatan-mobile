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
    paddingVertical: '8%',
  },
  riteScreen: {
    height: '100%',
    backgroundColor: color.white,
    paddingHorizontal: globalStyle.paddingContainer,
    paddingTop: globalStyle.paddingContainer,
  },
  teamTitle: {
    fontSize: globalStyle.fontSizeTitle,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textHeader: {
    color: color.darkBlue,
    paddingTop: '8%',
    paddingVertical: '2%',
    fontSize: globalStyle.fontSizePrincipalText,
  },
  description: {
    fontSize: 13,
  },
  cardOfRite: {
    width: '100%',
    backgroundColor: color.lightBlue,
    borderRadius: 20,
    paddingLeft: '7.5%',
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
    height: globalStyle.heightButton,
  },
  newRiteText: {
    color: color.white,
    fontSize: globalStyle.fontSizeButton,
  },
  riteText: {
    paddingTop: '1%',
    fontSize: globalStyle.fontSizePrincipalText,
    color: color.darkBlue,
  },
  ritePeople: {
    fontSize: 11,
    color: color.cian,
  },
  voting: {
    fontSize: 11,
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
    marginVertical: '50%',
    borderRadius: 5,
  },
  modalView: {
    flex: 1,
    padding: '7%',
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
    marginVertical: globalStyle.buttonMarginVertival,
  },
  applyContainer: {
    width: '100%',
  },
  listRites: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: globalStyle.fontSizeHeader,
    textTransform: 'capitalize',
  },
});

export default { ...styles };
