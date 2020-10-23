import React, { useState, useLayoutEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from '../../styles/NewWorkspaceScreen/NewWorkspaceScreen';
import stylesHeader from '../../styles/IntegrationScreen/IntegrationScreen';
import SlackAuth from '../../components/Slack/slack_auth';
import { SET_WORKSPACE } from '../../store/types';

const NewWorkspaceScreen = (props) => {
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  const textChangeHangler = (text) => {
    setToken(text);
  };
  const { name } = props.route.params;
  const img = {
    'Slack': require('../../assets/Slack/logoSlack.png'),
    'Google': require('../../assets/Google/google_logo_2.png'),
    'Notion': require('../../assets/Notion/logoNotion.png'),
  };

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
    dispatch({ type: SET_WORKSPACE, payload: { workspace: 'Platanus' } });
    props.navigation.goBack();
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
          Copia el código mostrado al final de la autorización e ingrésalo en el siguiente form
        </Text>
      </View>
      <View style={styles.input}>
        <Text style={styles.tag}>Token:</Text>
        <TextInput
          placeholder='Ingresar token'
          onChangeText={textChangeHangler}
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
          Presiona listo
        </Text>
      </View>
      <View style={styles.bottomContent}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={pressHandler}>
            <Text style={styles.textButton}>
            Listo
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewWorkspaceScreen;
