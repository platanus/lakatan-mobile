/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  View, Text, Keyboard, TouchableWithoutFeedback, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SIGN_UP_REQUEST } from '../../store/types';

import styles from '../../styles/SignUpScreen/SignUpScreen';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const dispatch = useDispatch();

  const signUpButtonHandler = () => {
    if (!(password === confirmPassword)) {
      Alert.alert(
        '¡Las contraseñas no coinciden!',
        'Asegúrate de que sean iguales',
        [
          { text: 'OK' },
        ],
        { cancelable: false },
      );
    } else {
      dispatch({ type: SIGN_UP_REQUEST, payload: { email, password, confirmPassword } });
      // props.navigation.navigate('Teams'); // más adelante esto no iría aquí
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
              onChangeText={(text) => setEmail(text)}
            />
            <Text style={styles.tag}>Contraseña:</Text>
            <View style={styles.passwordInput}>
              <TextInput
                style={styles.areaInput}
                autoCapitalize="none"
                secureTextEntry={hiddenPassword}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableWithoutFeedback onPress={() => setHiddenPassword(!hiddenPassword)}>
                <Icon name={hiddenPassword ? 'eye-slash' : 'eye'} size={25} color="grey" style={{ marginTop: 7 }} />
              </TouchableWithoutFeedback>
            </View>
            <Text style={styles.tag}>Confirma tu contraseña:</Text>
            <TextInput
              style={styles.areaInput}
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(text) => setConfirmPassword(text)}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.confirmButton}>
            <TouchableOpacity onPress={signUpButtonHandler}>
              <Text style={styles.textConfirmButton}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
