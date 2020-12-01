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
    height: 50,
    width: 50,
  },
  buttonContainer: {
    // alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
  },
  buttonTextContainer: {
    width: '100%',
    height: 60,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    borderRadius: globalStyle.borderRadiusButton,
  },
  buttonText: {
    textAlign: 'left',
    fontSize: 18,
    // fontWeight: 'bold',
    color: colors.darkBlue,
    paddingLeft: '5%',
    textTransform: 'capitalize',
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
