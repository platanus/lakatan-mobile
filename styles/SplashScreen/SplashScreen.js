import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3170F5',
  },
  logo: {
    resizeMode: 'stretch',
    height: 100,
    width: 100,
  },
  platanusTitle: {
    fontSize: 20,
    color: 'white',
  },
  button: {
    backgroundColor: '#FAC537',
    borderColor: 'white',
    borderRadius: 10,
    marginTop: 30,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '10%',
  },
  signInButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: '40%',
    backgroundColor: '#3170F5',
    borderRadius: 5,
  },
  textButton: {
    color: color.yellow,
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: '900',
  },
});

export default { ...styles };
