import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3170F5',
  },

  logo: {
      resizeMode: 'stretch',
      height: 100,
      width: 100,
  },
  
  platanusTitle: {
      fontSize: 20,
      color: 'white',
      
  },

  lakatamTitle:{
      fontSize: 40,
      fontStyle: 'italic',
      color: 'white',
  },

  button: {
      backgroundColor: '#FAC537',
      borderColor: 'white',
      borderRadius: 10,
      marginTop: 30,
  },
});

export default { ...styles };
