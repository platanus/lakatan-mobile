import React from 'react';
import { View, Image } from 'react-native';

const OrganizationLogo = () => (
  <View>
    <Image source={require('../../assets/organization.png')} style={{ height: 25, width: 22 }}/>
  </View>
);

export default OrganizationLogo;
