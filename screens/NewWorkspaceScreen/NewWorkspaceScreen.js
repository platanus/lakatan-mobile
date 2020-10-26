import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/NewWorkspaceScreen/NewWorkspaceScreen';
import SlackAuth from '../../components/Slack/slack_auth';

const NewWorkspaceScreen = (props) => {
  const [token, setToken] = useState('');

  const textChangeHandler = (text) => {
    setToken(text);
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
          presiona el siguente botón para autorizar nuestra app a acceder al workspace
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
          onChangeText={textChangeHandler}
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
        presiona listo
        </Text>
      </View>
      <View style={styles.bottomContent}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => props.navigation.goBack()}>
            <Text style={styles.textButton}>

            Listo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewWorkspaceScreen;
