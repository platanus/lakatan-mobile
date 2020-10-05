import React, { useState, useEffect } from 'react';
import {
  Text, View, Button, TouchableOpacity, ScrollView, FlatList, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import MultiSelect from 'react-native-multiple-select';

import Raffle from '../../components/TeamScreen/Raffle';
import styles from '../../styles/RiteScreen/RiteScreen';

import color from '../../styles/colors';

const RiteScreen = (props) => {
  const { name, userMinimum, goal, members } = props.route.params;

  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

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
              onSelectedItemsChange={setSelectedItems}
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
        {/* TO DO: usuarios de Raffle están malos */}
        <View style={styles.raffleButtonContainer}>
          <TouchableOpacity style={styles.raffleButton} onPress={() => setModalVisible(true)}>
            <Text style={styles.textRaffleButton}>Sortear</Text>
          </TouchableOpacity>
          {isModalVisible
         && <Raffle visible={isModalVisible} setVisible={setModalVisible} users={members.filter(member => selectedItems.includes(member.id))} navigation={props.navigation} />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RiteScreen;
