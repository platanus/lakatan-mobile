import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';

import styles from '../../styles/IntegrationScreen/IntegrationScreen';

const NewWorkspaceButton = ({ navigation, name }) => {
  const pressHandler = () => {
    navigation.navigate('New Workspace', { name });
  };

  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.gearButton}>
        <Octicons name="gear" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

export default NewWorkspaceButton;
