import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  teamContainer: {
    width: '90%',
    marginHorizontal: '5%',
    marginTop: '5%',
  },
  riteContainer: {
    width: '90%',
    marginHorizontal: '5%',
  },
  teamScreen: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    paddingHorizontal: '5%',
    paddingTop: '10%',
    paddingBottom: '5%',
  },
  riteScreen: {
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
  teamTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingTop: '5%',
  },
  riteButton: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    width: '98%',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '2%',
    height: 40,
    marginHorizontal: '1%',
  },
  newRiteButton: {
    backgroundColor: color.blue,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  newRiteText: {
    color: color.white,
    fontSize: 18,
  },
  riteText: {
    fontSize: 16,
  },
  listOfTeam: {
    height: '100%',
    alignItems: 'center',
  },
  cardOfMember: {
    paddingTop: '1%',
    marginVertical: '2%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  cardOfMemberView: {
    width: '100%',
    paddingHorizontal: '1%',
    overflow: 'hidden',
  },
  items: {
    fontSize: 16,
    textAlign: 'center',
  },
  modal: {
    backgroundColor: color.white,
    opacity: 0.9,
    flex: 0.5,
    marginTop: '60%',
    borderRadius: 5,
  },
  modalView: {
    flex: 1,
    padding: '10%',
  },
  modalMessage: {
    fontSize: 16,
  },
  modalUser: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: '10%',
  },
  modalEmoji: {
    fontSize: 40,
    textAlign: 'center',
    paddingBottom: '4%',
  },
  exitButtonContainer: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  exitButton: {
    backgroundColor: color.gray,
    width: '40%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  textExitButton: {
    color: color.white,
    fontSize: 18,
  },
});

export default { ...styles };
