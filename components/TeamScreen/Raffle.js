import React, { useState, useEffect } from 'react';
import {
  View, Text, Button, TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Emoji from 'react-native-emoji';
import { bounceInUp, bounceInDown } from 'react-native-animatable';
import color from '../../styles/colors';
import styles from '../../styles/TeamScreen/TeamScreen';

const Raffle = ({
  users, setVisible, visible, navigation,
}) => {
  const [userSelected, setUserSelected] = useState('');
  useEffect(() => {
    const random = Math.floor(Math.random() * users.length);
    setUserSelected(users[random].email);
  }, []);

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
          <Text style={styles.modalMessage}>El usuario seleccionado es:</Text>
          <Text style={styles.modalUser}>{userSelected}</Text>
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
