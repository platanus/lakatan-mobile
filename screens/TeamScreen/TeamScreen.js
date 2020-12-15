/* eslint-disable max-statements */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  View, Text, TouchableOpacity, FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CURRENT_TEAM_REQUEST,
  GET_HOOKS_REQUEST,
  CLEAR_TEAM,
  GET_POLLS_REQUEST,
  GET_POLL_REQUEST, } from '../../store/types';
import color from '../../styles/colors';
import styles from '../../styles/TeamScreen/TeamScreen';
import TeamList from '../../components/TeamScreen/TeamList';
import BackButton from '../../components/LandingScreen/BackButton';
import UsersListComponent from '../../components/UsersListComponent/UsersListComponent';

const RiteView = (props) => {
  
  const { name, goal, id } = props.rite.item;
  const userMinimum = props.rite.item.user_minimum;
  const { members, token, email } = props;
  const taskId = id;

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

const VotingView = (props) => {
  const { name, voted } = props.poll.item.attributes; 
  const { id } = props.poll.item;
  const { token, email, belongs } = props;
  const dispatch = useDispatch();
  const votingPressHandler = () => {
    dispatch({ type: GET_POLL_REQUEST, payload: { token, email, id } });
    props.navigation.navigate('Voting', { name }); 
  };

  return (
    <View style={styles.cardOfRite}>
      <TouchableOpacity
        onPress={votingPressHandler}
      >
        {belongs ? (
          <View>
            <Text style={styles.riteText}>{name}</Text>
            {voted ? (
              <Text style={{ ...styles.voting, color: color.cian }}>Ya votaste</Text>
            ) : (
              <Text style={{ ...styles.voting, color: color.red }}>Falta tu voto</Text>
            )}
            <Icon name="angle-right" style={styles.icon} size={22} color={color.darkBlue} />
          </View>) : (
          <View>
            <Text style={styles.riteText}>{name}</Text>
            <Icon name="angle-right" style={styles.icon} size={22} color={color.darkBlue} />
          </View>)}
      </TouchableOpacity>
    </View>
  );
};

const Team = (props) => {
  
  const { id, belongs } = props.route.params;
  const {
    name, purpose, members, rites
  } = useSelector((state) => state.teams.currentTeam);
  const { polls } = useSelector((state) => state.polls);
  const { token, email } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  useEffect(() => {
    const refresh = props.navigation.addListener('focus', () => {
      dispatch({ type: GET_POLLS_REQUEST, payload: { token, email, id } });
      dispatch({ type: CURRENT_TEAM_REQUEST, payload: { token, email, id } });
      
    });

    return refresh;
  }, [dispatch, email, id, props.navigation, token]);
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
            (rite) => <RiteView navigation={props.navigation} rite={rite} members={members} token={token} 
            email={email} />}
            keyExtractor={(rite) => rite.id.toString()} />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.applyContainer}>
            <TouchableOpacity style={styles.newRiteButton} onPress={() => props.navigation.navigate('New Rite')}>
              <Text style={styles.newRiteText}>Nuevo rito</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  const membersRoute = () => (
    <View style={styles.riteContainer}>
      <View style={styles.riteScreen}>
        <UsersListComponent selectedMembers={members} />
      </View>
    </View>
  );

  const votingRoute = () => (
    <View style={styles.riteContainer}>
      <View style={styles.riteScreen}>
        <View style={styles.listRites}>
          <FlatList
            data={polls}
            renderItem={
              (poll) => <VotingView navigation={props.navigation} poll ={poll} token={token} email={email} belongs={belongs} />
            }
            keyExtractor={(poll) => poll.id.toString()}
          />
        </View>
        <View style={styles.buttonContainer}>
          {belongs &&
          <View style={styles.applyContainer}>
            <TouchableOpacity style={styles.newRiteButton} onPress={() => props.navigation.navigate('New Voting')}>
              <Text style={styles.newRiteText}>Nueva votación</Text>
            </TouchableOpacity>
          </View>}
        </View>
      </View>
    </View>
  );

  const initialLayout = {};

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Miembros' },
    { key: 'second', title: 'Ritos' },
    { key: 'third', title: 'Votaciones' },
  ]);
  const renderScene = SceneMap({
    first: membersRoute,
    second: ritesRoute,
    third: votingRoute,
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
          labelStyle={{ fontSize: 15, color: color.darkBlue }}
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
