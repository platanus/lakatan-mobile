import React, { useState, useLayoutEffect } from 'react';
import {
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../../components/LandingScreen/BackButton';
import styles from '../../styles/NewHookScreen/NewHookScreen';
import colors from '../../styles/colors';

const NewHookScreen = (props) => {
  const [hookName, setHookName] = useState('');
  const [hookOf, setHookOf] = useState('salida');
  const [hookType, setHookType] = useState('webhook');

  useLayoutEffect(() => {
    props.navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <BackButton navigation={props.navigation}/>
      ),
      headerTitle: () => (
        <View style={styles.header}>
          <Text style={styles.title}>Nuevo hook</Text>
        </View>
      ),
    });
  }, [props.navigation]);

  const hookOfHandler = (item) => {
    setHookOf(item);
  };
  // const createHookButtonDisable = () => (
  //   { ...styles.confirmButton, backgroundColor: hookName ? colors.blue : colors.gray });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.textHeader}>Hook de</Text>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              value={hookOf}
              onValueChange={hookOfHandler}
              placeholder={{}}
              items={[
                { label: 'Salida', value: 'salida', key: 'salida' },
                { label: 'Entrada', value: 'entrada', key: 'salida' },
              ]}
              style={ {
                inputIOS: {
                  color: colors.black,
                  paddingTop: 13,
                  paddingHorizontal: 10,
                  paddingBottom: 12,
                },
                inputAndroid: {
                  color: colors.black,
                },
              } }
            />
            <Icon name="angle-down" style={styles.icon} size={22} color={colors.darkBlue} />
          </View>
          <Text style={styles.textHeader}>Tipo 2</Text>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              value={hookOf}
              onValueChange={hookOfHandler}
              placeholder={{}}
              items={[
                { label: 'Webhook', value: 'webhook', key: 'value' },
              ]}
              style={ {
                inputIOS: {
                  color: colors.black,
                  paddingTop: 13,
                  paddingHorizontal: 10,
                  paddingBottom: 12,
                },
                inputAndroid: {
                  color: colors.black,
                },
              } }
            />
            <Icon name="angle-down" style={styles.icon} size={22} color={colors.darkBlue} />
          </View>
          <Text style={styles.textHeader}>Nombre</Text>
          <TextInput
            style={styles.areaInput}
            value={hookName} onChangeText={setHookName}
            placeholder="Ingresar nombre"
          />
          <View style={styles.instructionContainer}>
            <Text style={styles.instructionText}>Acá tienen que ir los campos necesarios según el tipo de hook, por ejemplo:</Text>
            <Text style={styles.instructionText}>para un hook de entrada webhook, definir el endpoint después del dominio</Text>
            <Text style={styles.instructionText}>para un hook de salida slack, debiera poder asignarse un canal o una persona y el mensaje</Text>
            <Text style={styles.instructionText}>para un hook de salida webhook debiera poder ingresarse la URL</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.createButtonContainer}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Hook')}
              style={styles.applyButton} disabled={false}>
              <Text style={styles.textConfirmButton}>crear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewHookScreen;
