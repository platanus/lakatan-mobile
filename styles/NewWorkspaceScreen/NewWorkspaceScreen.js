import { StyleSheet } from 'react-native';
import color from '../colors';

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
    paddingTop: '15%',
  },
  tag: {
    fontSize: 13,
  },
  input: {
    width: '90%',
    marginHorizontal: '10%',
  },
  textInput: {
    width: '90%',
    height: 40,
    borderBottomWidth: 0.5,
    fontSize: 15,
  },
  button: {
    backgroundColor: color.blue,
    borderRadius: 5,
    height: 40,
    width: 110,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textButton: {
    fontSize: 18,
    color: color.white,
    paddingLeft: 35,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
    alignItems: 'center',
  },
});

export default styles;
