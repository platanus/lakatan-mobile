import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView, TouchableOpacity, ScrollView,
} from 'react-native';

import styles from './styles';
import color from '../../styles/colors';

// function LandingScreen({ navigation, route }) {
const LandingScreen = (props) => {
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
    <View style={{ marginBottom: 50 }}>
      <View style={styles.addTeamButton}>
        <Button title="+" color={color.white} onPress={() => props.navigation.navigate('Nuevo equipo')} />
      </View>
      <ScrollView>
      <View style={styles.container}>
        
        <View style={styles.listOfTeams}>
          {teamList.map((team) => (
            <TouchableOpacity onPress={() => props.navigation.navigate('Equipo', { name: team.name, description: team.description, members: team.members })}>
              <View style={styles.teamCard}>
                <Text style={styles.teamName}>{team.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View>
          <Button title="TEST LOGIN SCREEN" color={color.black} onPress={() => props.navigation.navigate('Iniciar sesión')} />
          <Button title="TEST AGREGAR USUARIO A TEAM" color={color.black} onPress={() => props.navigation.navigate('Agregar usuarios')} />
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

export default LandingScreen;
