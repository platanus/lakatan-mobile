/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, Button, FlatList, TouchableOpacity,
} from 'react-native';

import styles from '../../styles/TeamScreen/TeamScreen';

import Raffle from '../../components/TeamScreen/Raffle';
import TeamList from '../../components/TeamScreen/TeamList';

// function Team({ route }) {
const Team = (props) => {
  const { name, description, members } = props.route.params;
  const [users, usersHandler] = useState([{ id: 1, name: 'Felipe Apablaza' },
    { id: 2, name: 'Felipe Beltrán' },
    { id: 3, name: 'Cristobal Ilabaca' },
    { id: 4, name: 'Javier Tramon' }]);

  const [isModalVisible, setModalVisible] = useState(false);
  const [userSelected, setUserSelected] = useState('');

  const AmIInThisTeam = true;
  const editButton = <View style={styles.editButton}><Button title="Editar" /></View>;
  const sortButton = <Button title="Sortear" color="white" onPress={() => setModalVisible(!isModalVisible)} />;

  return (
    <View style={styles.container}>
      {/* <View style={styles.buttonContainer}>
        <View style={styles.backButton}>
          <Button title="Atrás"  onPress={() => props.navigation.navigate('Equipos')} />
        </View>
        {editButton}
      </View> */}
      <View style={styles.screen}>
        <View>
          <Text style={styles.teamTitle}>{name}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
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
    </View>
  );
};

export default Team;
