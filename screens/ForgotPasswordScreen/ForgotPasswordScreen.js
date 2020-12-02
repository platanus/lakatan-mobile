import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PASSWORD_CHANGE_REQUEST, CLEAR_AUTH_ERROR, CLEAR_AUTH_SUCCESS } from '../../store/types';
import styles from '../../styles/ForgotPasswordScreen/ForgotPasswordScreen';
import color from '../../styles/colors';

const ForgotPasswordScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(store => store.authentication);
  const [email, setEmail] = useState('');

  const sendTouchableHandler = () => {
    dispatch({ type: CLEAR_AUTH_ERROR });
    dispatch({ type: CLEAR_AUTH_SUCCESS });
    dispatch({ type: PASSWORD_CHANGE_REQUEST, payload: { email } });
  };

  useEffect(() => {
    navigation.addListener('blur', () => {
      dispatch({ type: CLEAR_AUTH_ERROR });
      dispatch({ type: CLEAR_AUTH_SUCCESS });
    });
  }, [navigation, dispatch]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainContainer}>

        <View style={styles.bodyContainer}>
          <View style={styles.instructionView}>
            <Text style={styles.instructionText}>
              Ingresa tu email y te enviaremos un link para restablecer tu contraseña
            </Text>
          </View>

          <View style={styles.emailView}>
            <TextInput style={styles.emailTextInput}
              placeholder="Ej: 'baldana@uc.cl'"
              autoCapitalize="none"
              keyboardType="email-address"
              autoCompleteType="off"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.messageView}>
            <Text style={{ ...styles.messageText,
              color: success ? color.darkBlue : color.darkRed }}>
              {success || error}
            </Text>
          </View>
        </View>

        <View style={styles.footContainer}>
          <TouchableOpacity
            style={{
              ...styles.sendTouchable,
              backgroundColor: email && !loading ? color.darkBlue : color.gray }}
            onPress={() => sendTouchableHandler()}
            disabled={(!email || loading)}
          >
            <Text style={styles.sendText}>
              Enviar
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;
