import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/NewWorkspaceScreen/NewWorkspaceScreen';

const NewWorkspaceScreen = () => {
  const [token, setToken] = useState('');

  const textChangeHangler = (text) => {
    setToken(text);
  };

  return (
    <View style={styles.container}>
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
      <View style={styles.bottomContent}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
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
