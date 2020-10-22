/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import ItemList from '../../components/SyncScreen/ItemList';
import styles from '../../styles/SyncScreen/SyncScreen';
import { syncData1, syncData2 } from './SyncData';

const StepOneScreen = ({ navigation }) => {
  const [data, setData] = useState(syncData1);
  const [count, setCount] = useState(syncData1.length);

  const itemOnPressHandler = (key) => {
    setData((prevData) => {
      const newData = prevData.map((item) => {
        if (item.key === key) {
          item.selected = !item.selected;
          return item;
        }
        return item;
      });
      return newData;
    });
  };

  const countSelectedItemsHandler = () => {
    const newCount = data.filter((item) => (item.selected)).length;
    setCount(newCount);
  };

  const applyButtonHandler = () => {
    const newData = data.filter((item) => item.selected);
    const newSyncData2 = syncData2.filter((item) => {
      if (item.description.includes('Diego pertenece a Platanus')) {
        if (newData.filter((item2) => {
          if (item2.description.includes('Diego') || item2.description.includes('Platanus')) return item2;
        }).length > 1) return item;
      } else if (item.description.includes('Diego pertenece a Backend')) {
        if (newData.filter((item2) => {
          if (item2.description.includes('Diego')) return item2;
        }).length > 0) return item;
      } else if (item.description.includes('Andres pertenece a Platanus')) {
        if (newData.filter((item2) => {
          if (item2.description.includes('Andrés') || item2.description.includes('Platanus')) return item2;
        }).length > 1) return item;
      } else if (item.description.includes('Javier pertenece a Platanus')) {
        if (newData.filter((item2) => {
          if (item2.description.includes('Platanus')) return item2;
        }).length > 0) return item;
      } else {
        return item;
      }
    });
    navigation.navigate('StepTwo', { syncData2: newSyncData2 });
  };

  return (
    <View style={styles.mainContainer}>

      <View style={styles.step}>
        <Text style={styles.textStep}>
          Paso 1 de 2
        </Text>
      </View>

      <View style={styles.description}>
        <Text style={styles.textDescription}>
          Configurado con workspace
        </Text>
        <Text style={styles.textWorkspace}>
          Palatanus
        </Text>
      </View>

      <TouchableOpacity
        style={styles.applyButton}
        onPress={applyButtonHandler}
      >
        <Text style={styles.textApplyButton}>
          aplicar
          {' '}
          {count}
        </Text>
      </TouchableOpacity>

      <ItemList
        data={data}
        itemOnPressHandler={itemOnPressHandler}
        countSelectedItemsHandler={countSelectedItemsHandler}
      />

      <TouchableOpacity style={styles.reloadButton}>
        <Text style={styles.textReloadButton}>recargar</Text>
      </TouchableOpacity>

    </View>
  );
};

export default StepOneScreen;
