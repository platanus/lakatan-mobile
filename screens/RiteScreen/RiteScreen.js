import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { CREATE_RAFFLE_REQUEST } from '../../store/types';

import Raffle from '../../components/TeamScreen/Raffle';
import styles from '../../styles/RiteScreen/RiteScreen';

import color from '../../styles/colors';

const RiteScreen = ({
  navigation, route: {
    params: {
      name, userMinimum, goal, members, task_id,
    },
  },
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [raffleButton, setRaffleButton] = useState(false);

  const email = useSelector((store) => store.authentication.email);
  const token = useSelector((store) => store.authentication.token);

  const dispatch = useDispatch();
  const availableMembers = [];
  members.forEach((member) => availableMembers.push({ id: member.id.toString(), name: member.name }));

  const raffleHandler = () => {
    dispatch({
      type: CREATE_RAFFLE_REQUEST,
      payload: {
        selectedItems, task_id, email, token,
      },
    });
    setModalVisible(true)
  };

  const selectedHandler = (selected) => {
    setSelectedItems(selected);
    setRaffleButton(userMinimum <= selected.length);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.screen}>
          <Text style={styles.riteTitle}>{name}</Text>
          <View style={styles.infoRite}>
            <Text style={styles.textHeader}>Objetivo</Text>
            <Text style={styles.textInfo}>{goal}</Text>
            <Text style={styles.textHeader}>Cantidad de personas</Text>
            <Text style={styles.textInfo}>{userMinimum}</Text>
          </View>
          <View style={styles.raffleContainer}>
            <Text style={styles.textHeader}>Sortear</Text>
            <MultiSelect
              items={availableMembers}
              uniqueKey="id"
              alwaysShowSelectText
              onSelectedItemsChange={selectedHandler}
              selectedItems={selectedItems}
              colors={{ primary: color.blue, success: color.blue, text: color.black }}
              confirmText="Confirmar"
              selectText="Elige usuarios"
              searchInputPlaceholderText="Elige un usuario a agregar..."
              tagRemoveIconColor={color.softGray}
              tagBorderColor={color.softGray}
              tagTextColor={color.black}
              selectedItemTextColor={color.blue}
              selectedItemIconColor={color.softGray}
              itemTextColor={color.black}
              displayKey="name"
              searchInputStyle={{ color: color.softGray }}
              submitButtonColor={color.blue}
              submitButtonText="Ok"
              button="40"
            />
          </View>
        </View>
        {raffleButton
          ? (
            <View style={styles.raffleButtonContainer}>
              <TouchableOpacity style={styles.raffleButton} onPress={raffleHandler}>
                <Text style={styles.textRaffleButton}>Sortear</Text>
              </TouchableOpacity>
              {isModalVisible
            && <Raffle visible={isModalVisible} setVisible={setModalVisible} users={members.filter((member) => selectedItems.includes(member.id))} navigation={navigation} />}
            </View>
          ) : (
            <View style={styles.raffleButtonContainer}>
              <TouchableOpacity disabled style={styles.disabledRaffleButton}>
                <Text style={styles.textRaffleButton}>Sortear</Text>
              </TouchableOpacity>
            </View>
          )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RiteScreen;
