import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Team from './components/Team'

function LandingScreen ({ navigation, route }) {
  const [teamList, setTeamList] = useState([{ id: 1, name: 'equipo 1', description: 'Descripción del mejor equipo de mobile', members: ['Javier', 'Cristobal'], state: false },
                                            { id: 2, name: 'equipo 2', description: 'Descripción del mejor equipo de mobile', members: ['Luis F.', 'Felipe'], state: false },
                                            { id: 3, name: 'equipo 3', description: 'best-mobile-team', members: ['javier', 'cristobal'], state: false },
                                            { id: 4, name: 'equipo 4', description: 'best-mobile-team', members: ['javier', 'cristobal'], state: false }                                         
                                          ])
  const handlerTeam = (algo) =>{
    setTeamList = (current => { [...current, algo]})
  }
  return (
    <View style={styles.container}>
      <Button style={styles.add} title='Crear Equipo' onPress={() => navigation.navigate("Form")} />
      {teamList.map((team) => 
      <TouchableOpacity onPress={() => navigation.navigate("Team1", { name: team.name, description: team.description, members:team.members})}>
        <View style={styles.team}>
            <Text>{team.name}</Text>
        </View>
      </TouchableOpacity>
      )}
    </View>
  )
}

function TeamsFormScreen ({ navigation }) {
  const [name, changeName] = useState("")
  const [description, changeDescription] = useState("")
  return (
    <KeyboardAvoidingView style={styles.form} behavior="padding">
      <View style={styles.input}>
        <Text style={styles.tag}>Nombre:</Text>
        <TextInput style={styles.areaInput} placeholder="Nombre" value={name} onChange={changeName} />
      </View>
      <View style={styles.input}>
        <Text style={styles.tag}>Descripción:</Text>
        <TextInput style={styles.areaInput} placeholder="Descripción" value={description} onChange={changeDescription} />
      </View>
      <Button title="Agregar equipo" onPress={() => navigation.navigate("Home", { name: name })} />
    </KeyboardAvoidingView>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LandingScreen} />
        <Stack.Screen name="Form" component={TeamsFormScreen} />
        <Stack.Screen name="Team1" component={Team} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    flexDirection: 'row',
    margin: 5,
    fontSize:20,
  },
  areaInput: {
    borderWidth: 2,
    flex: 1,
    marginLeft: 5,
    padding:5,
  },
  tag:{
    marginTop:7,
  },
  form:{
    flex: 1,
    justifyContent: 'center', 
    padding: 40
  },
  teams:{
    flexDirection: 'row',
    justifyContent:'center',
  },
  team: {shadowColor: "black",
  shadowOffset: {width: 0, height: 2},
  shadowRadius: 6,
  shadowOpacity: 0.26,
  elevation: 8,
  backgroundColor: "white",
  padding: 20,
  borderRadius:10,
  margin: 20

  },
  add: {
  }
});
