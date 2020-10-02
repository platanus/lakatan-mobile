import React from 'react';
import {
  View, Text, Image, Button, TouchableOpacity,
} from 'react-native';

import styles from '../../styles/SplashScreen/SplashScreen';

const SplashScreen = (props) => (
  <View style={styles.container}>
    <Image style={styles.logo} source={require('../../assets/platanus/logoPlatanus.png')} />
    <Text style={styles.platanusTitle}>Platanus</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.signInButton} onPress={() => props.navigation.navigate('SignIn')}>
        <Text style={styles.textButton}>Lakatan</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default SplashScreen;
