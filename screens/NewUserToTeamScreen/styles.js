import { StyleSheet } from 'react-native';
import color from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    margin: '5%',
    flex: 1,
    paddingTop: '25%',
    paddingHorizontal: '10%',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: color.white,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: '10%',
  },
  cancelButton: {
    backgroundColor: color.gray,
    width: '40%',
    borderRadius: 5,
  },
  confirmButton: {
    width: '40%',
    backgroundColor: color.blue,
    borderRadius: 5,
  },
});

export default { ...styles };
