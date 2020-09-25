import React from 'react'
import { View, Text, StyleSheet, Image, Button } from 'react-native'





const SplashScreen = props => {

    return (
        <View style={styles.container} >
            <Image style={styles.logo} source={require('../../assets/platanus/logoPlatanus.png')} />
            <Text style={styles.platanusTitle} >Platanus</Text>
            <Button style={styles.lakatamTitle} title='Lakatan' onPress={() => props.navigation.navigate('SignIn')}/>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3170F5',

  
    },

    logo: {
        resizeMode: 'stretch',
        height: 100,
        width: 100
    },
    
    platanusTitle: {
        fontSize: 20,
        color: 'white'
        
    },

    lakatamTitle:{
        fontSize: 40,
        fontStyle: 'italic',
        color: 'white'
    },

    button: {
        backgroundColor: '#FAC537',
        borderColor: 'white',
        borderRadius: 10,
        marginTop: 30,
    }
    
})


export default SplashScreen