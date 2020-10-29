import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: '7%',
  },
  infoContainer: {
    paddingTop: '10%',
  },
  textHeader: {
    fontSize: 14,
    paddingTop: '7%',
    color: color.darkBlue,
    paddingBottom: '3%',
  },
  instructionContainer: {
    marginTop: '5%',
  },
  instructionText: {
    color: color.gray,
    textAlign: 'center',
    paddingTop: '5%',
  },
  header: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
  },
  title: {
    fontSize: 20,
  },
});

export default { ...styles };
