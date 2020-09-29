import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, TextInput, Button, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { SING_IN_REQUEST } from '../../store/types'
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../../styles/colors';
import styles from './styles';

const SignInScreen = props => {

    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [hiddenPassword, setHiddenPassword] = useState(true)
    
    const dispatch = useDispatch()

    const signInButtonHandler = () => {
      // aquí falta el control de email y contraseña
      // dispatch({ type: SING_IN_REQUEST, payload: { email, password }})
      props.navigation.navigate('Equipos') // más adelante esto n iría aquí
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
          <View style={styles.container}>
            <View style={styles.formCard}>
              <Text style={styles.title}>¡Bienvenido a Lakatan! </Text>
              <View style={styles.input}>
                <Text style={styles.tag}>Correo electrónico:</Text>
                <TextInput style={styles.areaInput} 
                  placeholder="Ej: 'baldana@uc.cl'" 
                  onChangeText={ text => setEmail(text)} 
                  autoCapitalize="none" 
                  value={email}
                />
                <Text style={styles.tag}>Contraseña:</Text>
                <View style={styles.passwordInput} >
                  <TextInput style={styles.areaInput} 
                    onChangeText={ text => setPassword(text)} 
                    secureTextEntry={hiddenPassword} 
                    autoCapitalize="none"
                    value={password}
                  />
                  <TouchableWithoutFeedback onPress={()=>setHiddenPassword(!hiddenPassword)} >
                    <Icon name={hiddenPassword ? 'eye-slash' : 'eye'} size={25} color={'grey'} style={{marginTop: 7}} />
                  </TouchableWithoutFeedback>  
                </View>
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