import React from 'react'
import { View, Text, Image, Button } from 'react-native'

import styles from '../../styles/SplashScreen/SplashScreen';

const SplashScreen = props => {

    return (
        <View style={styles.container} >
            <Image style={styles.logo} source={require('../../assets/platanus/logoPlatanus.png')} />
            <Text style={styles.platanusTitle} >Platanus</Text>
            <Button style={styles.lakatamTitle} title='Lakatan' onPress={() => props.navigation.navigate('SignIn')}/>
            
        </View>
    )
}

export default SplashScreen
