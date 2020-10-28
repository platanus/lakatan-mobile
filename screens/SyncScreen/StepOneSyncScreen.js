/* eslint-disable react/jsx-filename-extension */
import React, { useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import HeaderLogo from '../../components/IntegrationScreen/HeaderLogo';
import SyncItemList from '../../components/SyncScreen/SyncItemList';
import styles from '../../styles/SyncScreen/SyncScreen';
import { syncData1, syncData2 } from './SyncData';

const StepOneSyncScreen = ({ navigation, route }) => {
  const [stepOneData, setStepOneData] = useState(() => syncData1.map((item, key) => {
    item.selected = true;
    item.key = key.toString();

    return item;
  }));
  const [count, setCount] = useState(syncData1.length);
  const { name } = route.params;

  const itemOnPressHandler = (key) => {
    setStepOneData((prevStepOneData) => {
      const newStepOneData = prevStepOneData.map((item) => {
        if (item.key === key) {
          item.selected = !item.selected;

          return item;
        }

        return item;
      });

      return newStepOneData;
    });
  };

  const countSelectedItemsHandler = () => {
    setCount(stepOneData.filter((item) => (item.selected)).length);
  };

  const applyButtonHandler = () => {
    //  super-function
    navigation.navigate('Step Two Sync', { stepOneData, syncData2, name });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerTitle: () => (<HeaderLogo name={name}/>),
      headerBackTitle: 'Back',
    });
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>

      <View style={styles.stepView}>
        <Text style={styles.stepText}>
          Paso 1 de 2
        </Text>
      </View>

      <View style={styles.descriptionView}>
        <Text style={styles.descriptionText}>
          Configurado con workspace
        </Text>
        <Text style={styles.workspaceText}>
          Palatanus
        </Text>
      </View>

      <TouchableOpacity
        style={styles.applyTouchable}
        onPress={applyButtonHandler}
      >
        <Text style={styles.applyText}>
          aplicar
          {' '}
          {count}
        </Text>
      </TouchableOpacity>

      <View style={styles.syncItemListContainer}>
        <SyncItemList
          syncData={stepOneData}
          itemOnPressHandler={itemOnPressHandler}
          countSelectedItemsHandler={countSelectedItemsHandler}
          step="one"
        />
      </View>

      <TouchableOpacity style={styles.reloadTouchable}>
        <Text style={styles.reloadText}>recargar</Text>
      </TouchableOpacity>

    </View>
  );
};

export default StepOneSyncScreen;
