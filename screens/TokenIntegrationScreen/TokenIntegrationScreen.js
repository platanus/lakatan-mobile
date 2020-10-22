/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity, TextInput,
} from 'react-native';
import styles from '../../styles/TokenIntegrationScreen/TokenIntegrationScreen';

const TokenIntegrationScreen = ({ navigation }) => {
  const [token, setToken] = useState('');

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.tokenText}>Token</Text>
      <TextInput
        style={styles.tokenInput}
        placeholder="Ingresar token"
        onChangeText={(text) => setToken(text)}
        value={token}
      />
      <TouchableOpacity style={styles.readyButton}>
        <Text style={styles.readyText}>listo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TokenIntegrationScreen;
