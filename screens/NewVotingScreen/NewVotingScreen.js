import React, { useState, useLayoutEffect } from 'react';
import {
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, KeyboardAvoidingView, Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/NewVotingScreen/NewVotingScreen';
import BackButton from '../../components/LandingScreen/BackButton';
import colors from '../../styles/colors';

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
  const createHandler = () => {}; // RELLENAR CON REQUEST

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
          <Text style={styles.newVotingText}>Nueva votación</Text>

          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
            <Text style={styles.textHeader}>Título</Text>
            <TextInput
              style={styles.areaInput}
              value={titleVoting} onChangeText={setTitleVoting}
            />
          </KeyboardAvoidingView>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'}>
            <View>

              <Text style={styles.textHeader}>Opciones</Text>
              {hiddenTextInputs[0] &&

              <View>
                {/* <TouchableOpacity>
                  <Icon
                    name="times"
                    size={15}
                    color={colors.darkGray}
                  />
                </TouchableOpacity> */}
                <TextInput
                  style={styles.areaInput}
                  value={optionOne} onChangeText={setOptionOne}
                />
              </View>
              }
              {hiddenTextInputs[1] &&
              <View>
                {/* <TouchableOpacity>
                  <Icon
                    name="times"
                    size={15}
                    color={colors.darkGray}
                  />
                </TouchableOpacity> */}
                <TextInput
                  style={styles.areaInput}
                  value={optionTwo} onChangeText={setOptionTwo}
                />
              </View>
              }
              {hiddenTextInputs[2] &&
              <View>
                {/* <TouchableOpacity>
                  <Icon
                    name="times"
                    size={15}
                    color={colors.darkGray}
                  />
                </TouchableOpacity> */}
                <TextInput
                  style={styles.areaInput}
                  value={optionThree} onChangeText={setOptionThree}
                />
              </View>
              }
              {hiddenTextInputs[3] &&
              <View>
                {/* <TouchableOpacity>
                  <Icon
                    name="times"
                    size={15}
                    color={colors.darkGray}
                  />
                </TouchableOpacity> */}
                <TextInput
                  style={styles.areaInput}
                  value={optionFour} onChangeText={setOptionFour}
                />
              </View>
              }
              {hiddenTextInputs[4] &&
              <View>
                {/* <TouchableOpacity>
                  <Icon
                    name="times"
                    size={15}
                    color={colors.darkGray}
                  />
                </TouchableOpacity> */}
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
                        backgroundColor: hiddenTextInputs.reduce((a, b) => a + b, 0) === 5 ? colors.softGray : colors.lightBlue }}
                    onPress={optionsHandler}
                    disabled={ hiddenTextInputs.reduce((a, b) => a + b, 0) === 5 }>
                    <Text style={ { ...styles.addOptionText, color: hiddenTextInputs.reduce((a, b) => a + b, 0) === 5 ? colors.white : colors.darkBlue }}>+ Agregar opción</Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </KeyboardAvoidingView>

        </View>

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
