import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: color.white,
    paddingHorizontal: globalStyle.paddingContainer,
  },

  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  instructionView: {
    paddingVertical: '5%',
    paddingHorizontal: '10%',
  },
  instructionText: {
    fontSize: globalStyle.fontSizePrincipalText,
    textAlign: 'center',
    color: color.darkBlue,
  },
  emailView: {
    width: '100%',
    backgroundColor: color.lightSoftGray,
    borderRadius: globalStyle.borderRadiusButton,
    paddingHorizontal: globalStyle.paddingInput,
    height: globalStyle.heightInput,
    justifyContent: 'center',
  },
  emailTextInput: {
    width: '100%',
    textAlign: 'center',
    fontSize: globalStyle.fontSizeSecondaryText,
  },

  footContainer: {
    height: '10%',
  },
  sendTouchable: {
    width: '100%',
    height: globalStyle.heightButton,
    borderRadius: globalStyle.borderRadiusButton,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.darkBlue,
  },
  sendText: {
    color: color.white,
    fontSize: globalStyle.fontSizeButton,
  },
});

export default { ...styles };
