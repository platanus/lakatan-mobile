/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, Button, TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_TEAM_REQUEST } from '../../store/types';

import styles from '../../styles/TeamScreen/TeamScreen';

import Raffle from '../../components/TeamScreen/Raffle';
import TeamList from '../../components/TeamScreen/TeamList';

// function Team({ route }) {
const Team = (props) => {
  const { id } = props.route.params;
  const { name, purpose, members } = useSelector((state) => state.teams.currentTeam);
  const { token, email } = useSelector((state) => state.authentication);

  const dispatch = useDispatch();
  dispatch({ type: CURRENT_TEAM_REQUEST, payload: { token, email, id } });

  const [isModalVisible, setModalVisible] = useState(false);

  const AmIInThisTeam = true;
  const editButton = <View style={styles.editButton}><Button title="Editar" /></View>;

  return (
    <View style={styles.container}>
      {/* <View style={styles.buttonContainer}>
        <View style={styles.backButton}>
          <Button title="Atrás"  onPress={() => props.navigation.navigate('Teams')} />
        </View>
        {editButton}
      </View> */}
      <View style={styles.screen}>
        <View>
          <Text style={styles.teamTitle}>{name}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{purpose}</Text>
        </View>
        <TeamList users={members} inUserList={false} />
      </View>
      <View style={styles.chooseButtonContainer}>
        <TouchableOpacity style={styles.chooseButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.textChooseButton}>Sortear</Text>
        </TouchableOpacity>
        {isModalVisible
        && <Raffle visible={isModalVisible} setVisible={setModalVisible} users={members} navigation={props.navigation} />}

      </View>
      <View>
        <Button title="test Rite View" color="white" onPress={() => props.navigation.navigate('Rite') } />
        <Button title="test New Rite View" color="white" onPress={() => props.navigation.navigate('New Rite') } />
      </View>
    </View>
  );
};

export default Team;
