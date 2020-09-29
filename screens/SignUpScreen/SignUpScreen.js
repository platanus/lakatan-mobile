import React from 'react'
import { View, Text, Keyboard, TouchableWithoutFeedback, Button, TextInput } from 'react-native'


import color from '../../styles/colors';
import styles from '../../styles/SignUpScreen/SignUpScreen';

const SignUpScreen = props => {
    return ( 
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={styles.container}>
        <View style={styles.formCard}>
          <Text style={styles.title}>¡Crea una cuenta!</Text>
          <View style={styles.input}>
            <Text style={styles.tag}>Correo electrónico:</Text>
            <TextInput style={styles.areaInput} placeholder="Ej: 'baldana@uc.cl'" />
            <Text style={styles.tag}>Contraseña:</Text>
            <TextInput style={styles.areaInput} />
            <Text style={styles.tag}>Confirma tu contraseña:</Text>
            <TextInput style={styles.areaInput} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.confirmButton}><Button title="Registrar"  /></View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    )
}



export default SignUpScreen