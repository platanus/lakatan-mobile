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
  formCard: {
    paddingTop: globalStyle.paddingContainer,
  },
  tag: {
    fontSize: globalStyle.fontSizePrincipalText,
    paddingTop: '7%',
    color: color.darkBlue,
    paddingBottom: '3%',
  },
  areaInput: {
    width: '100%',
    backgroundColor: color.lightSoftGray,
    borderRadius: globalStyle.borderRadiusButton,
    paddingHorizontal: '3%',
    height: globalStyle.heightInput,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: globalStyle.paddingBottomButton,
  },
  createButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    width: '100%',
    backgroundColor: color.darkBlue,
    borderRadius: globalStyle.borderRadiusButton,
    alignItems: 'center',
    justifyContent: 'center',
    height: globalStyle.heightButton,
  },
  textConfirmButton: {
    color: color.white,
    fontSize: globalStyle.fontSizeButton,
  },
  header: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
  },
  title: {
    fontSize: globalStyle.fontSizeHeader,
  },
});

export default { ...styles };
