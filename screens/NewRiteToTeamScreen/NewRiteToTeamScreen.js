import React, { useState, useLayoutEffect, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/NewRiteToTeamScreen/NewRiteToTeamScreen';
import BackButton from '../../components/LandingScreen/BackButton';
import colors from '../../styles/colors';
import { CREATE_RITE_REQUEST, GET_ALL_LABELS_REQUEST } from '../../store/types';
import RNPickerSelect from 'react-native-picker-select';

// eslint-disable-next-line max-statements
const NewRiteToTeamScreen = (props) => {
  const { name, purpose } = useSelector((state) => state.teams.currentTeam);
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [riteName, setRiteName] = useState('');
  const [objective, setObjective] = useState('');
  const [raffleType, setRaffleType] = useState('');
  const [selectedLabel, setSelectedLabel] = useState('');
  const { token, email } = useSelector((state) => state.authentication);
  const { allLabels } = useSelector((state) => state.labels);
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
      backgroundColor: riteName && objective && numberOfPeople ? colors.darkBlue : colors.gray,
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

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      dispatch({ type: GET_ALL_LABELS_REQUEST, payload: { token, email } });
    });
  }, [dispatch, email, props.navigation, token]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.textHeader}>Propósito</Text>
          <Text>{purpose}</Text>
          <Text style={styles.newRiteText}>Nuevo rito</Text>
          <Text style={styles.textHeader}>Nombre del rito</Text>
          <TextInput
            style={styles.areaInput}
            value={riteName} onChangeText={setRiteName}
          />
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
          <Text style={styles.textHeader}>Tipo de sorteo</Text>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              value={raffleType}
              onValueChange={setRaffleType}
              placeholder={{ label: 'Elegir tipo de sorteo', color: colors.darkBlue, value: null }}
              items=
                {[{ label: 'Labels', value: 'Labels', key: 'Labels' },
                  { label: 'Equity', value: 'Equity', key: 'Equity' },
                  { label: 'Random', value: 'Random', key: 'Random' },
                  { label: 'Balanced', value: 'Balanced', key: 'Balanced' },
                ]}
              style={ {
                inputIOS: {
                  color: colors.black,
                  paddingTop: 13,
                  paddingHorizontal: 10,
                  paddingBottom: 12,
                },
                inputAndroid: {
                  color: colors.black,
                },
                placeholder: { color: colors.black, fontSize: 14 },
              } }
            />
          </View>
          {raffleType === 'Labels' &&
          <>
            <Text style={styles.textHeader}>Etiqueta</Text>
            <View style={styles.pickerContainer}>
              <RNPickerSelect
                value={selectedLabel}
                onValueChange={setSelectedLabel}
                placeholder={{ label: 'Elegir etiqueta', color: colors.darkBlue, value: null }}
                items={allLabels.map((label) =>
                  ({ label: label.attributes.name, value: label.id, key: label.id }),
                ) }
                style={ {
                  inputIOS: {
                    color: colors.black,
                    paddingTop: 13,
                    paddingHorizontal: 10,
                    paddingBottom: 12,
                  },
                  inputAndroid: {
                    color: colors.black,
                  },
                  placeholder: { color: colors.black, fontSize: 14 },
                } }
              />
            </View>
          </>
          }
        </View>
        <View style={styles.buttonContainer}>
          <View style={createRiteButtonDisable()}>
            <TouchableOpacity
              onPress={() => createHandler()}
              style={styles.applyButton}
              disabled={!(riteName && objective && numberOfPeople)}
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
