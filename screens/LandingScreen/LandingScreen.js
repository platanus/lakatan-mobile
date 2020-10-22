import React, { useState, useEffect, useCallback } from 'react';
import {
  Text, View, TouchableOpacity, FlatList, RefreshControl,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { 
  ALL_TEAMS_REQUEST, 
  NEW_TEAM_REQUEST,
   SIGN_OUT_REQUEST,
  } from '../../store/types';

import styles from '../../styles/LandingScreen/LandingScreen';

const TeamView = (props) => {
  const { id, attributes: { name } } = props.team.item;

  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Team', { id })}>
      <View style={styles.teamCard}>
        <Text style={styles.teamName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

function LandingScreen(props) {
  const [refreshing, setRefreshing] = useState(false);
  const { teamsList } = useSelector((state) => state.teams);
  const { token, email } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch({ type: ALL_TEAMS_REQUEST, payload: { token, email } });
    setRefreshing(false);
  });

  if (teamsList.length === 0) {
    dispatch({ type: ALL_TEAMS_REQUEST, payload: { token, email } });
  }

  useEffect(() => {
    if (props.route.params?.name) {
      const { name, description, members } = props.route.params;
      dispatch({
        type: NEW_TEAM_REQUEST,
        payload: {
          token, email, name, purpose: description, members,
        },
      });
    }
  }, [props.route.params?.name]);


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addTeamButton}
        onPress={() => props.navigation.navigate('New Team', { members: [] })}
      >
        <View style={styles.viewAddTeamButton}>
          <Text style={styles.textAddTeamButton}>+</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.listOfTeams}>
        <FlatList
          data={teamsList}
          renderItem={(team) => <TeamView navigation={props.navigation} team={team} />}
          keyExtractor={(team) => team.id.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Integrations')}>
        <Text>Integrations</Text>
      </TouchableOpacity>
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
