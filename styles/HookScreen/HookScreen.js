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
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: globalStyle.fontSizeHeader,
    textTransform: 'capitalize',
  },
  userContainer: {
    flexDirection: 'row',
    paddingTop: 8,
  },
  userName: {
    width: '45%',
  },
  userId: {
    width: '5%',
  },
  userTitleContainer: {
    flexDirection: 'row',
  },
  userTitle: {
    fontWeight: 'bold',
    width: '45%',
    paddingVertical: 5,
  },
});

export default { ...styles };
