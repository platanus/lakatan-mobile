import ListItem from 'antd-mobile/lib/list/ListItem';
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard,
} from 'react-native';

import MultiSelect from 'react-native-multiple-select';


import color from '../../styles/colors';
import styles from '../../styles/NewUserToTeamScreen/NewUserToTeamScreen';

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

const NewUserToTeamScreen = (props) => {
    
  const {members} = props.route.params;
  const [selectedItems, setSelectedItems] = useState(members)

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View >
          <MultiSelect
            items={users}
            uniqueKey="id"
            alwaysShowSelectText={true}
            onSelectedItemsChange={setSelectedItems}
            selectedItems={selectedItems}
            colors={{ primary: color.blue, success: color.blue, text: color.black }}
            confirmText="Confirmar"
            selectText="Elige usuarios"
            searchInputPlaceholderText="Elige un usuario a agregar..."
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor={color.black}
            selectedItemTextColor= {color.blue}
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{ color: '#CCC' }}
            submitButtonColor={color.blue}
            submitButtonText="Submit"
            button="40"
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}><Button title="Cancelar"  onPress={() =>  props.navigation.navigate('Nuevo equipo', { name: props.route.params.name ,members: members})} /></View>
          <View style={styles.confirmButton}><Button title="Confirmar" onPress={() => props.navigation.navigate('Nuevo equipo', { name: props.route.params.name ,members: selectedItems})} /></View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewUserToTeamScreen;
