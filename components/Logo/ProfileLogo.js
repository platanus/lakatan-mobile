import React from 'react';
import { View, Image } from 'react-native';

const ProfileLogo = () => (
  <View>
    <Image source={require('../../assets/profile.png')} style={{ height: 25, width: 22 }}/>
  </View>
);

export default ProfileLogo;
