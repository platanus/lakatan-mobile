/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard,
} from 'react-native';

import SectionedMultiSelect from 'react-native-sectioned-multi-select';

import color from '../../styles/colors';
import styles from './styles';

const NewUserToTeamScreen = (props) => {
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

  const [selectedItems, setSelectedItems] = useState([]);

  const selectedItemsHandler = (items) => {
    setSelectedItems(items);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View>
          <SectionedMultiSelect
            items={users}
            uniqueKey="id"
            selectText="Elige un usuario a agregar..."
            alwaysShowSelectText={true}
            onSelectedItemsChange={selectedItemsHandler}
            selectedItems={selectedItems}
            colors={{ primary: color.blue, success: color.blue, text: color.black }}
            confirmText="Confirmar"
            searchPlaceholderText="Elige un usuario a agregar..."
            // removeAllText="Remove all"
            showCancelButton={true}
            showRemoveAll={false}
            modalWithTouchable={true}
            itemFontFamily="system font"
            confirmFontFamily="system font"
            searchTextFontFamily="system font"
            button="40"   
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}><Button title="Cancelar" color={color.white} onPress={() => props.navigation.navigate('Equipos')} /></View>
          <View style={styles.confirmButton}><Button title="Confirmar" color={color.white} onPress={() => navigation.navigate('Equipos', { name })} /></View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewUserToTeamScreen;
