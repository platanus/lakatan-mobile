import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';

import styles from '../../styles/NewTeamScreen/NewTeamScreen';
import TeamList from '../../components/TeamScreen/TeamList';

const NewTeamScreen = (props) => {
  const { members } = props.route.params;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { users } = useSelector((state) => state.users);

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
            <TextInput
              style={styles.areaInput}
              placeholder="Ej: 'Mobile Capstone'"
              value={name} onChangeText={setName}
            />
            <Text style={styles.tag}>Propósito:</Text>
            <TextInput
              style={styles.areaInput}
              placeholder="Ej: 'Equipo encargado de Lakatan-Mobile'"
              value={description}
              onChangeText={setDescription}
            />
          </View>
        </View>
        <TeamList users={membersObjects} inUserList={true} />
        <View style={styles.addUser}>
          <TouchableOpacity
            style={styles.addUserButton}
            onPress={() => props.navigation.navigate('Add Users', { name, members })}
          >
            <Text style={styles.addUserText}>Agregar usuarios</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={() => props.navigation.goBack()}>
            <Text style={styles.textCancelButton}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={() => props.navigation.navigate('Teams', { name, description, members })}
          >
            <Text style={styles.textConfirmButton}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewTeamScreen;
