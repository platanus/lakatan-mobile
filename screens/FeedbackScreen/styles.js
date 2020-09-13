import { StyleSheet } from 'react-native';
import color from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    margin: '5%',
    flex: 1,
    paddingTop: '25%',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: color.white,
    borderRadius: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: '10%',
  },
  startsContainer: {
    paddingHorizontal: '10%',
  },
  inputContainer: {
    paddingVertical: '10%',
  },
  commentInput: {
    height: 200,
    borderWidth: 0.5,
    borderRadius: 3,
    padding: '5%',
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: color.blue,
    borderRadius: 5,
  },
});

export default { ...styles };
