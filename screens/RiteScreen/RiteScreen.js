import React, { useState, useEffect } from 'react';
import {
  Text, View, Button, TouchableOpacity, ScrollView, FlatList, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';

import Raffle from '../../components/TeamScreen/Raffle';
import styles from '../../styles/RiteScreen/RiteScreen';

import color from '../../styles/colors';

const RiteScreen = ({ navigation, route: { params: { name, userMinimum, goal, members } } }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [raffleButton, setRaffleButton] = useState(false);

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
              items={members}
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
              displayKey="email"
              searchInputStyle={{ color: color.softGray }}
              submitButtonColor={color.blue}
              submitButtonText="Submit"
              button="40"
            />
          </View>
        </View>
        {raffleButton
          ? (
            <View style={styles.raffleButtonContainer}>
              <TouchableOpacity style={styles.raffleButton} onPress={() => setModalVisible(true)}>
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
