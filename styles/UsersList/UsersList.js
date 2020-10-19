import { StyleSheet } from 'react-native';
import color from '../../styles/colors';

const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
  backButton: {
    marginTop: 15,
    width: '40%',
    borderRadius: 5,
    backgroundColor: color.gray,
  },
  editButton: {
    marginTop: 15,
    width: '40%',
    borderRadius: 5,
    backgroundColor: color.blue,
  },
  screen: {
    padding: 10,
    margin: 20,
    borderRadius: 5,
    width: '90%',
    height: '70%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  teamTitle: {
    marginVertical: '6%',
    fontSize: 24,
    fontWeight: 'bold',
  },
  listOfTeam: {
    width: '100%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  cardOfMember: {
    paddingTop: '1%',
    marginHorizontal: '3%',
    marginVertical: '2%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  cardOfMemberView: {
    width: '100%',
    overflow: 'hidden',
    padding: '3%',
    margin: '2%',
  },
  descriptionContainer: {
    width: '90%',
    marginBottom: '2%',
  },
  description: {
    fontSize: 16,

  },
  items: {
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1%',
  },
  chooseButtonContainer: {
    marginHorizontal: 20,
    borderRadius: 5,
    width: '90%',
    backgroundColor: color.blue,
    flexDirection: 'column',
    justifyContent: 'center',
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
  confirmButton: {
    backgroundColor: color.blue,
    borderRadius: 5,
    marginTop: '5%',
    marginBottom: '3%',
  },
  teamCard: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 7,
    backgroundColor: color.white,
    borderRadius: 5,
  },
  teamName: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: color.blue,
  },
});

export default { ...styles };
