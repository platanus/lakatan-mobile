import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  container: {
    margin: '5%',
    flex: 1,
    paddingTop: '10%',
    paddingHorizontal: '5%',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: color.white,
    borderRadius: 5,
  },
  selectContainer: {
    height: '80%',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: '5%',
    marginLeft: '6%',
  },
  cancelButton: {
    backgroundColor: color.gray,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  confirmButton: {
    width: '100%',
    backgroundColor: color.blue,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  confirmButtonContainer: {
    width: '40%',
  },
  cancelButtonContainer: {
    width: '40%',
  },
  textCancelButton: {
    color: color.white,
    fontSize: 18,
  },
  textConfirmButton: {
    color: color.white,
    fontSize: 18,
  },

});

export default { ...styles };
