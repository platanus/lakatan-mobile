import React, {useState,useEffect} from 'react'
import { View, Text, Button } from 'react-native'
import Modal from 'react-native-modal';
import Emoji from 'react-native-emoji';
import { bounceInUp, bounceInDown } from 'react-native-animatable';
import color from '../../styles/colors';
import styles from '../../styles/TeamScreen/TeamScreen'




const Sorteo = ({users, setVisible, visible, navigation}) => {
    const [userSelected, setUserSelected] = useState('');
    console.log(userSelected)
    useEffect ( () => { 
        const random = Math.floor(Math.random() * users.length);
        setUserSelected(users[random].name);
    }, [])

    const toggleModalOff = () => {
        setVisible(!visible);
    };

    const feedbackModal = () => {
        setVisible(!visible);
        navigation.navigate('Feedback');
    };
   

    return (
        <View>
            <Modal
            isVisible={visible}
            animationIn={bounceInUp}
            animationOut={bounceInDown}
            style={styles.modal}
            >
            <View style={styles.modalView}>
                <Text style={styles.modalMessage}>El usuario seleccionado es:</Text>
                <Text style={styles.modalUser}>{userSelected}</Text>
                <Emoji name=":tada:" style={styles.modalEmoji} />
                {/* <View style={styles.confirmButton}><Button title="¡Ayudanos con tu feedback!"  onPress={feedbackModal} /></View> */}
                <View style={styles.cancelButton}><Button title="Salir" color={color.gray} onPress={toggleModalOff} /></View>
            </View>
            </Modal>
        </View>
    )
}





export default Sorteo