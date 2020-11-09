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
  multiselect: {
    paddingTop: globalStyle.paddingContainer,
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
  },
  applyButton: {
    width: '100%',
    backgroundColor: color.darkBlue,
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
