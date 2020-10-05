/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  View, Text, Keyboard, TouchableWithoutFeedback, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import { SIGN_UP_REQUEST } from '../../store/types';

import styles from '../../styles/SignUpScreen/SignUpScreen';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const dispatch = useDispatch();

  const signUpButtonDisable = () => (
    {
      ...styles.confirmButton,
      backgroundColor:
      email && password && confirmPassword && name
        ? colors.blue : colors.gray,
    });

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
    } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
      Alert.alert(
        'Has ingresado un correo inválido!',
        'Intenta de nuevo',
        [
          { text: 'OK' },
        ],
        { cancelable: false },
      );
    } else {
      dispatch({
        type: SIGN_UP_REQUEST,
        payload: {
          name, email, password, confirmPassword,
        },
      });
    }
  };

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'position' : 'height'}

        >
          <View style={styles.formCard}>
            <Text style={styles.title}>¡Crea una cuenta!</Text>
            <View style={styles.input}>
              <Text style={styles.tag}>Nombre:</Text>
              <TextInput
                style={styles.areaInput}
                placeholder="Benjamín Aldana"
                autoCapitalize="words"
                onChangeText={(text) => setName(text)}
                autoCompleteType="off"
              />
              <Text style={styles.tag}>Correo electrónico:</Text>
              <TextInput
                style={styles.areaInput}
                placeholder="Ej: 'baldana@uc.cl'"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                autoCompleteType="off"
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
                secureTextEntry={hiddenPassword}
                onChangeText={(text) => setConfirmPassword(text)}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.buttonContainer}>
          <View style={signUpButtonDisable()}>
            <TouchableOpacity
              disabled={!(email && password && confirmPassword && name)}
              onPress={signUpButtonHandler}
            >
              <Text style={styles.textConfirmButton}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
};

export default SignUpScreen;
