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
    borderRadius: 5,
    backgroundColor: color.white,
    paddingTop: '10%',
  },
  formCard: {

  },
  input: {
    width: '90%',
    marginHorizontal: '10%',
    margin: "1%"
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: '3%',
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
    marginBottom: "2%"
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: '10%',
  },
  addUser: {
    width: '90%',
    height: 60,
    borderRadius: 5,
    margin: "5%",
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 30,
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
