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
  newVotingText: {
    fontSize: 20,
    paddingTop: '10%',
  },
  deteleVoting: {
    color: color.darkBlue,
    textDecorationLine: 'underline',
  },
  areaInput: {
    width: '100%',
    backgroundColor: color.lightSoftGray,
    borderRadius: globalStyle.borderRadiusTextInput,
    paddingLeft: globalStyle.paddingInput,
    height: globalStyle.heightInput,
  },
  addOptionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: globalStyle.buttonMarginVertival,
  },
  addOptionSubContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: globalStyle.borderRadiusButton,
  },
  createOptionsContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addOption: {
    width: '100%',
    borderRadius: globalStyle.borderRadiusTextInput,
    backgroundColor: color.lightBlue,
    height: globalStyle.heightInput,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addOptionText: {
    color: color.darkBlue,
    fontSize: globalStyle.fontSizePrincipalText,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionsVote: {
    marginBottom: '5%',
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
    backgroundColor: color.darkBlue,
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