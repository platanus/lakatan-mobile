import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    padding: globalStyle.paddingContainer,
  },
  config: {
    paddingBottom: '10%',
  },
  tag: {
    fontSize: 13,
  },
  input: {
  },
  textInput: {
    width: '100%',
    backgroundColor: color.lightSoftGray,
    borderRadius: globalStyle.borderRadiusTextInput,
    paddingLeft: '3%',
    height: globalStyle.heightInput,
    marginVertical: '5%',
  },
  button: {
    width: '100%',
    backgroundColor: color.darkBlue,
    borderRadius: globalStyle.borderRadiusButton,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: globalStyle.heightButton,
  },
  textButton: {
    fontSize: 18,
    color: color.white,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
    alignItems: 'center',
  },
  slackContent: {
    alignItems: 'center',
    marginVertical: '5%',
    paddingBottom: '10%',
  },
  stepContent: {
  },
  TitleContent: {
    marginTop: 20,
    alignItems: 'center',
  },
  Title: {
    fontSize: 16,
    fontWeight: '400',
  },
  subTitle: {
    fontSize: 18,
    color: color.darkBlue,
    marginBottom: '5%',
  },
  row: {
  },
  readyButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  createButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
