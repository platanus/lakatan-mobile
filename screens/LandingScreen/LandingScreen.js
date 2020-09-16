import React, { useState, useEffect } from 'react';
import {
  Text, View, Button, TouchableOpacity, ScrollView,
} from 'react-native';

import styles from './styles';
import color from '../../styles/colors';

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
        id: teamId, name, description: description, members: ['Felipe apablaza'], state: false,
      });
      setTeamId(teamId + 1);
    }
  }, [props.route.params?.name]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.addTeamButton}>
          <Button title="+" style={styles.buttonPlus} onPress={() => props.navigation.navigate('Nuevo equipo')} />
        </View>
        <View>
          <Button title="TEST FEEDBACK SCREEN" color={color.black} onPress={() => props.navigation.navigate('Feedback')} />
          <Button title="TEST LOGIN SCREEN" color={color.black} onPress={() => props.navigation.navigate('Iniciar sesión')} />
        </View>
        <View style={styles.listOfTeams}>
          {teamList.map((team) => (
            <TouchableOpacity onPress={() => props.navigation.navigate('Equipo', { name: team.name, description: team.description, members: team.members })}>
              <View style={styles.teamCard}>
                <Text style={styles.teamName}>{team.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default LandingScreen;
