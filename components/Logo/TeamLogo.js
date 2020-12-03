import React from 'react';
import { View, Image } from 'react-native';

const TeamLogo = () => (
  <View>
    <Image source={require('../../assets/team.png')} style={{ height: 25, width: 22 }}/>
  </View>
);

export default TeamLogo;
