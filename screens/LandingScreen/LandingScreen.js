import React, { useState, useEffect } from 'react';
import {
  Text, View, Button, TouchableOpacity, ScrollView, FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SIGN_OUT_REQUEST } from '../../store/types';

import styles from '../../styles/LandingScreen/LandingScreen';
import color from '../../styles/colors';

const TeamView = (props) => {
  const { name, description, members } = props.team.item;

  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Team', { name, description, members })}>
      <View style={styles.teamCard}>
        <Text style={styles.teamName}>{props.team.item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

function LandingScreen(props) {
  const [teamList, setTeamList] = useState([{
    id: 1, name: 'Mobile Capstone 1', description: 'Propósito Equipo 1...', members: [{ id: 1, name: 'Felipe Apablaza' }, { id: 2, name: 'Felipe Beltrán' }, { id: 3, name: 'Cristobal Ilabaca' }, { id: 4, name: 'Javier Tramon' }], state: false,
  },
  {
    id: 2, name: 'Mobile Capstone 2', description: 'Propósito Equipo 2...', members: [{ id: 1, name: 'Felipe Apablaza' }, { id: 2, name: 'Felipe Beltrán' }, { id: 3, name: 'Cristobal Ilabaca' }, { id: 4, name: 'Javier Tramon' }], state: false,
  },
  {
    id: 3, name: 'Mobile Capstone 3', description: 'Propósito Equipo 3...', members: [{ id: 1, name: 'Felipe Apablaza' }, { id: 2, name: 'Felipe Beltrán' }, { id: 3, name: 'Cristobal Ilabaca' }, { id: 4, name: 'Javier Tramon' }], state: false,
  },
  {
    id: 4, name: 'Mobile Capstone 4', description: 'Propósito Equipo 4...', members: [{ id: 1, name: 'Felipe Apablaza' }, { id: 2, name: 'Felipe Beltrán' }, { id: 3, name: 'Cristobal Ilabaca' }, { id: 4, name: 'Javier Tramon' }], state: false,
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

  const { authentication: { token, email } } = useSelector((store) => store);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <View style={styles.addTeamButton}>
        <TouchableOpacity onPress={() => props.navigation.navigate('New Team', { members: [] })}>
          <View style={styles.viewAddTeamButton}>
            <Text style={styles.textAddTeamButton}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.listOfTeams}>
        <FlatList
          data={teamList}
          renderItem={(team) => <TeamView navigation={props.navigation} team={team} />}
          keyExtractor={(team) => team.id.toString()}
        />
      </View>
      <View style={styles.signOutButton}>
        <TouchableOpacity onPress={() => dispatch({ type: SIGN_OUT_REQUEST, payload: { email, token } })}>
          <View style={styles.viewSignOutButton}>
            <Text style={styles.textSignOutButton}>Cerrar Sesión</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LandingScreen;
