import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '5%',
  },

  screen: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    // height: '90%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    // marginBottom: '5%',
    paddingTop: '10%',
    paddingHorizontal: '5%',
    paddingBottom: '5%',
  },

  riteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: '5%',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '5%',
    // left: '5%'
  },

  raffleButtonContainer: {
    width: '100%',
    // paddingHorizontal: '5%',
    // marginLeft: '7%',
  },

  newHookContainer: {
    width: '100%',
    marginLeft: '7%',
  },

  raffleButton: {
    backgroundColor: color.blue,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginLeft: '5%',
  },

  disabledRaffleButton: {
    backgroundColor: color.blue,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    opacity: 0.3,
  },

  textRaffleButton: {
    color: color.white,
    fontSize: 18,
  },
  subScreenContainer: {
    width: '90%',
    marginHorizontal: '5%',
  },
  subScreen: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    height: '95%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: '5%',
  },

  listHooksContainer: {},

  applyButton: {
    width: '100%',
    backgroundColor: color.darkBlue,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: 55,
  },
  textApplyButton: {
    color: color.white,
    fontSize: 18,
    fontWeight: '500',
  },

  hookHeader: {
    color: color.darkBlue,
    paddingTop: '5%',
  },
  hookButton: {
    width: '100%',
    backgroundColor: color.lightBlue,
    borderRadius: 50,
    // alignItems: 'left',
    // justifyContent: 'left',
    paddingVertical: 10,
    marginVertical: '2%',
    paddingLeft: '10%',
    height: 55,
  },
  titleHookText: {
    color: color.darkBlue,
    fontSize: 16,
  },
  descriptionHookText: {
    color: '#00CCFF',
  },
  icon: {
    position: 'absolute',
    right: 1,
    bottom: '50%',
    paddingRight: '5%',
  },
});

export default { ...styles };
