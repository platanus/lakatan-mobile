import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.blue,
    borderRadius: 5,
    height: 40,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 18,
    color: color.white,

  },
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
  }});

  export default { ...styles };