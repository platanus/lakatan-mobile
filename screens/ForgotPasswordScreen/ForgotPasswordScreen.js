import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, TextInput, TouchableWithoutFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../styles/ForgotPasswordScreen/ForgotPasswordScreen';
import color from '../../styles/colors';

const ForgotPasswordScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const sendTouchableHandler = () => {
    // dispatch
    console.log('dispatch');
  };

  return (
    <TouchableWithoutFeedback>
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
        </View>

        <View style={styles.footContainer}>
          <TouchableOpacity
            style={{ ...styles.sendTouchable, backgroundColor: email ? color.darkBlue : color.gray }}
            onPress={sendTouchableHandler}
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
