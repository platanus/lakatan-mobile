import React from 'react';
import {
  View, Image,
} from 'react-native';

import styles from '../../styles/SplashScreen/SplashScreen';

const SplashScreen = () => (
  <View style={styles.container}>
    <Image style={styles.icon} source={require('../../assets/Lakatan/lakatanIcon.png')} />
    <Image style={styles.text} source={require('../../assets/Lakatan/lakatanText.png')} />
  </View>
);

export default SplashScreen;
