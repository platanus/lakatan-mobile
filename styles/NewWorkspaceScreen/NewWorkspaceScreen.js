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
    // width: '90%',
    // marginHorizontal: '10%',
  },
  textInput: {
    // width: '90%',
    // height: 40,
    // borderBottomWidth: 0.5,
    // fontSize: 15,
    width: '100%',
    backgroundColor: color.lightSoftGray,
    borderRadius: globalStyle.borderRadiusTextInput,
    paddingLeft: '3%',
    height: globalStyle.heightInput,
    marginVertical: '5%',
  },
  button: {
    // backgroundColor: color.blue,
    // borderRadius: 5,
    // height: 40,
    // width: 110,
    // justifyContent: 'center',
    // alignItems: 'center',
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
    // margin: 20,
    // flexDirection: 'row',

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
    // fontWeight: '600',
    // marginRight: 10,
  },
  row: {
    // marginRight: 40,
  },
  readyButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    // position: 'absolute',
    // bottom: globalStyle.paddingBottomButton,
  },
  createButtonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
