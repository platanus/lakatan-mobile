/* eslint-disable max-statements */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import { SIGN_UP_REQUEST, CLEAR_AUTH_ERROR, CLEAR_AUTH_SUCCESS } from '../../store/types';

import styles from '../../styles/SignUpScreen/SignUpScreen';
import emailHandler from '../../components/Authentication/EmailHandler';

const passwordMinimumLength = 6;

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [formError, setFormError] = useState(undefined);

  const apiError = useSelector((store) => store.authentication.error);
  const apiSuccess = useSelector((store) => store.authentication.success);
  const dispatch = useDispatch();

  const signUpButtonDisable = () => (
    {
      ...styles.confirmButton,
      backgroundColor:
      email && password && confirmPassword && name ? colors.blue : colors.gray,
    });

  const signUpButtonHandler = () => {
    if (!emailHandler(email)) return setFormError('¡Has ingresado un email inválido!');
    if ((password !== confirmPassword)) return setFormError('¡Las contraseñas no coinciden!');
    if (password.length < passwordMinimumLength) {
      return setFormError('¡Tu contraseña debe tener un mínimo de 6 caracteres!');
    }

    return dispatch({ type: SIGN_UP_REQUEST,
      payload: {
        name, email, password, confirmPassword,
      },
    });
  };

  const clearAlertMessage = () => {
    if (!!formError) setFormError(undefined);
    if (!!apiError) dispatch({ type: CLEAR_AUTH_ERROR });
    if (!!apiSuccess) dispatch({ type: CLEAR_AUTH_SUCCESS });
  };

  if (formError || apiError || apiSuccess) {
    const message = formError || apiError || apiSuccess;
    Alert.alert(
      message, '', [{ text: 'OK', onPress: clearAlertMessage }],
      { cancelable: false },
    );
  }

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : 'height'}
        >
          <View>
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
