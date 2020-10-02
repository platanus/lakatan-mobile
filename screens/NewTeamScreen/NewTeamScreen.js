/* eslint-disable react/jsx-boolean-value */
import React, { useState } from 'react';
import {
  View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';

import styles from '../../styles/NewTeamScreen/NewTeamScreen';
import color from '../../styles/colors';
import TeamList from '../../components/TeamScreen/TeamList';

const users = [{
  id: '1',
  name: 'Felipe Apablaza',
}, {
  id: '2',
  name: 'Felipe Beltrán',
}, {
  id: '3',
  name: 'Cristobal Ilabaca',
}, {
  id: '4',
  name: 'Javier Tramon',
}, {
  id: '5',
  name: 'Alfonso Aguirrebeña',
}, {
  id: '6',
  name: 'Benjamin Aldana',
}, {
  id: '7',
  name: 'Cindy Tarud',
}, {
  id: '8',
  name: 'Claudio Prieto',
}, {
  id: '9',
  name: 'Fran Holhlberg',
}, {
  id: '10',
  name: 'Ignacio Madariaga',
}, {
  id: '11',
  name: 'Javier Paravich',
}];

const NewTeamScreen = (props) => {
  const { members } = props.route.params;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const membersObjects = [];

  if (members) {
    members.forEach((element) => {
      membersObjects.push(users.find((x) => x.id === element));
    });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.formCard}>
          <Text style={styles.title}>Crear un nuevo equipo</Text>
          <View style={styles.input}>
            <Text style={styles.tag}>Nombre:</Text>
            <TextInput style={styles.areaInput} placeholder="Ej: 'Mobile Capstone'" value={name} onChangeText={setName} />
            <Text style={styles.tag}>Descripción:</Text>
            <TextInput style={styles.areaInput} placeholder="Ej: 'Equipo encargado de Lakatan-Mobile'" value={description} onChangeText={setDescription} />
          </View>
        </View>
        <TeamList users={membersObjects} inUserList={true} />
        <View style={styles.addUser}>
          <Button title="Agregar Usuario" onPress={() => props.navigation.navigate('Add Users', { name, members })} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => props.navigation.goBack()}>
            <Text style={styles.textCancelButton}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.confirmButton} onPress={() => props.navigation.navigate('Teams', { name, description, members: membersObjects })}>
            <Text style={styles.textConfirmButton}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewTeamScreen;
