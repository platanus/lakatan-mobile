import React, { useState, useEffect } from 'react';
import {
  Text, View, Button, TouchableOpacity, ScrollView, FlatList,
} from 'react-native';

import styles from './styles';
import color from '../../styles/colors';

const TeamView = (props) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Equipo', { name: props.team.item.name, description: props.team.item.description, members: props.team.item.members })}>
      <View style={styles.teamCard}>
        <Text style={styles.teamName}>{props.team.item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

// function LandingScreen({ navigation, route }) {
function LandingScreen(props) {
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

  const [teamId, setTeamId] = useState(5);

  const handlerTeam = (newTeam) => {
    setTeamList([...teamList, newTeam]);
  };

  useEffect(() => {
    if (props.route.params?.name) {
      const { name, description } = props.route.params
      handlerTeam({
        id: teamId, name, description, members: ['Felipe apablaza'], state: false,
      });
      setTeamId(teamId + 1);
    }
  }, [props.route.params?.name]);

  return (
    <View style={styles.container}>
      <View style={styles.addTeamButton}>
        <Button title="+" color={color.white} onPress={() => props.navigation.navigate('Nuevo equipo')} />
      </View>
      <View>
        <Button title="TEST FEEDBACK SCREEN" color={color.black} onPress={() => props.navigation.navigate('Feedback')} />
        <Button title="TEST LOGIN SCREEN" color={color.black} onPress={() => props.navigation.navigate('Iniciar sesión')} />
        <Button title="TEST AGREGAR USUARIO A TEAM" color={color.black} onPress={() => props.navigation.navigate('Agregar usuarios')} />
      </View>
      <View style={styles.listOfTeams}>
        <FlatList
          data={teamList}
          renderItem={(team) => <TeamView navigation={props.navigation} team={team} />}
          keyExtractor={(team) => team.id.toString()}
        />
      </View>
    </View>
  );
}

export default LandingScreen;
