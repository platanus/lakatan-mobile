import React, { useState, useLayoutEffect } from 'react';
import {
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/NewRiteToTeamScreen/NewRiteToTeamScreen';
import BackButton from '../../components/LandingScreen/BackButton';
import colors from '../../styles/colors';
import { CREATE_RITE_REQUEST } from '../../store/types';

// eslint-disable-next-line max-statements
const NewRiteToTeamScreen = (props) => {
  const { name, purpose } = useSelector((state) => state.teams.currentTeam);
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [objective, setObjective] = useState('');
  const { token, email } = useSelector((state) => state.authentication);
  const { id } = useSelector((state) => state.teams.currentTeam);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    props.navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerTitle: () => (
        <View style={styles.headerScreen}>
          <Text style={styles.titleScreen}>Nuevo rito</Text>
        </View>
      ),
    });
  }, [props.navigation]);

  const createRiteButtonDisable = () => (
    {
      ...styles.confirmButton,
      backgroundColor: objective && numberOfPeople ? colors.darkBlue : colors.gray,
    });

  const numberOfPeopleHandler = (currentNumber) => {
    const maxPeople = 99;
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
      goal: objective,
      teamId: parseInt(id, 10),
      userMinimum: parseInt(numberOfPeople, 10),
      token,
      email,
    },
    });
    props.navigation.navigate('Team');
  };

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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.textHeader}>Propósito</Text>
          <Text>{purpose}</Text>
          <Text style={styles.newRiteText}>Nuevo rito</Text>
          <Text style={styles.textHeader}>Objetivo</Text>
          <TextInput
            style={styles.areaInput}
            value={objective} onChangeText={setObjective}
          />
          <Text style={styles.textHeader}>Cantidad de personas</Text>
          <TextInput
            style={styles.areaInput}
            value={numberOfPeople.toString()}
            onChangeText={numberOfPeopleHandler}
            keyboardType={'number-pad'}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={createRiteButtonDisable()}>
            <TouchableOpacity
               onPress={createHandler}
               style={styles.applyButton}
               disabled={!(objective && numberOfPeople)}
            >
              <Text style={styles.textConfirmButton}>Crear rito</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewRiteToTeamScreen;
