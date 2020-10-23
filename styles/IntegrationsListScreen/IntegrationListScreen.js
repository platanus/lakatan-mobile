import { StyleSheet } from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.lightBlue,
    flexDirection: 'row',
    borderRadius: 50,
    width: '85%',
    marginVertical: 5,
    height: 60,
    alignItems: 'center',
    paddingLeft: 20,
  },
  image: {
    height: 30,
    width: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 10,
  },
  buttonText: {
    color: colors.darkBlue,
    marginLeft: 15,
  },
});

export default styles;
