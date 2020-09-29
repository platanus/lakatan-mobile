import React, { useState } from 'react';
import {
  View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
// import PasswordInputText from 'react-native-hide-show-password-input';
import MultiSelect from 'react-native-multiple-select';
import {
  TextField,
  FilledTextField,
  OutlinedTextField,
} from 'react-native-material-textfield';

import color from '../../styles/colors';
import styles from '../../styles/LoginScreen/LoginScreen';

const LoginScreen = (props) => {
  const [userPassword, setUserPassword] = useState('');

  const userPasswordHandler = (enteredPassword) => {
    setUserPassword(enteredPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.formCard}>
          <Text style={styles.title}>¡Bienvenido a Lakatan!</Text>
          <View style={styles.input}>
            <Text style={styles.tag}>Correo electrónico:</Text>
            <TextInput style={styles.areaInput} placeholder="Ej: 'baldana@uc.cl'" />
            <Text style={styles.tag}>Contraseña:</Text>
            <TextInput style={styles.areaInput} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}><Button title="Cancelar"  onPress={() => props.navigation.navigate('Equipos')} /></View>
          <View style={styles.confirmButton}><Button title="Confirmar" onPress={() => navigation.navigate('Equipos', { name })} /></View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
};

export default LoginScreen;
