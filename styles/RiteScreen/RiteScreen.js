import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    margin: '5%',
  },

  screen: {
    borderRadius: 5,
    height: '90%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    marginBottom: '5%',
    padding: '10%',
  },

  riteTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  infoRite: {},

  textHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: '10%',
  },

  textInfo: {},

  raffleContainer: {},

  raffleButtonContainer: {},

  raffleButton: {
    backgroundColor: color.blue,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },

  textRaffleButton: {
    color: color.white,
    fontSize: 18,
  },

});

export default { ...styles };