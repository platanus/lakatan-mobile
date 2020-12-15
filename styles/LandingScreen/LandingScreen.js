import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: globalStyle.paddingContainer,
    paddingTop: globalStyle.paddingContainer,
    backgroundColor: 'white',
  },
  addTeamButton: {
    marginBottom: 7,
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
    flex: 1,
    width: '100%',
    height: 170,
    marginVertical: 7,
    backgroundColor: color.lightBlue,
    borderRadius: globalStyle.borderRadiusTouchable,
    padding: '8%',
  },
  teamName: {
    textAlign: 'left',
    color: color.darkBlue,
    textTransform: 'capitalize',
    fontSize: 30,
  },
  teamPurpose: {
    color: color.darkGray,
    paddingTop: '2%',
  },
  teamPeople: {
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
    marginLeft: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: globalStyle.fontSizeHeader,
    textTransform: 'capitalize',
  },
  bullet: {
    fontSize: 14,
    color: color.gray,
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberOfTeam: {
    color: '#949c9c',
    marginLeft: '10%',
  },
});

export default { ...styles };
