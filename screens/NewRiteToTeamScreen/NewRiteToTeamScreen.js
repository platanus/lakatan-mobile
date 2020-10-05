import React, { useState } from 'react';
import {
  View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';
import color from '../../styles/colors';
import styles from '../../styles/NewRiteToTeamScreen/NewRiteToTeamScreen';

const NewRiteToTeamScreen = (props) => {
  const { name, purpose } = props.route.params;
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [riteName, setRiteName] = useState('');
  const [objective, setObjective] = useState('');

  const numberOfPeopleHandler = (currentNumber) => {
    if (currentNumber <= 99) {
      setNumberOfPeople(currentNumber);
    } else {
      setNumberOfPeople(currentNumber.slice(0, 2));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.teamTitle}>{name}</Text>
          <Text>{purpose}</Text>
          <Text style={styles.textHeader}>Nombre del rito</Text>
          <TextInput style={styles.areaInput} value={riteName} onChangeText={setRiteName} placeholder="Ingresar nombre" />
          <Text style={styles.textHeader}>Objetivo del rito</Text>
          <TextInput style={styles.areaInput} value={objective} onChangeText={setObjective} placeholder="Ingresar objetivo" />
          <Text style={styles.textHeader}>Personas requeridas</Text>
          <TextInput style={styles.areaInput} value={numberOfPeople} onChangeText={numberOfPeopleHandler} placeholder="Ingresar cantidad de personas" keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'} />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Text style={styles.textCancelButton}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.confirmButton}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Team', { name, riteName, objective, numberOfPeople })} >
              <Text style={styles.textConfirmButton}>Crear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewRiteToTeamScreen;
