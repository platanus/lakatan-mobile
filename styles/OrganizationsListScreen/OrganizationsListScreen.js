import { StyleSheet } from 'react-native';
import colors from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
    padding: globalStyle.paddingContainer,
  },
  image: {
    height: 31,
    width: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  buttonTextContainer: {
    width: '100%',
    height: 50,
    marginVertical: 5,
    justifyContent: 'center',
    backgroundColor: colors.lightBlue,
    borderRadius: globalStyle.borderRadiusButton,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkBlue,
  },
  header: {
    flexDirection: 'row',
    height: '65%',
    width: '100%',
  },
  title: {
    fontSize: globalStyle.fontSizeHeader,
  },
});

export default styles;
