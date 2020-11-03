import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: '7%',
    backgroundColor: color.white,
  },
  screen: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingTop: '7%',
  },
  riteTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textSharedHeader: {
    color: color.darkBlue,
    paddingTop: '5%',
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
    alignSelf: 'center',
    bottom: '5%',
  },
  raffleButtonContainer: {
    width: '100%',
  },
  newHookContainer: {
    width: '100%',
  },
  raffleButton: {
    backgroundColor: color.blue,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  disabledRaffleButton: {
    backgroundColor: color.darkBlue,
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: 55,
    opacity: 0.5,
  },
  textRaffleButton: {
    color: color.white,
    fontSize: 18,
  },
  subScreenContainer: {
    width: '100%',
    height: '100%',
  },
  subScreen: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    height: '100%',
    elevation: 8,
    backgroundColor: 'white',
    padding: '7%',
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
    color: color.cian,
  },
  icon: {
    position: 'absolute',
    right: 1,
    bottom: '50%',
    paddingRight: '5%',
  },
  header: {
    flexDirection: 'row',
    height: '50%',
    width: '100%',
  },
  title: {
    fontSize: 20,
  },
});

export default { ...styles };
