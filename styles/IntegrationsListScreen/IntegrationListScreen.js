import { StyleSheet } from 'react-native';
import colors from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.white,
  },
  button: {
    backgroundColor: colors.lightBlue,
    borderRadius: globalStyle.borderRadiusTouchable,
    width: '90%',
    marginVertical: 5,
    height: 120,
    paddingLeft: '5%',
    paddingVertical: '5%',
  },
  image: {
    height: 28,
    width: 28,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: colors.white,
    flex: 1,
  },
  integrationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descriptionContainer: {
    flex: 1,
  },
  buttonText: {
    color: colors.darkBlue,
    marginLeft: '1%',
    fontSize: 20,
  },
  description: {
    
  },
  activate: {

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
