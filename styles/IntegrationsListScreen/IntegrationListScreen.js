import { StyleSheet } from 'react-native';
import colors from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
  },
  button: {
    backgroundColor: colors.lightBlue,
    flexDirection: 'row',
    borderRadius: globalStyle.borderRadiusTouchable,
    width: '90%',
    marginVertical: 5,
    height: 120,
    paddingLeft: '5%',
    paddingTop: '5%',
  },
  image: {
    height: 31,
    width: 30,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: colors.white,
    flex: 1,
  },
  integrationContainer: {
    flexDirection: 'row',
  },
  descriptionContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    color: colors.darkBlue,
    marginLeft: '5%',
    paddingTop: '2%',
    fontSize: 18,
  },
  description: {
    position: 'absolute',
    bottom: '40%',
  },
  activate: {
    position: 'absolute',
    // paddingLeft: '9%',
    bottom: '15%',
  },
  header: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: globalStyle.fontSizeHeader,
  },
});

export default styles;
