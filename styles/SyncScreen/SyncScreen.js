import { StyleSheet } from 'react-native';
import colors from '../colors';

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingTop: '1%',
    paddingBottom: '1%',
    paddingHorizontal: '5%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  stepView: {
    // backgroundColor: colors.yellow,
    // borderRadius: 50,
    // width: 110,
    // alignItems: 'left',
    marginTop: '5%',
    alignSelf: 'flex-start',
  },
  stepText: {
    // color: colors.white,
    // fontWeight: 'bold',
    // fontSize: 15,
    fontSize: 18,
    color: colors.darkBlue,
    marginBottom: '5%',
    textAlign: 'left',
  },
  descriptionView: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 5,
  },
  descriptionText: {
    fontSize: 12,
  },
  workspaceText: {
    fontSize: 12,
    marginHorizontal: 3,
    color: colors.blue,
  },
  applyTouchable: {
    width: '100%',
    backgroundColor: colors.darkBlue,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: 55,
  },
  applyText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '500',
  },
  syncItemListContainer: {
    flex: 0.95,
    width: '100%',
  },
  footContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },

  footTouchable: {
    width: '20%',
    paddingVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footText: {
    color: colors.darkBlue,
    textDecorationLine: 'underline',
  },
});

export default { ...styles };
