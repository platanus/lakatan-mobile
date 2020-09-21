import ListItem from 'antd-mobile/lib/list/ListItem';
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

  console.log("users\n",users)
  const {members, memberslist} = props.route.params;
  const [selectedItems, setSelectedItems] = useState(memberslist);

  console.log("selected Items\n",selectedItems)

  const send = () =>{
    var list = [];
    selectedItems.forEach((item) => {
      console.log(item)
      users.forEach((user) => {
        if (item.toString() == user.id){
          list.push(user)
        }
      });
    });
    console.log(list)
    props.navigation.navigate('Nuevo equipo', { name: props.route.params.name ,members: list})
  };
  console.log("selecionados",selectedItems)
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View >
          <MultiSelect
            items={users}
            uniqueKey="id"
            selectText="Elige un usuario a agregar..."
            alwaysShowSelectText={true}
            onSelectedItemsChange={setSelectedItems}
            selectedItems={selectedItems}
            colors={{ primary: color.blue, success: color.blue, text: color.black }}
            confirmText="Confirmar"
            // searchPlaceholderText="Elige un usuario a agregar..."
            // removeAllText="Remove all"
            // showCancelButton={true}
            // showRemoveAll={false}
            // modalWithTouchable={true}
            // Estos items generan error, revisar
            // itemFontFamily="system font"
            // confirmFontFamily="system font"
            // searchTextFontFamily="system font"
            selectText="Elige usuarios"
            searchInputPlaceholderText="Elige un usuario a agregar..."
            onChangeInput={ (text)=> console.log(text)}
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
            // ref = {component => {this.multiselect = component}}
          />
        <View>
          {/* {this.multiselect? this.multiSelect.getSelectedItemsExt(selecteData):null} */}
        </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}><Button title="Cancelar" color={color.white} onPress={() =>  props.navigation.navigate('Nuevo equipo', { name: props.route.params.name ,members: members})} /></View>
          <View style={styles.confirmButton}><Button title="Confirmar" color={color.white} onPress={() => send()} /></View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewUserToTeamScreen;
