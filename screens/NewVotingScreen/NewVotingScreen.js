import React, { useState, useLayoutEffect } from 'react';
import {
  View, Text, 
  TextInput,
  TouchableWithoutFeedback, 
  Keyboard, TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/NewVotingScreen/NewVotingScreen';
import BackButton from '../../components/LandingScreen/BackButton';
import colors from '../../styles/colors';
import {
  CREATE_POLL_REQUEST, CREATE_VOTE_REQUEST,
} from '../../store/types';
// eslint-disable-next-line max-statements
const NewVoting = (props) => {
  const { name, purpose } = useSelector((state) => state.teams.currentTeam);
  const [titleVoting, setTitleVoting] = useState('');
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const [optionThree, setOptionThree] = useState('');
  const [optionFour, setOptionFour] = useState('');
  const [optionFive, setOptionFive] = useState('');
  const [hiddenTextInputs, setHiddenTextInputs] = useState([true, true, false, false, false]);
  const { token, email } = useSelector((state) => state.authentication);
  const { id } = useSelector((state) => state.teams.currentTeam);
  const dispatch = useDispatch();
  const createVotingButtonDisable = () => (
    {
      ...styles.confirmButton,
      backgroundColor: titleVoting && (Boolean(optionOne) + Boolean(optionTwo) + Boolean(optionThree) + Boolean(optionFour) + Boolean(optionFive) === hiddenTextInputs.reduce((a, b) => a + b, 0)) ? colors.darkBlue : colors.gray,
    });
  const createHandler = () => {
    const poll_options = [];
    for (let i = 0; i < hiddenTextInputs.length; i++) {
      if (hiddenTextInputs[i]) {
        if (i === 0) {
          poll_options.push(optionOne);
        } else if (i === 1) {
          poll_options.push(optionTwo);
        } else if (i === 2) {
          poll_options.push(optionThree);
        } else if (i === 3) {
          poll_options.push(optionFour);
        } else if (i === 4) {
          poll_options.push(optionFive);
        }
      }
    }
    dispatch({ type: CREATE_POLL_REQUEST, payload: { token, email, id, 'name': titleVoting, poll_options } });
    props.navigation.navigate('Team', { id });
  }; // RELLENAR CON REQUEST

  const optionsHandler = () => {
    const currentCounter = hiddenTextInputs.reduce((a, b) => a + b, 0);
    setHiddenTextInputs((prev) => {
      const newData = prev.map((item, index) => {
        if (index === currentCounter) {
          item = true;
        }

        return item;
      });

      return newData;
    });
  };

  const optionsReduceHandler = () => {
    const currentCounter = hiddenTextInputs.reduce((a, b) => b + a , 0);
    setHiddenTextInputs((prev) => {
      const newData = prev.map((item, index) => {
        if (index === (currentCounter -1 )) {
          item = false;
        }

        return item;
      });

      return newData;
    });
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
        <ScrollView>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
          <View style={styles.infoContainer}>
            <Text style={styles.textHeader}>Propósito</Text>
            <Text>{purpose}</Text>
            <Text style={styles.newVotingText}>Nueva votación</Text>
              <Text style={styles.textHeader}>Título</Text>
              <TextInput
                style={styles.areaInput}
                value={titleVoting} onChangeText={setTitleVoting}
              />
              <View>

                <Text style={styles.textHeader}>Opciones</Text>
                {hiddenTextInputs[0] &&

                <View>
                  <TextInput
                    style={styles.areaInput}
                    value={optionOne} onChangeText={setOptionOne}
                  />
                </View>
                }
                {hiddenTextInputs[1] &&
                <View>
                  <TextInput
                    style={styles.areaInput}
                    value={optionTwo} onChangeText={setOptionTwo}
                  />
                </View>
                }
                {hiddenTextInputs[2] &&
                <View>
                  <TextInput
                    style={styles.areaInput}
                    value={optionThree} onChangeText={setOptionThree}
                  />
                </View>
                }
                {hiddenTextInputs[3] &&
                <View>
                  <TextInput
                    style={styles.areaInput}
                    value={optionFour} onChangeText={setOptionFour}
                  />
                </View>
                }
                {hiddenTextInputs[4] &&
                <View>
                  <TextInput
                    style={styles.areaInput}
                    value={optionFive} onChangeText={setOptionFive}
                  />
                </View>
                }
                <View style={styles.addOptionContainer}>
                  <View style={styles.addOptionSubContainer}>
                    <TouchableOpacity
                      style={
                        { ...styles.addOption,
                          backgroundColor: hiddenTextInputs.reduce((a, b) => a + b, 0) === 2 ? colors.softGray : colors.lightBlue }}
                      onPress={optionsReduceHandler}
                      disabled={ hiddenTextInputs.reduce((a, b) => a + b, 0) === 2 }>
                      <Text style={ { ...styles.addOptionText, color: hiddenTextInputs.reduce((a, b) => a + b, 0) === 2 ? colors.white : colors.darkBlue }}>- Quitar opción</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.addOptionContainer}>
                  <View style={styles.addOptionSubContainer}>
                    <TouchableOpacity
                      style={
                        { ...styles.addOption,
                          backgroundColor: hiddenTextInputs.reduce((a, b) => a + b, 0) === 5 ? colors.softGray : colors.lightBlue }}
                      onPress={optionsHandler}
                      disabled={ hiddenTextInputs.reduce((a, b) => a + b, 0) === 5 }>
                      <Text style={ { ...styles.addOptionText, color: hiddenTextInputs.reduce((a, b) => a + b, 0) === 5 ? colors.white : colors.darkBlue }}>+ Agregar opción</Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>

            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <View style={createVotingButtonDisable()}>
            <TouchableOpacity
              onPress={() => createHandler()}
              style={styles.applyButton}
              disabled={!(titleVoting && optionOne)}
            >
              <Text style={styles.textConfirmButton}>Crear votación</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

    </TouchableWithoutFeedback>
  );
};

export default NewVoting;
