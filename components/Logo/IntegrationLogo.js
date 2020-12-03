import React from 'react';
import { View, Image } from 'react-native';

const IntegrationLogo = () => (
  <View>
    <Image source={require('../../assets/integration.png')} style={{ height: 25, width: 22 }}/>
  </View>
);

export default IntegrationLogo;
