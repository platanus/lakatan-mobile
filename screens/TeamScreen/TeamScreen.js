/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, Button, FlatList, TouchableOpacity,
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import styles from '../../styles/TeamScreen/TeamScreen';

import TeamList from '../../components/TeamScreen/TeamList';

import color from '../../styles/colors';
// function Team({ route }) {
const Team = (props) => {
  const { name, description, members } = props.route.params;

  const ritesRoute = () => (
    <View style={styles.riteContainer}>
      <View style={styles.riteScreen}>
        <View>
          {/* TO DO: Flat list con TouchableOpacity */}
          <TouchableOpacity style={styles.riteButton} onPress={() => props.navigation.navigate('Rite')}>
            <Text style={styles.riteText}>Rito uno</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.riteButton} onPress={() => props.navigation.navigate('Rite')}>
            <Text style={styles.riteText}>Rito dos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.riteButton} onPress={() => props.navigation.navigate('Rite')}>
            <Text style={styles.riteText}>Rito tres</Text>
          </TouchableOpacity>
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
    { key: 'second', title: 'Miembros' },
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
        <Text style={styles.description}>{description}</Text>
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
      // style={{ position: 'static', top: 0 }}
    />
  );
};

export default Team;
