import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../../styles/HookScreen/HookScreen';
import colors from '../../styles/colors';

const HookScreen = (props) => {
  const [hookName, setHookName] = useState('');
  const [hookOf, setHookOf] = useState('salida');
  const [hookType, setHookType] = useState('webhook');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.textHeader}>Hook de</Text>
          <Text>Salida</Text>
          <Text style={styles.textHeader}>Tipo</Text>
          <Text>Webhook</Text>

          <View style={styles.instructionContainer}>
            <Text style={styles.instructionText}>Acá tienen que ir los campos necesarios según el tipo de hook, por ejemplo:</Text>
            <Text style={styles.instructionText}>para un hook de entrada webhook, definir el endpoint después del dominio</Text>
            <Text style={styles.instructionText}>para un hook de salida slack, debiera poder asignarse un canal o una persona y el mensaje</Text>
            <Text style={styles.instructionText}>para un hook de salida webhook debiera poder ingresarse la URL</Text>
          </View>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HookScreen;
