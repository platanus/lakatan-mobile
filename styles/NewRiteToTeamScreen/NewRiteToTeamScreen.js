import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: color.white,
    paddingHorizontal: globalStyle.paddingContainer,
  },
  infoContainer: {
    flex: 1,
    paddingTop: globalStyle.paddingContainer,
  },
  teamTitle: {
    fontSize: globalStyle.fontSizeTitle,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: globalStyle.paddingContainer,
  },
  textHeader: {
    fontSize: globalStyle.fontSizePrincipalText,
    paddingTop: globalStyle.paddingTopInput,
    color: color.darkBlue,
    paddingBottom: globalStyle.paddingBottomInput,
  },
  newRiteText: {
    fontSize: 20,
    paddingBottom: '5%',
    paddingTop: '10%',
  },
  areaInput: {
    width: '100%',
    backgroundColor: color.lightSoftGray,
    borderRadius: globalStyle.borderRadiusTextInput,
    paddingLeft: globalStyle.paddingInput,
    height: globalStyle.heightInput,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: globalStyle.buttonMarginVertival,
  },
  confirmButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: globalStyle.borderRadiusButton,
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
    color: color.white,
    fontSize: globalStyle.fontSizeButton,
  },
  headerScreen: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
  },
  titleScreen: {
    fontSize: globalStyle.fontSizeHeader,
  },
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
});

export default { ...styles };
