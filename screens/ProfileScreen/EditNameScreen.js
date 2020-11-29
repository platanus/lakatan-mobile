/* eslint-disable max-statements */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  View, Text, TouchableOpacity, Image, TextInput,
} from 'react-native';
import MenuButton from '../../components/LandingScreen/MenuButton';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../styles/colors';
import styles from '../../styles/ProfileScreen/ProfileScreen';
import BackButton from '../../components/LandingScreen/BackButton';
import {
  CHANGE_NAME_REQUEST,
} from '../../store/types';

const EditName = (props) => {
  // const { id, name, mail } = props.route.params;
  const { token, email } = useSelector((state) => state.authentication);
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <BackButton navigation={props.navigation}/>
      ),
    });
  }, [props.navigation]);

  const navigate = () => {
    props.navigation.navigate('Profile');
    dispatch({ type: CHANGE_NAME_REQUEST, payload: { token, email, name } });
  };

  const createRiteButtonDisable = () => (
    {
      ...styles.button,
      backgroundColor: name ? colors.lightBlue : colors.gray,
    });

  return (
    <View style={styles.buttonContainer}>
      <View style={styles.emailContainer}>
        <Text style={styles.email} >
          Ingrese nuevo nombre:
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.areaInput}
          placeholder="nombre"
          value={name} onChangeText={setName}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={createRiteButtonDisable()}
          onPress={navigate}
          disabled={!name}
        ><Text style={styles.buttonText}>
          Guardar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditName;
