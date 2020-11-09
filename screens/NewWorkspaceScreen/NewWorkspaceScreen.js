import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/NewWorkspaceScreen/NewWorkspaceScreen';
import colors from '../../styles/colors';
import stylesHeader from '../../styles/IntegrationScreen/IntegrationScreen';
import SlackAuth from '../../components/Slack/slack_auth';
import {
  CREATE_WORKSPACE_REQUEST,
  CLEAR_WORKSPACE_ERROR,
  RESET_WORKSPACE_SUCCESS,
  UPDATE_WORKSPACE_REQUEST,
} from '../../store/types';

// eslint-disable-next-line max-statements
const NewWorkspaceScreen = (props) => {
  const [token, setToken] = useState('');
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.authentication.token);
  const { email } = useSelector((state) => state.authentication);
  const { success, error, workspace } = useSelector((state) => state.sync);

  const { name } = props.route.params;
  const img = {
    'Slack': require('../../assets/Slack/logoSlack.png'),
    'Google': require('../../assets/Google/google_logo_2.png'),
    'Notion': require('../../assets/Notion/logoNotion.png'),
  };

  useEffect(() => {
    if (success) {
      dispatch({ type: RESET_WORKSPACE_SUCCESS });
      props.navigation.goBack();
    }
    if (error) {
      Alert.alert(
        'Token invalida',
        '',
        [{ text: 'OK', onPress: () => dispatch({ type: CLEAR_WORKSPACE_ERROR }) }],
        { cancelable: false },
      );
    }
  }, [success, error]);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerTitle: () => (
        <View style={stylesHeader.header}>
          <Image style={stylesHeader.logo} source={img[name]} />
          <Text style={stylesHeader.title}>{name}</Text>
        </View>
      ),
      headerBackTitle: 'Back',
    });
  }, [props.navigation]);

  const pressHandler = () => {
    if (workspace) {
      dispatch({ type: UPDATE_WORKSPACE_REQUEST, payload: { slackToken: token, token: userToken, email } });
    } else {
      dispatch({ type: CREATE_WORKSPACE_REQUEST, payload: { slackToken: token, token: userToken, email } });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.TitleContent}>
        <Text style={styles.Title}>
          Instrucciones
        </Text>
      </View>
      <View style={styles.stepContent}>
        <Text style={styles.subTitle}>
          Paso 1
        </Text>
        <Text style={styles.row}>
          Presiona el siguente botón para autorizar nuestra app a acceder al workspace
        </Text>
      </View>
      <View style={styles.slackContent}>
        <SlackAuth/>
      </View>
      <View style={styles.stepContent}>
        <Text style={styles.subTitle}>
          Paso 2
        </Text>
        <Text style={styles.row}>
        Copia el código mostrado al final de la autorización e ingrésalo en el siguiente campo.
        </Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.tag}>Token:</Text>
        <TextInput
          placeholder='Ingresar token'
          onChangeText={setToken}
          value={token}
          autoCompleteType='off'
          style={styles.textInput}
        />
      </View>
      <View style={styles.stepContent}>
        <Text style={styles.subTitle}>
          Paso 3
        </Text>
        <Text style={styles.row}>
        Presiona listo.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: token ? colors.blue : colors.gray }}
          onPress={pressHandler}
          disabled={!token}
        >
          <Text style={styles.textButton}>
            Listo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewWorkspaceScreen;
