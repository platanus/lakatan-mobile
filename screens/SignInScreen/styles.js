import { StyleSheet } from 'react-native';
import color from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    margin: '5%',
    flex: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    borderRadius: 15,
    backgroundColor: color.white,
    paddingTop: '25%',
    
    
  },
  formCard: {},
  input: {
    width: '90%',
    marginHorizontal: '10%',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: '10%',
  },
  tag: {
    marginTop: '10%',
    fontSize: 13,
  },
  areaInput: {
    width: '90%',
    height: 40,
    borderBottomWidth: 0.5,
    fontSize: 15,
  },

  passwordInput: {
    flexDirection: 'row',
    width: '90%',
    height: 40,
    borderBottomWidth: 0.5,
    fontSize: 15,
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: '10%',
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
