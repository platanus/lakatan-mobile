import React from 'react';
import { useSelector } from 'react-redux';

import {
  View, Text, TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Emoji from 'react-native-emoji';
import { bounceInUp, bounceInDown } from 'react-native-animatable';
import styles from '../../styles/TeamScreen/TeamScreen';

import TeamList from './TeamList';

let fewUsers = false;

const Raffle = ({
  setVisible, visible,
}) => {
  const chosenOnes = useSelector((store) => store.raffles.chosenOnes);
  const members = useSelector((store) => store.teams.currentTeam.members);
  const usersSelected = members.filter((user) => chosenOnes.includes(user.id));
  if (usersSelected.length > 1) {
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
            <TeamList users={usersSelected} inUserList={false} />
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
