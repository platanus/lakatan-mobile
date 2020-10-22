/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import ItemList from '../../components/SyncScreen/ItemList';
import styles from '../../styles/SyncScreen/SyncScreen';

const StepTwoScreen = ({ route, navigation }) => {
  const { syncData2 } = route.params;
  const [data, setData] = useState(syncData2);
  const [count, setCount] = useState(syncData2.length);

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

  return (
    <View style={styles.mainContainer}>

      <View style={styles.step}>
        <Text style={styles.textStep}>
          Paso 2 de 2
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

      <TouchableOpacity style={styles.applyButton}>
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

export default StepTwoScreen;
