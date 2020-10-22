/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import ItemList from '../../components/IntegrationScreen/ItemList';
import styles from '../../styles/IntegrationScreen/IntegrationScreen';
import dataIntegration from './DataIntegration';

const IntegrationScreen = ({ navigation }) => {
  const [data, setData] = useState(dataIntegration);

  return (
    <View>
      <View style={styles.mainContainer}>
        <ItemList
          data={data}
        />

      </View>
      <TouchableOpacity onPress={() => navigation.navigate('TokenIntegrations')}>
        <Text>Token</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IntegrationScreen;
