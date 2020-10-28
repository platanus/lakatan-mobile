import { StyleSheet } from 'react-native';
import color from '../colors';

const styles = StyleSheet.create({
  container: {
    margin: '5%',
    flex: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    borderRadius: 15,
    backgroundColor: color.white,
  },
  tag: {
    fontSize: 13,
  },
  input: {
    width: '90%',
    marginHorizontal: '10%',
  },
  textInput: {
    width: '90%',
    height: 40,
    borderBottomWidth: 0.5,
    fontSize: 15,
  },
  button: {
    backgroundColor: color.blue,
    borderRadius: 5,
    height: 40,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
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
    alignItems: 'center'
    },
  stepContent: {
    margin: 20,
    flexDirection: "row",

  },
  TitleContent: {
    marginTop: 20,
    alignItems: "center",
  },
  Title :{
    fontSize: 16,
    fontWeight: '400'
  },
  subTitle :{
    fontSize: 14,
    fontWeight: '600',
    marginRight: 10,
  },
  row : {
    marginRight: 40
  }
});

export default styles;
