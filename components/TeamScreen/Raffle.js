import React from 'react';
import { useSelector } from 'react-redux';

import {
  View, Text, TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Emoji from 'react-native-emoji';
import { bounceInUp, bounceInDown } from 'react-native-animatable';
import styles from '../../styles/TeamScreen/TeamScreen';
import UsersListComponent from '../../components/UsersListComponent/UsersListComponent'
import TeamList from './TeamList';


const Raffle = ({
  setVisible, visible,
}) => {
  const chosenOnes = useSelector((store) => store.raffles.chosenOnes);
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
          {chosenOnes.length > 1 ? (
            <Text style={styles.modalMessage}>Los usuarios seleccionados son:</Text>
          ) : (
            <Text style={styles.modalMessage}>El usuario seleccionado es:</Text>
          )}
          <View style={{ height: '70%' }}>
            {/* <TeamList users={usersSelected} inUserList={false} /> */}
            <UsersListComponent selectedMembers={chosenOnes}/>
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
