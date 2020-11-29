import { StyleSheet } from 'react-native';
import colors from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({

  button: {
    backgroundColor: colors.lightBlue,
    flexDirection: 'row',
    borderRadius: 50,
    width: 200,
    marginVertical: 5,
    height: 60,
    alignItems: 'center',
    paddingLeft: 20,
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'stretch',
    borderRadius: 75,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: colors.white,
    flex: 1,
  },
  buttonText: {
    color: colors.darkBlue,
    marginLeft: 15,
  },
  email: {
    fontSize: 20,
  },
  name: {
    fontSize: 45,
  },
  emailContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  areaInput: {
    width: 180,
    backgroundColor: colors.softGray,
    borderRadius: globalStyle.borderRadiusButton,
    paddingHorizontal: '3%',
    height: globalStyle.heightInput,
  },
});

export default styles;
