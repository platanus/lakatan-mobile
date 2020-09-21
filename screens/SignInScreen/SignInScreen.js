import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, TextInput, Button, Keyboard, TouchableWithoutFeedback } from 'react-native'
import slice from '../../store/authentication/slice'
import color from '../../styles/colors';
import styles from './styles';

const SignInScreen = props => {

    const [mail, setMail] = useState('')
    const [password,setPassword] = useState('')
    const { authentication: { loading }, } = useSelector(state => state)
    const dispatch = useDispatch()
    const mailHandler = text => {
      setMail(text)
      console.log(loading)
      dispatch({type: 'authentication/start'})
    }

    const passwordHandler = text => {
      setPassword(text)
    }

    const signInButtonHandler = () => {
      console.log(mail, password)
      //props.navigation.navigate('Equipos') // más adelante esto n iría aquí
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
          <View style={styles.container}>
            <View style={styles.formCard}>
              <Text style={styles.title}>¡Bienvenido a Lakatan!</Text>
              <View style={styles.input}>
                <Text style={styles.tag}>Correo electrónico:</Text>
                <TextInput style={styles.areaInput} 
                  placeholder="Ej: 'baldana@uc.cl'" 
                  onChangeText={ text => mailHandler(text)} 
                  autoCapitalize="none" 
                />
                <Text style={styles.tag}>Contraseña:</Text>
                <TextInput style={styles.areaInput} 
                  onChangeText={ text => passwordHandler(text)} 
                  secureTextEntry={true} 
                  autoCapitalize="none"
                />
              </View>
            </View>
          <View style={styles.buttonContainer}>
            <View style={styles.confirmButton}><Button title="Ingresar" color={color.white} onPress={signInButtonHandler} /></View>
            <View style={styles.cancelButton}><Button title="Registrar" color={color.white} onPress={() => props.navigation.navigate('SignUp')}/></View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
}



export default SignInScreen