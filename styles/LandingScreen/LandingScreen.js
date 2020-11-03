import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: globalStyle.paddingContainer,
    backgroundColor: 'white',
  },
  addTeamButton: {
    width: '100%',
    height: globalStyle.heightButton,
    backgroundColor: color.darkBlue,
    borderRadius: globalStyle.borderRadiusButton,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAddTeamButton: {
    color: color.white,
    fontSize: globalStyle.fontSizeButton,
  },
  buttonPlus: {
    opacity: 0.1,
  },
  listOfTeams: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  teamCard: {
    width: '100%',
    height: 170,
    marginVertical: 10,
    justifyContent: 'center',
    backgroundColor: color.lightBlue,
    borderRadius: globalStyle.borderRadiusButton,
  },
  teamName: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: color.darkBlue,
  },
  signOutButton: {
    width: '40%',
    height: 30,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSignOutButton: {
    color: color.red,
    fontSize: globalStyle.fontSizeButton,
  },
  viewSignOutButton: {
    width: '100%',
  },
  menuButton: {
    width: '170%',
    paddingLeft: '70%',
    flexDirection: 'column',
  },
  backButton: {
    width: '200%',
    paddingLeft: '100%',
    flexDirection: 'column',
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
