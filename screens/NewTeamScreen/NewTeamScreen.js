import React from 'react';
import {
  View, Text, Button, TextInput, TouchableWithoutFeedback, Keyboard,
} from 'react-native';

import styles from './styles';
import color from '../../styles/colors';
import TeamList from '../../components/TeamScreen/TeamList'

const NewTeamScreen = (props) => {
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
  const {members} = props.route.params; 
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const membersObjects = [];

  if (members){
    members.forEach(element => {
      membersObjects.push(users.find(x => x.id === element));
      
    });
  }

  const SendUsers = () =>{
    props.navigation.navigate('Agregar usuarios', {name: name, members: members})
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.formCard}>
          <Text style={styles.title}>Crear un nuevo equipo</Text>
          <View style={styles.input}>  
            <Text style={styles.tag}>Nombre:</Text>
            <TextInput style={styles.areaInput} placeholder="Ej: 'Mobile Capstone'" value={name} onChangeText={setName} />
            <Text style={styles.tag}>Descripción:</Text>
            <TextInput style={styles.areaInput} placeholder="Ej: 'Equipo encargado de Lakatan-Mobile'" value={description} onChangeText={setDescription} />
          </View>
        </View>
        <TeamList users={membersObjects}/>
        <View style={styles.addUser}>
            <Button title="Agregar Usuario"  onPress={() => SendUsers()} />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}><Button title="Cancelar" color={color.white} onPress={() => props.navigation.goBack()}/></View>
          <View style={styles.confirmButton}><Button title="Confirmar" color={color.white} onPress={() => props.navigation.navigate('Equipos', { name, description, members: membersObjects})} /></View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
};

export default NewTeamScreen;
