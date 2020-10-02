import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View, Text, TextInput, Button, Keyboard, TouchableWithoutFeedback, TouchableOpacity,
} from 'react-native';
import { SING_IN_REQUEST } from '../../store/types';

import color from '../../styles/colors';
import styles from '../../styles/SignInScreen/SignInScreen';

const SignInScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const dispatch = useDispatch();

  const signInButtonHandler = () => {
    // aquí falta el control de email y contraseña
    // dispatch({ type: SING_IN_REQUEST, payload: { email, password }})
    props.navigation.navigate('Equipos'); // más adelante esto no iría aquí
  };

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
          <View style={styles.cancelButton}>
            <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={styles.textCancelButton}>Registrar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.confirmButton}>
            <TouchableOpacity onPress={signInButtonHandler}>
              <Text style={styles.textConfirmButton}>Ingresar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
};

export default SignInScreen;
