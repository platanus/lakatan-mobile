import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/NewRiteToTeamScreen/NewRiteToTeamScreen';
import { CREATE_RITE_REQUEST } from '../../store/types';

const NewRiteToTeamScreen = (props) => {
  const { name, purpose } = useSelector((state)=>state.teams.currentTeam)
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [riteName, setRiteName] = useState('');
  const [objective, setObjective] = useState('');
  const { token , email} = useSelector((state) => state.authentication);
  const {id} = useSelector((state) => state.teams.currentTeam);
  const dispatch = useDispatch();

  const numberOfPeopleHandler = (currentNumber) => {
    if (currentNumber <= 99) {
      setNumberOfPeople(currentNumber);
    } else {
      setNumberOfPeople(currentNumber.slice(0, 2));
    }
  };
  
  const createHandler = () => {
    dispatch({
      type: CREATE_RITE_REQUEST,
      payload:
    {
      name: riteName,
      goal: objective,
      team_id: parseInt(id, 10),
      user_minimum: parseInt(numberOfPeople, 10),
      token,
      email
    },
    });
    props.navigation.navigate('Team');
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
          <TextInput style={styles.areaInput} value={numberOfPeople.toString()} onChangeText={numberOfPeopleHandler} placeholder="Ingresar cantidad de personas" keyboardType={Platform.OS === 'android' ? 'numeric' : 'number-pad'} />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Text style={styles.textCancelButton}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.confirmButton}>
            <TouchableOpacity onPress={createHandler}>
              <Text style={styles.textConfirmButton}>Crear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewRiteToTeamScreen;
