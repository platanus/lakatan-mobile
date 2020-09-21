/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, Button, FlatList, 
} from 'react-native';

import styles from '../../styles/TeamScreen/TeamScreen';

import Sorteo from '../../components/TeamScreen/Sorteo'
import TeamList from '../../components/TeamScreen/TeamList'



// function Team({ route }) {
const Team = (props) => {
  const { name ,description, members} = props.route.params;

  const [users, usersHandler] = useState([{id: 1, name: 'Felipe Apablaza'},
    {id: 2, name: 'Felipe Beltrán'},
    {id: 3, name: 'Cristobal Ilabaca'},
    {id: 4, name: 'Javier Tramon'}]);

  const [isModalVisible, setModalVisible] = useState(false);
  const [userSelected, setUserSelected] = useState('');

  const estoyEnEsteEquipo = true;
  // let editButton = <Text></Text>;
  // let sortButton = <Button title="Unirte a este grupo" color="white" />;
  const editButton = <View style={styles.editButton}><Button title="Editar" color="white" /></View>;
  const sortButton = <Button title="Sortear" color="white" onPress={()=> setModalVisible(!isModalVisible)} />;

  if (estoyEnEsteEquipo === true) {
    const editButton = <View style={styles.editButton}><Button title="Editar" color="white" /></View>;
    const sortButton = <Button title="Sortear" color="white" />;
  } else {
    const editButton = <Text />;
    const sortButton = <Button title="Unirte a este grupo" color="white" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.backButton}><Button title="Atrás" color="white" onPress={() => props.navigation.navigate('Equipos')} /></View>
        {editButton}
      </View>
      <View style={styles.screen}>
        <View>
          <Text style={styles.teamTitle}>{name}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{props.route.params.description}</Text>
        </View>
        <TeamList users={members}/>
      </View>
      <View style={styles.chooseButtonContainer}>
        <Button title="Sortear" color="white" onPress={()=>setModalVisible(true)} />
        {isModalVisible ?  (
        <Sorteo visible={isModalVisible} setVisible={setModalVisible} users={users} navigation={props.navigation}/>
        ) : <></> }
  
      </View>
    </View>
  );
};

export default Team;
