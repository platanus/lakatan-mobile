import React, { useState, useEffect } from 'react';
import {
  View, Text, Button, TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Emoji from 'react-native-emoji';
import { bounceInUp, bounceInDown } from 'react-native-animatable';
import color from '../../styles/colors';
import styles from '../../styles/TeamScreen/TeamScreen';

import TeamList from './TeamList';

const selectedUsersId = [5, 6, 8];

let fewUsers = false;

const Raffle = ({
  users, setVisible, visible, navigation,
}) => {
  const userSelected = users.filter((user) => selectedUsersId.includes(user.id));
  if (selectedUsersId.length > 1) {
    fewUsers = true;
  }
  const toggleModalOff = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Modal
        isVisible={visible}
        animationIn={bounceInUp}
        animationOut={bounceInDown}
        style={styles.modal}
      >
        <View style={styles.modalView}>
          {!fewUsers ? (
            <Text style={styles.modalMessage}>El usuario seleccionado es:</Text>
          ) : (
            <Text style={styles.modalMessage}>Los usuarios seleccionados son:</Text>
          )}
          <View style={styles.teamListContainer}>
            <TeamList users={userSelected} inUserList={false} />
          </View>
          <Emoji name=":tada:" style={styles.modalEmoji} />
          <View style={styles.exitButtonContainer}>
            <TouchableOpacity style={styles.exitButton} onPress={toggleModalOff}>
              <Text style={styles.textExitButton}>Salir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Raffle;
