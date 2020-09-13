/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

function Team({ route }) {
  const { name } = route.params;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.buttonContainer}>
        <View style={styles.backButton}><Button title="Atrás" color="white" /></View>
        <View style={styles.editButton}><Button title="Editar" color="white" /></View>
      </View>
      <View style={styles.screen}>
        <View>
          <Text style={styles.teamTitle}>{name}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{route.params.description}</Text>
        </View>
        <View style={styles.listOfTeam}>
          {route.params.members.map((member) => (
            <View style={styles.cardOfMember}>
              <Text style={styles.items}>
                {member}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.chooseButtonContainer}>
        <Button title="Sortear" color="white" />
      </View>
    </View>
  );
}

export default Team;
