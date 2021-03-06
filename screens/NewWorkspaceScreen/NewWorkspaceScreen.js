import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/NewWorkspaceScreen/NewWorkspaceScreen';
import colors from '../../styles/colors';
import stylesHeader from '../../styles/IntegrationScreen/IntegrationScreen';
import SlackAuth from '../../components/Slack/slack_auth';
import BackButton from '../../components/LandingScreen/BackButton';
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
  const { id } = useSelector((state) => state.organizations.currentOrganization);

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
      headerLeft: () => (
        <BackButton navigation={props.navigation}/>
      ),
      headerTitle: () => (
        <View style={stylesHeader.header}>
          <Image
            style={{ height: '100%', width: 40 }}
            resizeMode='contain'
            source={img[name]} />
          <Text style={stylesHeader.title}>{name}</Text>
        </View>
      ),
    });
  }, [props.navigation]);

  const pressHandler = () => {
    if (workspace) {
      dispatch({
        type: UPDATE_WORKSPACE_REQUEST,
        payload: {
          slackToken: token,
          token: userToken,
          email,
          organizationId: id,
        },
      });
    } else {
      dispatch({
        type: CREATE_WORKSPACE_REQUEST,
        payload: {
          slackToken: token,
          token: userToken,
          email,
          organizationId: id,
        },
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.config}>No se ha configurado un workspace</Text>
        <View style={styles.stepContent}>
          <Text style={styles.subTitle}>Paso 1</Text>
          <Text style={styles.row}>
          Presiona el siguente botón para autorizar a nuestra app a acceder al workspace
          </Text>
        </View>
        <View style={styles.slackContent}>
          <SlackAuth/>
        </View>
        <View style={styles.stepContent}>
          <Text style={styles.subTitle}>Paso 2</Text>
          <Text style={styles.row}>
        Copia el código mostrado al final de la autorización e ingrésalo en el siguiente campo
          </Text>
        </View>
        <View style={styles.input}>
          <TextInput
            onChangeText={setToken}
            value={token}
            autoCompleteType='off'
            style={styles.textInput}
          />
        </View>
        <View style={styles.readyButtonContainer}>
          <View style={styles.createButtonContainer}>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: token ? colors.darkBlue : colors.gray }}
              onPress={pressHandler}
              disabled={!token}
            >
              <Text style={styles.textButton}>
              Listo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewWorkspaceScreen;
