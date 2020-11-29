/* eslint-disable max-statements */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  View, Text, TouchableOpacity, FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CURRENT_TEAM_REQUEST, GET_HOOKS_REQUEST } from '../../store/types';
import color from '../../styles/colors';
import styles from '../../styles/TeamScreen/TeamScreen';
import TeamList from '../../components/TeamScreen/TeamList';
import BackButton from '../../components/LandingScreen/BackButton';
import UserList from '../NewUserToTeamScreen/UserList'

const RiteView = (props) => {
  const { name, goal, id } = props.rite.item;
  const userMinimum = props.rite.item.user_minimum;
  const { members, token, email } = props;
  const taskId = id;
  const dispatch = useDispatch();
  const pressHandler = () => {
    props.navigation.navigate('Rite', { name, userMinimum, goal, members, taskId });
  };

  return (
    <View style={styles.cardOfRite}>
      <TouchableOpacity
        onPress={pressHandler}
      >
        <Text style={styles.riteText}>{name}</Text>
        <Text style={styles.ritePeople}>{userMinimum} persona(s)</Text>
        <Icon name="angle-right" style={styles.icon} size={22} color={color.darkBlue} />
      </TouchableOpacity>
    </View>
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

  useLayoutEffect(() => {
    props.navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <BackButton navigation={props.navigation}/>
      ),
      headerTitle: () => (
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
        </View>
      ),
    });
  }, [name]);

  const ritesRoute = () => (
    <View style={styles.riteContainer}>
      <View style={styles.riteScreen}>
        <View style={styles.listRites}>
          <FlatList
            data={rites}
            renderItem={
              (rite) => <RiteView navigation={props.navigation} rite={rite} members={members} token={token} email={email}/>
            }
            keyExtractor={(rite) => rite.id.toString()}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.applyContainer}>
            <TouchableOpacity style={styles.newRiteButton} onPress={() => props.navigation.navigate('New Rite')}>
              <Text style={styles.newRiteText}>+</Text>
            </TouchableOpacity>
          </View>
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
    { key: 'first', title: 'ritos' },
    { key: 'second', title: 'usuarios' },
  ]);
  const renderScene = SceneMap({
    first: ritesRoute,
    second: membersRoute,
  });

  const renderTabBar = (tabProps) => (
    <View style={styles.teamContainer}>
      <View style={styles.teamScreen}>
        <Text style={styles.textHeader}>Propósito</Text>
        <Text style={styles.description}>{purpose}</Text>
      </View>
      <View>
        <TabBar
          {...tabProps}
          indicatorStyle={{ backgroundColor: color.darkBlue }}
          style={{ backgroundColor: color.white }}
          getLabelText={({ route }) => route.title}
          labelStyle={{ fontSize: 16, color: color.darkBlue }}
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
