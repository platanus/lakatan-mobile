import React from 'react';
import { View, Image } from 'react-native';

const LogoutLogo = () => (
  <View>
    <Image source={require('../../assets/logout.png')} style={{ height: 25, width: 25 }}/>
  </View>
);

export default LogoutLogo;
