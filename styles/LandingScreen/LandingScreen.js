import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    margin: '5%',
  },
  addTeamButton: {
    width: '98%',
    height: 50,
    backgroundColor: color.blue,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAddTeamButton: {
    color: color.white,
    fontSize: 18,
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
    width: '98%',
    marginHorizontal: '1%',
    height: 170,
    marginVertical: 10,
    justifyContent: 'center',
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: color.white,
    borderRadius: 5,
  },
  teamName: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: color.blue,
  },

  signOutButton: {
    width: '40%',
    height: 30,
    borderRadius: 5,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSignOutButton: {
    color: color.red,
    fontSize: 15,
  },
  viewSignOutButton: {
    width: '100%',
  },
  menuButton: {
    width: '170%',
    paddingLeft: '70%',
    flexDirection: 'column',
  },
});

export default { ...styles };
