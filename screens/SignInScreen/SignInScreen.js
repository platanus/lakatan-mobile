import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View, Text, TextInput, Keyboard, TouchableWithoutFeedback, TouchableOpacity, Alert,
} from 'react-native';
import colors from '../../styles/colors';
import { SIGN_IN_REQUEST, CLEAR_AUTH_ERROR, CLEAR_AUTH_SUCCESS } from '../../store/types';

import styles from '../../styles/SignInScreen/SignInScreen';
import emailHandler from '../../components/Authentication/EmailHandler';

// eslint-disable-next-line max-statements
const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [formError, setFormError] = useState(undefined);

  const apiError = useSelector((store) => store.authentication.error);
  const apiSuccess = useSelector((store) => store.authentication.success);

  const dispatch = useDispatch();

  const signInButtonDisable = () => (
    { ...styles.confirmButton, backgroundColor: email && password ? colors.blue : colors.gray });

  const signInButtonHandler = () => {
    if (emailHandler(email)) {
      dispatch({ type: SIGN_IN_REQUEST, payload: { email, password } });
    } else setFormError('¡Has ingresado un email inválido!');
  };

  const signUpButtonHandler = () => {
    setEmail('');
    setPassword('');
    navigation.navigate('SignUp');
  };

  const clearAlertMessage = () => {
    if (!!apiError) dispatch({ type: CLEAR_AUTH_ERROR });
    if (!!apiSuccess) dispatch({ type: CLEAR_AUTH_SUCCESS });
    if (!!formError) setFormError(undefined);
  };

  if ((apiError || formError || apiSuccess) && navigation.isFocused()) {
    const message = apiError || formError || apiSuccess;
    Alert.alert(
      message, '', [{ text: 'OK', onPress: clearAlertMessage }],
      { cancelable: false },
    );
  }

  return (
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
