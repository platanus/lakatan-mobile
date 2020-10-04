import React, { useState, useEffect, useCallback } from 'react';
import {
  Text, View, TouchableOpacity, FlatList, RefreshControl,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { ALL_TEAMS_REQUEST } from '../../store/types';

import styles from '../../styles/LandingScreen/LandingScreen';

const TeamView = (props) => {
  const { id, data: { name } } = props.team.item;

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

  const handlerTeam = (newTeam) => {
    // setTeamList([...teamList, newTeam]);
    // dispatch algo
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch({ type: ALL_TEAMS_REQUEST, payload: { token, email } });
    setRefreshing(false);
  });

  if (teamsList.length === 0) {
    dispatch({ type: ALL_TEAMS_REQUEST, payload: { token, email } });
  }

  useEffect(() => {
    if (props.route.params?.id) {
      const { name, description, members } = props.route.params;
      handlerTeam({
        id: teamId, name, description, members, state: false,
      });
      setTeamId(teamId + 1);
    }
  }, [props.route.params?.name]);

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
          data={teamsList}
          renderItem={(team) => <TeamView navigation={props.navigation} team={team} />}
          keyExtractor={(team) => team.id.toString()}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </View>
  );
}

export default LandingScreen;
