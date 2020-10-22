import { StyleSheet } from 'react-native';
import color from '../../styles/colors';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: color.white,
    padding: '5%',
    height: '100%',
  },
  tokenText: {
    color: '#0050b3',
  },
  tokenInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 50,
    paddingLeft: '3%',
    paddingRight: '5%',
    width: '100%',
    height: 30,
    marginVertical: '2%',
  },
  readyButton: {
    backgroundColor: '#096dd9',
    borderRadius: 50,
    paddingLeft: '3%',
    paddingRight: '5%',
    width: '100%',
    height: 55,
    marginVertical: '3%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: '5%',
    marginLeft: '5%',
  },
  readyText: {
    color: color.white,
    fontSize: 20,
  },
});

export default { ...styles };
