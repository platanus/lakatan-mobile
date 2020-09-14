/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard,
} from 'react-native';

import MultiSelect from 'react-native-multiple-select';

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
    <View>
      <MultiSelect
        hideTags
        items={users}
        uniqueKey="id"
        ref={(component) => { props.multiSelect = component }}
        onSelectedItemsChange={selectedItemsHandler}
        selectedItems={selectedItems}
        selectText="Elige un usuario a agregar..."
        searchInputPlaceholderText=""
      />
      <View>
        {props.multiSelect.getSelectedItemsExt(selectedItems)}
      </View>
    </View>
    
  );
};

export default NewUserToTeamScreen;
