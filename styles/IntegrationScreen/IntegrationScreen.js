import { StyleSheet } from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  logo: {
    height: '80%',
    width: '23%',
    marginRight: '5%',
  },
  header: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  title: {
    fontWeight: '700',
    marginTop: '3%',
    fontSize: 23,
  },
  gearButton: {
    paddingRight: '80%',
    width: '180%',
  },
  description: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
    marginLeft: 10,
  },
  textDescription: {
    fontSize: 12,
  },
  textWorkspace: {
    fontSize: 12,
    color: colors.blue,
  },
  buttonContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    width: '90%',
    backgroundColor: colors.darkBlue,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: 55,
    marginTop: 30,
  },
  textButton: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default styles;
