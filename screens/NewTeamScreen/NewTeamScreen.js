import React from 'react';
import {
  View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard,
} from 'react-native';

import styles from './styles';
import color from '../../styles/colors';

const NewTeamScreen = (props) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.formCard}>
          <Text style={styles.title}>Crear un nuevo equipo</Text>
          <View style={styles.input}>  
            <Text style={styles.tag}>Nombre:</Text>
            <TextInput style={styles.areaInput} placeholder="Ej: 'Mobile Capstone'" />
            <Text style={styles.tag}>Descripción:</Text>
            <TextInput style={styles.areaInput} placeholder="Ej: 'Equipo encargado de Lakatan-Mobile'" />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}><Button title="Cancelar" color={color.white} onPress={() => props.navigation.navigate('Equipos')}/></View>
          <View style={styles.confirmButton}><Button title="Confirmar" color={color.white} onPress={() => navigation.navigate('Equipos', { name })} /></View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default NewTeamScreen;
