import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/LandingScreen/LandingScreen';
import colors from '../../styles/colors';

const BackButton = ({ navigation }) => {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.backButton}>
        <Icon name="arrow-left" size={25} color={colors.black} />
      </View>
    </TouchableOpacity>
  );
};

export default BackButton;
