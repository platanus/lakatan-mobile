import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View, Text, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Alert,
} from 'react-native';
import colors from '../../styles/colors';
import { SIGN_IN_REQUEST, CLEAR_AUTH_ERROR } from '../../store/types';

import styles from '../../styles/SignInScreen/SignInScreen';

const SignInScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const error = useSelector((store) => store.authentication.error);
  const dispatch = useDispatch();

  const emailHandler = (text) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(text)) {
      return (true);
    }
    Alert.alert(
      'Has ingresado un correo inválido!',
      'Intenta de nuevo',
      [
        { text: 'OK' },
      ],
      { cancelable: false },
    );
    return (false);
  };

  const signInButtonHandler = () => {
    if (emailHandler(email)) {
      dispatch({ type: SIGN_IN_REQUEST, payload: { email, password } });
    }
  };

  const signInButtonDisable = () => (
    { ...styles.confirmButton, backgroundColor: email && password ? colors.blue : colors.gray });

  const signUpButtonHandler = () => {
    setEmail('');
    setPassword('');
    props.navigation.navigate('SignUp');
  };

  useEffect(() => {
    if (error) {
      Alert.alert(
        error,
        '',
        [
          { text: 'OK' },
        ],
        { cancelable: false },
      );
      dispatch({ type: CLEAR_AUTH_ERROR });
    }
  }, [error]);

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.formCard}>
          <Text style={styles.title}>¡Bienvenido a Lakatan! </Text>
          <View style={styles.input}>
            <Text style={styles.tag}>Correo electrónico:</Text>
            <TextInput
              style={styles.areaInput}
              placeholder="Ej: 'baldana@uc.cl'"
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
              value={email}
              keyboardType="email-address"
              autoCompleteType="off"
            />
            <Text style={styles.tag}>Contraseña:</Text>
            <View style={styles.passwordInput}>
              <TextInput
                style={styles.areaInput}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={hiddenPassword}
                autoCapitalize="none"
                value={password}
              />
              <TouchableWithoutFeedback onPress={() => setHiddenPassword(!hiddenPassword)}>
                <Icon name={hiddenPassword ? 'eye-slash' : 'eye'} size={25} color="grey" style={{ marginTop: 7 }} />
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={signInButtonDisable()}>
            <TouchableOpacity disabled={!(email && password)} onPress={signInButtonHandler}>
              <Text style={styles.textConfirmButton}>Ingresar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cancelButton}>
            <TouchableOpacity onPress={signUpButtonHandler}>
              <Text style={styles.textCancelButton}>Registrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
};

export default SignInScreen;
