import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  teamContainer: {
    width: '100%',
    paddingHorizontal: '7%',
    backgroundColor: color.white,
  },
  riteContainer: {
    width: '100%',
  },
  teamScreen: {
    backgroundColor: 'white',
    paddingTop: '7%',
  },
  riteScreen: {
    height: '100%',
    backgroundColor: 'white',
    padding: '5%',
  },
  teamTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textHeader: {
    color: color.darkBlue,
    paddingTop: '5%',
  },
  cardOfRite: {
    width: '100%',
    backgroundColor: color.lightBlue,
    borderRadius: 50,
    paddingLeft: '8%',
    paddingVertical: 10,
    height: 55,
    marginVertical: '2%',
  },
  newRiteButton: {
    backgroundColor: color.darkBlue,
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: 55,
  },
  newRiteText: {
    color: color.white,
    fontSize: 18,
  },
  riteText: {
    fontSize: 16,
    color: color.darkBlue,
  },
  ritePeople: {
    fontSize: 13,
    color: color.cian,
  },
  icon: {
    position: 'absolute',
    right: 1,
    bottom: '15%',
    paddingRight: '5%',
  },
  listOfTeam: {
    height: '100%',
    alignItems: 'center',
  },
  cardOfMember: {
    width: '100%',
    backgroundColor: color.lightBlue,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    height: 55,
    marginVertical: '2%',
  },
  cardOfMemberView: {
    width: '100%',
    paddingHorizontal: '1%',
    overflow: 'hidden',
  },
  items: {
    fontSize: 16,
    color: color.darkBlue,

  },
  teamListContainer: {
    height: '60%',
  },
  modal: {
    backgroundColor: color.white,
    opacity: 0.9,
    flex: 0.6,
    marginTop: '50%',
    borderRadius: 5,
  },
  modalView: {
    flex: 1,
    padding: '10%',
  },
  modalMessage: {
    fontSize: 16,
    marginBottom: '5%',
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
    marginTop: '1%',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'center',
    bottom: '5%',
  },
  applyContainer: {
    width: '100%',
  },
  listRites: {
    height: '85%',
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
