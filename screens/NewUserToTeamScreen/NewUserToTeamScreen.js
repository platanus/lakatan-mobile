import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import {
  View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';

import MultiSelect from 'react-native-multiple-select';

import color from '../../styles/colors';
import styles from '../../styles/NewUserToTeamScreen/NewUserToTeamScreen';

import { USERS_REQUEST } from '../../store/types';

const NewUserToTeamScreen = (props) => {
  const { members, name } = props.route.params;
  const [selectedItems, setSelectedItems] = useState(members);
  const dispatch = useDispatch();
  const { token, email } = useSelector((state) => state.authentication);
  dispatch({ type: USERS_REQUEST, payload: { token, email } });
  const { users } = useSelector((state) => state.users);
  const dataHandler = (data) => {
    const aux = [];
    data.forEach((element) => {
      aux.push({ id: element.id, name: element.attributes.name });
    });

    return aux;
  };
  const availableUsers = dataHandler(users);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View>
          <MultiSelect
            items={availableUsers}
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
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('New Team', { name, members })}>
              <Text style={styles.textCancelButton}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.confirmButton}>
            <TouchableOpacity onPress={() => props.navigation.navigate('New Team', { name, members: selectedItems })}>
              <Text style={styles.textConfirmButton}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewUserToTeamScreen;
