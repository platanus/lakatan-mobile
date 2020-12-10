import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    paddingHorizontal: globalStyle.paddingContainer,
    flex: 1,
    paddingTop: '4%',
  },
  infoContainer: {
    paddingVertical: globalStyle.paddingContainer,
    alignItems: 'center',
  },
  emailContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  name: {
    fontSize: 32,
  },
  email: {
    fontSize: 20,
  },
  nameTag: {
    color: colors.darkBlue,
    textAlign: 'left',
    fontSize: globalStyle.fontSizePrincipalText,
    marginVertical: '2%',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: '5%',
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: 'stretch',
    borderRadius: 150,
  },
  profileContainer: {
  },
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
  areaInput: {
    width: '100%',
    backgroundColor: colors.lightSoftGray,
    borderRadius: globalStyle.borderRadiusTextInput,
    paddingLeft: globalStyle.paddingInput,
    height: globalStyle.heightInput,
    marginBottom: '2%',
  },
  buttonText: {
    color: colors.darkBlue,
    textDecorationLine: 'underline',
    fontSize: globalStyle.fontSizeSecondaryText,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: globalStyle.buttonMarginVertival,
  },
  confirmButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: globalStyle.borderRadiusButton,
    backgroundColor: colors.darkBlue,
  },
  applyButton: {
    width: '100%',
    borderRadius: globalStyle.borderRadiusButton,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: globalStyle.heightButton,
  },
  textConfirmButton: {
    color: colors.white,
    fontSize: globalStyle.fontSizeButton,
  },
  headerScreen: {
    flexDirection: 'row',
    width: '100%',
  },
  titleScreen: {
    fontSize: globalStyle.fontSizeHeader,
  },
  labelsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: '2%',
  },
  labelView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4fb8e8',
    borderRadius: 50,
    paddingHorizontal: 6,
    paddingVertical: 3,
    marginHorizontal: 2,
    marginVertical: 3,
  },
  labelText: {
    color: colors.white,
    marginRight: 10,
  },
  pickerContainer: {
    backgroundColor: colors.lightSoftGray,
    borderRadius: globalStyle.borderRadiusTextInput,
    height: globalStyle.heightInput,
  },
});

export default styles;
