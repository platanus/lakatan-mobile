import React, { useState } from 'react';
import {
  View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard
} from 'react-native';
// import PasswordInputText from 'react-native-hide-show-password-input';

import color from '../../styles/colors';
import styles from './styles';

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
              {/* <PasswordInputText value={userPassword} onChangeText={userPasswordHandler} /> */}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}><Button title="Cancelar" color={color.white} onPress={() => props.navigation.navigate('Equipos')}/></View>
          <View style={styles.confirmButton}><Button title="Confirmar" color={color.white} onPress={() => navigation.navigate('Equipos', { name })} /></View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
};

export default LoginScreen;
