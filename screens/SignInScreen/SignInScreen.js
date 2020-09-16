import React, {useState} from 'react'
import { View, Text, TextInput, Button, Keyboard, TouchableWithoutFeedback } from 'react-native'

import color from '../../styles/colors';
import styles from './styles';

const SignInScreen = props => {

    const [mail, setMail] = useState('')
    const [password,setPassword] = useState('')

    const mailHandler = text => {
      setMail(text)
    }

    const passwordHandler = text => {
      setPassword(text)
    }

    const signInButtonHandler = () => {
      if (password.length >5 && mail.includes('@')) {
        props.navigation.navigate('Equipos')
      } 
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <View style={styles.container}>
        <View style={styles.formCard}>
          <Text style={styles.title}>¡Bienvenido a Lakatan!</Text>
          <View style={styles.input}>
            <Text style={styles.tag}>Correo electrónico:</Text>
            <TextInput style={styles.areaInput} placeholder="Ej: 'baldana@uc.cl'" onChangeText={ text => mailHandler(text)} />
            <Text style={styles.tag}>Contraseña:</Text>
            <TextInput style={styles.areaInput} onChangeText={ text => passwordHandler(text)} secureTextEntry={true} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.cancelButton}><Button title="Registrar" color={color.white} onPress={() => props.navigation.navigate('SignUp')}/></View>
          <View style={styles.confirmButton}><Button title="Ingresar" color={color.white} onPress={signInButtonHandler} /></View>
        </View>
      </View>
      </TouchableWithoutFeedback>
    )
}



export default SignInScreen