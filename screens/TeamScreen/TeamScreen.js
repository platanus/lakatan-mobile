/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

// function Team({ route }) {
const Team = (props) => {
  const { name } = props.route.params;
  const estoyEnEsteEquipo = true;
  // let editButton = <Text></Text>;
  // let sortButton = <Button title="Unirte a este grupo" color="white" />;
  let editButton = <View style={styles.editButton}><Button title="Editar" color="white" /></View>;
  let sortButton = <Button title="Sortear" color="white" />;

  if (estoyEnEsteEquipo === true) {
    let editButton = <View style={styles.editButton}><Button title="Editar" color="white" /></View>;
    let sortButton = <Button title="Sortear" color="white" />;
  } else {
    let editButton = <Text></Text>;
    let sortButton = <Button title="Unirte a este grupo" color="white" />;
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
        <View style={styles.listOfTeam}>
          {props.route.params.members.map((member) => (
            <View style={styles.cardOfMember}>
              <Text style={styles.items}>
                {member}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.chooseButtonContainer}>
        {sortButton}
      </View>
    </View>
  );
};

export default Team;
