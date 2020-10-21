import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import styles from '../../styles/LandingScreen/LandingScreen';

const MenuButton = ({ navigation }) => {
  const pressHandler = () => {
    navigation.openDrawer();
  };

  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.menuButton}>
        <SimpleLineIcons name="menu" size={25} color="black"/>
      </View>
    </TouchableOpacity>
  );
};

export default MenuButton;
