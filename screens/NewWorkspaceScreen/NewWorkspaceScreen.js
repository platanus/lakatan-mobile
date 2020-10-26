import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/NewWorkspaceScreen/NewWorkspaceScreen';

const NewWorkspaceScreen = () => {
  const [token, setToken] = useState('');

  const textChangeHandler = (text) => {
    setToken(text);
  };

  return (
    <View style={styles.container}>
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
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>
            Listo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewWorkspaceScreen;
