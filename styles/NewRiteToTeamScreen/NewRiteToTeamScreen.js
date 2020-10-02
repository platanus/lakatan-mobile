import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '90%',
    margin: '5%',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: '5%',
  },

  infoContainer: {
    padding: '5%',
  },

  teamTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '5%',
  },

  textHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: '10%',
  },

  areaInput: {
    width: '100%',
    height: 40,
    borderBottomWidth: 0.5,
    fontSize: 14,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '100%', // TO DO: separar las view infoContainer y buttonContainer 80-20
  },

  cancelButton: {
    backgroundColor: color.gray,
    width: '40%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },

  textCancelButton: {
    color: color.white,
    fontSize: 18,
  },

  confirmButton: {
    width: '40%',
    backgroundColor: color.blue,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },

  textConfirmButton: {
    color: color.white,
    fontSize: 18,
  },

});

export default { ...styles };
