import React, { useState, useEffect } from 'react';
import {
  Text, View, Button, TouchableOpacity, ScrollView, FlatList,
} from 'react-native';

import styles from '../../styles/LandingScreen/LandingScreen';
import color from '../../styles/colors';

const TeamView = (props) => {
  const { name, description, members, rites } = props.team.item;

  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Team', { name, description, members, rites })}>
      <View style={styles.teamCard}>
        <Text style={styles.teamName}>{props.team.item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

function LandingScreen(props) {
  const [teamList, setTeamList] = useState([{
    id: 1,
    name: 'Mobile Capstone 1',
    description: 'Propósito Equipo 1...',
    members: [
      { id: 1, name: 'Felipe Apablaza MC1' },
      { id: 2, name: 'Felipe Beltrán MC1' },
      { id: 3, name: 'Cristobal Ilabaca MC1' },
      { id: 4, name: 'Javier Tramon MC1' },
    ],
    rites: [
      {
        id: 1, name: 'Rito 1 equipo MC 1', people: 1, objective: 'Objetivo Rito 1 MC 1',
      },
      {
        id: 2, name: 'Rito 2 equipo MC 1', people: 2, objective: 'Objetivo Rito 2 MC 1',
      },
      {
        id: 3, name: 'Rito 3 equipo MC 1', people: 3, objective: 'Objetivo Rito 3 MC 1',
      },
    ],
    state: false,
  },
  {
    id: 2,
    name: 'Mobile Capstone 2',
    description: 'Propósito Equipo 2...',
    members: [
      { id: 1, name: 'Felipe Apablaza MC2' },
      { id: 2, name: 'Felipe Beltrán MC2' },
      { id: 3, name: 'Cristobal Ilabaca MC2' },
      { id: 4, name: 'Javier Tramon MC2' },
    ],
    rites: [
      {
        id: 4, name: 'Rito 1 equipo MC 2', people: 1, objective: 'Objetivo Rito 1 MC 2',
      },
      {
        id: 5, name: 'Rito 2 equipo MC 2', people: 2, objective: 'Objetivo Rito 2 MC 2',
      },
      {
        id: 6, name: 'Rito 3 equipo MC 2', people: 3, objective: 'Objetivo Rito 3 MC 2',
      },
    ],
    state: false,
  },
  {
    id: 3,
    name: 'Mobile Capstone 3',
    description: 'Propósito Equipo 3...',
    members: [
      { id: 1, name: 'Felipe Apablaza MC3' },
      { id: 2, name: 'Felipe Beltrán MC3' },
      { id: 3, name: 'Cristobal Ilabaca MC3' },
      { id: 4, name: 'Javier Tramon MC3' },
    ],
    rites: [
      {
        id: 7, name: 'Rito 1 equipo MC 3', people: 1, objective: 'Objetivo Rito 1 MC 3',
      },
      {
        id: 8, name: 'Rito 2 equipo MC 3', people: 2, objective: 'Objetivo Rito 2 MC 3',
      },
      {
        id: 9, name: 'Rito 3 equipo MC 3', people: 3, objective: 'Objetivo Rito 3 MC 3',
      },
    ],
    state: false,
  },
  {
    id: 4,
    name: 'Mobile Capstone 4',
    description: 'Propósito Equipo 4...',
    members: [
      { id: 1, name: 'Felipe Apablaza MC4' },
      { id: 2, name: 'Felipe Beltrán MC4' },
      { id: 3, name: 'Cristobal Ilabaca MC4' },
      { id: 4, name: 'Javier Tramon MC4' },
    ],
    rites: [
      {
        id: 10, name: 'Rito 1 equipo MC 4', people: 1, objective: 'Objetivo Rito 1 MC 4',
      },
      {
        id: 11, name: 'Rito 2 equipo MC 4', people: 2, objective: 'Objetivo Rito 2 MC 4',
      },
      {
        id: 12, name: 'Rito 3 equipo MC 4', people: 3, objective: 'Objetivo Rito 3 MC 4',
      },
    ],
    state: false,
  },
  ]);

  const [teamId, setTeamId] = useState(5);

  const handlerTeam = (newTeam) => {
    setTeamList([...teamList, newTeam]);
  };

  useEffect(() => {
    if (props.route.params?.name) {
      const { name, description, members } = props.route.params;
      handlerTeam({
        id: teamId, name, description, members, state: false,
      });
      setTeamId(teamId + 1);
    }
  }, [props.route.params?.name]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addTeamButton} onPress={() => props.navigation.navigate('New Team', { members: [] })}>
        <View style={styles.viewAddTeamButton}>
          <Text style={styles.textAddTeamButton}>+</Text>
        </View>
      </TouchableOpacity>
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
