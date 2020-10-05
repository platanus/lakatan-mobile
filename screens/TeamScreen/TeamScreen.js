/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, Button, TouchableOpacity, FlatList
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_TEAM_REQUEST } from '../../store/types';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import color from '../../styles/colors';
import styles from '../../styles/TeamScreen/TeamScreen';

import TeamList from '../../components/TeamScreen/TeamList';
const rites= [
  {
    id: 1, name: "Rito 1 equipo MC 1", people: 1, objective: "Objetivo Rito 1 MC 1",
  },
  {
    id: 2, name: "Rito 2 equipo MC 1", people: 2, objective: "Objetivo Rito 2 MC 1",
  },
  {
    id: 3, name: "Rito 3 equipo MC 1", people: 3, objective: "Objetivo Rito 3 MC 1",
  },
];
const RiteView = (props) => {
  const { name, numberOfPeople, objective } = props.rite.item;
  const { members } = props;
  return (
    <TouchableOpacity style={styles.riteButton} onPress={() => props.navigation.navigate('Rite', { name, numberOfPeople, objective, members })}>
      <Text style={styles.riteText}>{name}</Text>
    </TouchableOpacity>
  );
};

const Team = (props) => {
  const { id } = props.route.params;
  const { name, purpose, members } = useSelector((state) => state.teams.currentTeam);
  const { token, email } = useSelector((state) => state.authentication);
 
  const dispatch = useDispatch();
  dispatch({ type: CURRENT_TEAM_REQUEST, payload: { token, email, id } });

  const ritesRoute = () => (
    <View style={styles.riteContainer}>
      <View style={styles.riteScreen}>
        <View>
          <FlatList
            data={rites}
            renderItem={
              (rite) => <RiteView navigation={props.navigation} rite={rite} members={members} />
            }
            keyExtractor={(rite) => rite.id.toString()}
          />
          <TouchableOpacity style={styles.newRiteButton} onPress={() => props.navigation.navigate('New Rite', { name, purpose, members,  })}>
            <Text style={styles.newRiteText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  const membersRoute = () => (
    <View style={styles.riteContainer}>
      <View style={styles.riteScreen}>
        <TeamList users={members} inUserList={false} />
      </View>
    </View>
  );
  const initialLayout = {};

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Ritos' },
    { key: 'second', title: 'Usuarios' },
  ]);
  const renderScene = SceneMap({
    first: ritesRoute,
    second: membersRoute,
  });

  const [userSelected, setUserSelected] = useState('');

  const AmIInThisTeam = true;
  const editButton = <View style={styles.editButton}><Button title="Editar" /></View>;

  const renderTabBar = (props) => (
    <View style={styles.teamContainer}>
      <View style={styles.teamScreen}>
        <Text style={styles.teamTitle}>{name}</Text>
        <Text style={styles.textHeader}>Propósito</Text>
        <Text style={styles.description}>{purpose}</Text>
      </View>
      <View>
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: color.yellow }}
          style={{ backgroundColor: color.blue }}
          getLabelText={({ route }) => route.title}
          labelStyle={{ fontSize: 16 }}
        />
      </View>
    </View>
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default Team;
