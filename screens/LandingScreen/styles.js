import { StyleSheet } from 'react-native';
import color from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5%',
  },
  addTeamButton: {
    width: '90%',
    marginHorizontal: '5%',
    height: 50,
    backgroundColor: color.blue,
    borderRadius: 5,
    marginTop: 15,
    // marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 30,
  },
  buttonPlus : {
    opacity:0.1
  }
  ,
  listOfTeams: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  teamCard: {
    width: '100%',
    height: 170,
    // marginHorizontal: 20,
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
});

export default { ...styles };