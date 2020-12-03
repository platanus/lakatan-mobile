import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.darkBlue,
  },
  icon: {
    width: 63,
    height: 70,
    marginBottom: 20,
  },
  text: {
    width: 130,
    height: 30,
    marginBottom: '30%',
  },
});

export default { ...styles };
