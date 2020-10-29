import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../../styles/colors'
import styles from '../../styles/NewTeamScreen/NewTeamScreen';
import TeamList from '../../components/TeamScreen/TeamList';

const NewTeamScreen = (props) => {
  const { members } = props.route.params;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { users } = useSelector((state) => state.users);

  const membersObjects = [];

  const confirmButtonDisable = () => (
    { ...styles.confirmButton, backgroundColor: name && description ? colors.darkBlue : colors.gray });

  if (members) {
    members.forEach((element) => {
      membersObjects.push(users.find((x) => x.id === element));
    });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.formCard}>
          <View style={styles.input}>
            <Text style={styles.tag}>Nombre</Text>
            <TextInput
              style={styles.areaInput}
              placeholder="Mobile Capstone"
              value={name} onChangeText={setName}
            />
            <Text style={styles.tag}>Propósito</Text>
            <TextInput
              style={styles.areaInput}
              placeholder="Equipo encargado de Lakatan-Mobile"
              value={description}
              onChangeText={setDescription}
            />
          </View>
        </View>
        <TeamList users={membersObjects} inUserList={true} />
        <View style={styles.addUserContainer}>
          <View style={styles.createButtonContainer}>
            <TouchableOpacity
              style={styles.addUserButton}
              onPress={() => props.navigation.navigate('Add Users', { name, members })}
            >
              <Text style={styles.addUserText}>agregar usuarios</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.createButtonContainer}>
            <TouchableOpacity
              disabled={!name || !description}
              style={confirmButtonDisable()}
              onPress={() => props.navigation.navigate('Teams', { name, description, members })}
            >
              <Text style={styles.textConfirmButton}>confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewTeamScreen;
