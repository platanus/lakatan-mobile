import React, { useState, useEffect } from 'react';
import {
  Text, View, Button, TouchableOpacity, ScrollView, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

import Raffle from '../../components/TeamScreen/Raffle';
import styles from '../../styles/RiteScreen/RiteScreen';

import color from '../../styles/colors';

const users = [{
  id: '1',
  name: 'Felipe Apablaza',
}, {
  id: '2',
  name: 'Felipe Beltrán',
}, {
  id: '3',
  name: 'Cristobal Ilabaca',
}, {
  id: '4',
  name: 'Javier Tramon',
}];

const RiteScreen = (props) => {
  const [selectedItems, setSelectedItems] = useState(users);
  const [isModalVisible, setModalVisible] = useState(false);
  const [teamList, setTeamList] = useState([{
    id: 1, name: 'Mobile Capstone 1', description: 'Propósito Equipo 1...', members: [{ id: 1, name: 'Felipe Apablaza' }, { id: 2, name: 'Felipe Beltrán' }, { id: 3, name: 'Cristobal Ilabaca' }, { id: 4, name: 'Javier Tramon' }], state: false,
  },
  {
    id: 2, name: 'Mobile Capstone 2', description: 'Propósito Equipo 2...', members: [{ id: 1, name: 'Felipe Apablaza' }, { id: 2, name: 'Felipe Beltrán' }, { id: 3, name: 'Cristobal Ilabaca' }, { id: 4, name: 'Javier Tramon' }], state: false,
  },
  {
    id: 3, name: 'Mobile Capstone 3', description: 'Propósito Equipo 3...', members: [{ id: 1, name: 'Felipe Apablaza' }, { id: 2, name: 'Felipe Beltrán' }, { id: 3, name: 'Cristobal Ilabaca' }, { id: 4, name: 'Javier Tramon' }], state: false,
  },
  {
    id: 4, name: 'Mobile Capstone 4', description: 'Propósito Equipo 4...', members: [{ id: 1, name: 'Felipe Apablaza' }, { id: 2, name: 'Felipe Beltrán' }, { id: 3, name: 'Cristobal Ilabaca' }, { id: 4, name: 'Javier Tramon' }], state: false,
  },
  ]);
  // const sortButton = <Button title="Sortear" color="white" onPress={() => setModalVisible(!isModalVisible)} />;
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.screen}>
          <Text style={styles.riteTitle}>Rito 1</Text>
          <View style={styles.infoRite}>
            <Text style={styles.textHeader}>Objetivo</Text>
            <Text style={styles.textInfo}>Este es el objetivo de este rito</Text>
            <Text style={styles.textHeader}>Personas</Text>
            <Text style={styles.textInfo}>Este objetivo necesita 2 personas</Text>
          </View>
          <View style={styles.raffleContainer}>
            <Text style={styles.textHeader}>Sortear</Text>
            <MultiSelect
              items={users}
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
              displayKey="name"
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
         && <Raffle visible={isModalVisible} setVisible={setModalVisible} users={teamList} navigation={props.navigation} />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RiteScreen;
