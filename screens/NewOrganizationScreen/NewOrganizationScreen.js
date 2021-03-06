import React, { useState, useLayoutEffect } from 'react';
import {
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';
import colors from '../../styles/colors';
import styles from '../../styles/NewOrganizationScreen/NewOrganizationScreen';
import BackButton from '../../components/LandingScreen/BackButton';

const NewOrganizationScreen = (props) => {
  const [name, setName] = useState('');

  useLayoutEffect(() => {
    props.navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <BackButton navigation={props.navigation}/>
      ),
      headerTitle: () => (
        <View style={styles.header}>
          <Text style={styles.title}>Nueva Organización</Text>
        </View>
      ),
    });
  }, [props.navigation]);

  const confirmButtonDisable = () => (
    { ...styles.confirmButton, backgroundColor: name ? colors.darkBlue : colors.gray });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.formCard}>
          <Text>Agregar una nueva organización</Text>
          <Text style={styles.tag}>Nombre</Text>
          <TextInput
            style={styles.areaInput}
            placeholder="Ingresar nombre"
            value={name} onChangeText={setName}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.createButtonContainer}>
            <TouchableOpacity
              disabled={!name}
              style={confirmButtonDisable()}
              onPress={() => {}}
            >
              <Text style={styles.textConfirmButton}>crear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewOrganizationScreen;