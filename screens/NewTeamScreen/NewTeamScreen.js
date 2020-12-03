/* eslint-disable max-statements */
import React, { useState, useLayoutEffect } from 'react';
import {
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../../styles/colors';
import styles from '../../styles/NewTeamScreen/NewTeamScreen';
import TeamList from '../../components/TeamScreen/TeamList';
import BackButton from '../../components/LandingScreen/BackButton';
import UsersListComponent from '../../components/UsersListComponent/UsersListComponent';

const NewTeamScreen = (props) => {
  const { members } = props.route.params;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const { users } = useSelector((state) => state.users);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <BackButton navigation={props.navigation}/>
      ),
      headerTitle: () => (
        <View style={styles.headerScreen}>
          <Text style={styles.titleScreen}>Nuevo equipo</Text>
        </View>
      ),
    });
  }, [props.navigation]);

  const membersObjects = [];

  const confirmButtonDisable = () => (
    { ...styles.confirmButton, backgroundColor: name && description ? colors.darkBlue : colors.gray });

  if (members) {
    const auxData = [];
    members.forEach((element) => {
      auxData.push(users.find((x) => x.id === element));
    });
    auxData.forEach((element) => {
      membersObjects.push(
        { id: element.id,
          name: element.attributes.name,
          picture: element.attributes.picture,
          selected: true });
    });
  }

  return (

    <View style={styles.container}>
      <View style={styles.formCard}>
        <View style={styles.input}>
          <Text style={styles.tag}>Nombre</Text>
          <TextInput
            style={styles.areaInput}
            value={name} onChangeText={setName}
          />
          <Text style={styles.tag}>Propósito</Text>
          <TextInput
            style={styles.areaInput}
            value={description}
            onChangeText={setDescription}
          />
        </View>
      </View>

      <UsersListComponent selectedMembers={membersObjects} />

      <View style={styles.addUserContainer}>
        <View style={styles.createButtonContainer}>
          <TouchableOpacity
            style={styles.addUserButton}
            onPress={() => props.navigation.navigate('Add Users', { name, members })}
          >
            <Text style={styles.addUserText}>Agregar usuarios</Text>
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
            <Text style={styles.textConfirmButton}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
};

export default NewTeamScreen;
