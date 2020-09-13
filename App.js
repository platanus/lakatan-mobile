/* eslint-disable react/jsx-filename-extension */
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Team from './components/Team/Team';
import FeedbackScreen from './screens/FeedbackScreen/FeedbackScreen';

import color from './styles/colors';

function LandingScreen({ navigation, route }) {
  const [teamList, setTeamList] = useState([{
    id: 1, name: 'Mobile Capstone 1', description: 'Descripción Equipo 1...', members: ['Felipe Apablaza', 'Felipe Beltrán', 'Cristobal Ilabaca', 'Javier Tramon'], state: false,
  },
  {
    id: 2, name: 'Mobile Capstone 2', description: 'Descripción Equipo 2...', members: ['Felipe Apablaza', 'Felipe Beltrán', 'Cristobal Ilabaca', 'Javier Tramon'], state: false,
  },
  {
    id: 3, name: 'Mobile Capstone 3', description: 'Descripción Equipo 3...', members: ['Felipe Apablaza', 'Felipe Beltrán', 'Cristobal Ilabaca', 'Javier Tramon'], state: false,
  },
  {
    id: 4, name: 'Mobile Capstone 4', description: 'Descripción Equipo 4...', members: ['Felipe Apablaza', 'Felipe Beltrán', 'Cristobal Ilabaca', 'Javier Tramon'], state: false,
  },
  ]);
  const handlerTeam = (algo) => {
    setTeamList = ((current) => { [...current, algo]; });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.addTeamButton}>
          <Button title="+" color={color.white} onPress={() => navigation.navigate('Nuevo equipo')} />
        </View>
        <View>
          <Button title="TEST FEEDBACK SCREEN" color={color.black} onPress={() => navigation.navigate('Feedback')} />
        </View>
        <View style={styles.listOfTeams}>
          {teamList.map((team) => (
            <TouchableOpacity onPress={() => navigation.navigate('Equipo', { name: team.name, description: team.description, members: team.members })}>
              <View style={styles.teamCard}>
                <Text style={styles.teamName}>{team.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

function TeamsFormScreen({ navigation }) {
  const [name, changeName] = useState('');
  const [description, changeDescription] = useState('');
  return (
    // <KeyboardAvoidingView style={styles.form} behavior="padding">
    <View style={styles.formContainer}>
      <View style={styles.formCard}>
        <View style={styles.input}>
          <Text style={styles.tag}>Nombre:</Text>
          <TextInput style={styles.areaInput} placeholder="Ej: 'Mobile Capstone'" value={name} onChange={changeName} />
        </View>
        <View style={styles.input}>
          <Text style={styles.tag}>Descripción:</Text>
          <TextInput style={styles.areaInput} placeholder="Ej: 'Equipo encargado de Lakatan-Mobile'" value={description} onChange={changeDescription} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.cancelButton}><Button title="Cancelar" color={color.white} /></View>
        <View style={styles.addButton}><Button title="Confirmar" color={color.white} onPress={() => navigation.navigate('Equipos', { name })} /></View>
      </View>
    </View>
  // </KeyboardAvoidingView>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Equipos" component={LandingScreen} />
        <Stack.Screen name="Nuevo equipo" component={TeamsFormScreen} />
        <Stack.Screen name="Equipo" component={Team} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
  },

  addTeamButton: {
    width: '90%',
    height: 50,
    backgroundColor: color.blue,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 30,
  },

  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20, // REVISAR
  },

  cancelButton: {
    // marginTop: 15,
    width: '40%',
    borderRadius: 5,
    backgroundColor: color.red,
  },
  addButton: {
    // marginTop: 15,
    width: '40%',
    borderRadius: 5,
    backgroundColor: color.blue,
  },

  listOfTeams: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  teamCard: {
    width: '90%',
    height: 170,
    marginHorizontal: 20,
    marginVertical: 10,
    justifyContent: 'center',
    shadowColor: color.black,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: color.white,
    borderRadius: 5,
  },

  teamName: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: color.blue,
  },

  formContainer: {
    flex: 1,
  },

  formCard: {

    width: '90%',
    // flex: 1,
    borderRadius: 5,
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: color.white,
  },

  input: {
    // flexDirection: 'row',
    width: '90%',
    marginVertical: 40,
    marginHorizontal: 20,
  },
  areaInput: {
    // borderWidth: 2,
    borderBottomWidth: 0.5,
    marginTop: 5,
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 10,
    // flex: 1,
    // marginLeft: 5,
    // padding: 5,
  },
  tag: {
    marginTop: 7,
    fontSize: 13,
  },

  form: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  teams: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

});
