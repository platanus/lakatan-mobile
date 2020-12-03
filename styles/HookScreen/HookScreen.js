import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: globalStyle.paddingContainer,
  },
  infoContainer: {
    paddingTop: globalStyle.paddingContainer,
  },
  textHeader: {
    fontSize: globalStyle.fontSizePrincipalText,
    paddingTop: '10%',
    color: color.darkBlue,
    paddingBottom: '2%',
  },
  instructionContainer: {
    marginTop: '5%',
  },
  instructionText: {
    color: color.gray,
    textAlign: 'center',
    paddingTop: '5%',
  },
  urlContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  textDescription: {
    width: '90%',
  },
  copyIcon: {},
  header: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
  },
  title: {
    fontSize: globalStyle.fontSizeHeader,
    textTransform: 'capitalize',
  },
});

export default { ...styles };
