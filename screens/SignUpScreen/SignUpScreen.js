/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, Keyboard, TouchableWithoutFeedback, TextInput, TouchableOpacity,
} from 'react-native';

import styles from '../../styles/SignUpScreen/SignUpScreen';

const SignUpScreen = () => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const mailHandler = (text) => {
    setMail(text);
  };

  const passwordHandler = (text) => {
    setPassword(text);
  };

  const confirmPasswordHandler = (text) => {
    setConfirmPassword(text);
  };

  const signUpButtonHandler = () => {
    console.log(password, confirmPassword, mail);
    console.log(password === confirmPassword);
    if (!(password === confirmPassword)) {
      console.log('las constraseñas no son iguales');
    } else {
      console.log('las constraseñas son iguales');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.formCard}>
          <Text style={styles.title}>¡Crea una cuenta!</Text>
          <View style={styles.input}>
            <Text style={styles.tag}>Correo electrónico:</Text>
            <TextInput
              style={styles.areaInput}
              placeholder="Ej: 'baldana@uc.cl'"
              autoCapitalize="none"
              onChangeText={mailHandler}
            />
            <Text style={styles.tag}>Contraseña:</Text>
            <TextInput
              style={styles.areaInput}
              autoCapitalize="none"
              secureTextEntry
              onChangeText={passwordHandler}
            />
            <Text style={styles.tag}>Confirma tu contraseña:</Text>
            <TextInput
              style={styles.areaInput}
              autoCapitalize="none"
              secureTextEntry
              onChangeText={confirmPasswordHandler}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.confirmButton}>
            <TouchableOpacity style={styles.confirmButton} onPress={signUpButtonHandler}>
              <Text style={styles.textConfirmButton}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
