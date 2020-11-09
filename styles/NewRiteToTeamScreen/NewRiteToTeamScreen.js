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
  areaInput: {
    width: '100%',
    backgroundColor: color.softGray,
    borderRadius: globalStyle.borderRadiusButton,
    paddingLeft: globalStyle.paddingInput,
    height: globalStyle.heightInput,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: globalStyle.paddingBottomButton,
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
});

export default { ...styles };
