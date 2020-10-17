import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/NewRiteToTeamScreen/NewRiteToTeamScreen';
import { CREATE_RITE_REQUEST } from '../../store/types';

const NewRiteToTeamScreen = (props) => {
  const { name, purpose } = useSelector((state) => state.teams.currentTeam);
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [riteName, setRiteName] = useState('');
  const [objective, setObjective] = useState('');
  const { token, email } = useSelector((state) => state.authentication);
  const { id } = useSelector((state) => state.teams.currentTeam);
  const dispatch = useDispatch();

  const numberOfPeopleHandler = (currentNumber) => {
    const maxPeople = 99;
    // Cantidad maxima para que no se introduzcan numeros de 3 digitos
    if (currentNumber <= maxPeople) {
      setNumberOfPeople(currentNumber);
    } else {
      // eslint-disable-next-line no-magic-numbers
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
      teamId: parseInt(id, 10),
      userMinimum: parseInt(numberOfPeople, 10),
      token,
      email,
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
          <TextInput
            style={styles.areaInput}
            value={riteName} onChangeText={setRiteName}
            placeholder="Ingresar nombre"
          />
          <Text style={styles.textHeader}>Objetivo del rito</Text>
          <TextInput
            style={styles.areaInput}
            value={objective} onChangeText={setObjective}
            placeholder="Ingresar objetivo"
          />
          <Text style={styles.textHeader}>Personas requeridas</Text>
          <TextInput
            style={styles.areaInput}
            value={numberOfPeople.toString()}
            onChangeText={numberOfPeopleHandler}
            placeholder="Ingresar cantidad de personas"
            keyboardType={'number-pad'}
          />
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
