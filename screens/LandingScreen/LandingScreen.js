import React, { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import {
  Text, View, TouchableOpacity, FlatList, RefreshControl,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { 
  ALL_TEAMS_REQUEST, 
  NEW_TEAM_REQUEST,
   SIGN_OUT_REQUEST,
  } from '../../store/types';
import MenuButton from '../../components/LandingScreen/MenuButton';
import styles from '../../styles/LandingScreen/LandingScreen';

const TeamView = (props) => {
  const { id, attributes: { name, purpose, people } } = props.team.item;
  const soyMiembro = true; // TO DO: traer de backend
  const cantidadDeMiembros = 8;

  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('Team', { id })}>
      <View style={styles.teamCard}>
        <View style={{}}>
          <Text adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.teamName}>{name}</Text>
        </View>
        <View style={{ flex: 1}}>
        <Text 
        adjustsFontSizeToFit
        numberOfLines={2}
        style={styles.teamPurpose}>{purpose}</Text>
        </View>

        <View style={{}}>
        {soyMiembro ? (
          <Text style={styles.teamPeople}>{cantidadDeMiembros} miembros
          <Text style={styles.bullet}> •</Text>
          <Text style={styles.memberOfTeam}> eres miembro</Text>
        </Text>
        ) : (
          <Text style={styles.teamPeople}>8 miembros</Text>
        )}
        </View>
        
      </View>
    </TouchableOpacity>
  );
};

function LandingScreen(props) {
  const { teamsList, loading } = useSelector((state) => state.teams);
  const { token, email } = useSelector((state) => state.authentication);
  const { id, name } = useSelector((state) => state.organizations.currentOrganization);
  const dispatch = useDispatch();

  const onRefresh = useCallback(() => {
    dispatch({ type: ALL_TEAMS_REQUEST, payload: { token, email, id } });
  });

  useEffect(() => {
    dispatch({ type: ALL_TEAMS_REQUEST, payload: { token, email, id } });
  }, [id])

  useEffect(() => {
    if (props.route.params?.name) {
      const { name, description, members } = props.route.params;
      dispatch({
        type: NEW_TEAM_REQUEST,
        payload: {
          token, email, name, purpose: description, members, id
        },
      });
    }
  }, [props.route.params?.name]);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <MenuButton navigation={props.navigation}/>
      ),
      headerTitle: () => (
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
        </View>
      ),
    });
  }, [name]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addTeamButton}
        onPress={() => props.navigation.navigate('New Team', { members: [] })}
      >
        <View style={styles.viewAddTeamButton}>
          <Text style={styles.textAddTeamButton}>Nuevo equipo</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.listOfTeams}>
        <FlatList
          data={teamsList}
          renderItem={(team) => <TeamView navigation={props.navigation} team={team} />}
          keyExtractor={(team) => team.id.toString()}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
        />
      </View>
    </View>
  );
}

export default LandingScreen;
