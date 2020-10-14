/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import {
  View, Text, Button, TouchableOpacity, FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { CURRENT_TEAM_REQUEST } from '../../store/types';
import color from '../../styles/colors';
import styles from '../../styles/TeamScreen/TeamScreen';

import TeamList from '../../components/TeamScreen/TeamList';

const RiteView = (props) => {
  const { name, goal, id } = props.rite.item;
  const userMinimum = props.rite.item.user_minimum;
  const { members } = props;
  const task_id = id;
  return (
    <TouchableOpacity
      style={styles.riteButton}
      onPress={() => props.navigation.navigate('Rite', {
        name, userMinimum, goal, members, task_id,
      })}
    >
      <Text style={styles.riteText}>{name}</Text>
    </TouchableOpacity>
  );
};

const Team = (props) => {
  const { id } = props.route.params;
  const {
    name, purpose, members, rites,
  } = useSelector((state) => state.teams.currentTeam);
  const { token, email } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();


  useEffect(() => {
    const refresh = props.navigation.addListener('focus', () => {
      dispatch({ type: CURRENT_TEAM_REQUEST, payload: { token, email, id } }); 
    });
    return refresh;
  }, [props.navigation]);

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
          <TouchableOpacity style={styles.newRiteButton} onPress={() => props.navigation.navigate('New Rite')}>
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
