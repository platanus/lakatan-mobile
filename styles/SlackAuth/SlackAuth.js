import { StyleSheet } from 'react-native';
import color from '../colors';
import globalStyle from '../globalStyle';

const styles = StyleSheet.create({
  button: {
    // backgroundColor: color.blue,
    // borderRadius: 5,
    // height: 40,
    // width: 130,
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
  bottomContent: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  buttonContainer: {
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

export default { ...styles };
