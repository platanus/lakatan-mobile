import React, { useLayoutEffect } from 'react';
import {
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import BackButton from '../../components/LandingScreen/BackButton';
import styles from '../../styles/HookScreen/HookScreen';
import colors from '../../styles/colors';

const HookScreen = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <BackButton navigation={props.navigation}/>
      ),
      headerTitle: () => (
        <View style={styles.header}>
          <Text style={styles.title}>Webhook 1</Text>
        </View>
      ),
    });
  }, [props.navigation]);

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
