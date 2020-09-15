/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, Button,
} from 'react-native';
import Modal from 'react-native-modal';
import { bounceInUp, bounceInDown } from 'react-native-animatable';
import Emoji from 'react-native-emoji';
import styles from './styles';
import color from '../../styles/colors';

// function Team({ route }) {
const Team = (props) => {
  const { name } = props.route.params;

  const users = ['Felipe Apablaza', 'Felipe Beltrán', 'Cristobal Ilabaca', 'Javier Tramon'];

  const [isModalVisible, setModalVisible] = useState(false);
  const [userSelected, setUserSelected] = useState('');
  const toggleModalIn = () => {
    const random = Math.floor(Math.random() * users.length);
    setUserSelected(users[random]);
    setModalVisible(!isModalVisible);
  };

  const toggleModalOff = () => {
    setModalVisible(!isModalVisible);
  };

  const feedbackModal = () => {
    setModalVisible(!isModalVisible);
    props.navigation.navigate('Feedback');
  };

  const estoyEnEsteEquipo = true;
  // let editButton = <Text></Text>;
  // let sortButton = <Button title="Unirte a este grupo" color="white" />;
  const editButton = <View style={styles.editButton}><Button title="Editar" color="white" /></View>;
  const sortButton = <Button title="Sortear" color="white" onPress={toggleModalIn} />;

  if (estoyEnEsteEquipo === true) {
    const editButton = <View style={styles.editButton}><Button title="Editar" color="white" /></View>;
    const sortButton = <Button title="Sortear" color="white" />;
  } else {
    const editButton = <Text />;
    const sortButton = <Button title="Unirte a este grupo" color="white" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.backButton}><Button title="Atrás" color="white" onPress={() => props.navigation.navigate('Equipos')} /></View>
        {editButton}
      </View>
      <View style={styles.screen}>
        <View>
          <Text style={styles.teamTitle}>{name}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{props.route.params.description}</Text>
        </View>
        <View style={styles.listOfTeam}>
          {props.route.params.members.map((member) => (
            <View style={styles.cardOfMember}>
              <Text style={styles.items}>
                {member}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.chooseButtonContainer}>
        <Button title="Sortear" color="white" onPress={toggleModalIn} />
        <Modal
          isVisible={isModalVisible}
          animationIn={bounceInUp}
          animationOut={bounceInDown}
          style={styles.modal}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalMessage}>El usuario seleccionado es:</Text>
            <Text style={styles.modalUser}>{userSelected}</Text>
            <Emoji name=":tada:" style={styles.modalEmoji} />
            <View style={styles.confirmButton}><Button title="¡Ayudanos con tu feedback!" color={color.white} onPress={feedbackModal} /></View>
            <View style={styles.cancelButton}><Button title="En otro momento" color={color.gray} onPress={toggleModalOff} /></View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Team;
