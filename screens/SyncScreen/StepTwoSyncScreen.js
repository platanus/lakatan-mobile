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

const StepTwoSyncScreen = ({ navigation, route }) => {
  const { stepOneData, syncData2 } = route.params;
  const [stepTwoData, setStepTwoData] = useState(() => syncData2.map((item, key) => {
    item.selected = true;
    item.key = key.toString();
    return item;
  }));
  const [count, setCount] = useState(syncData2.length);

  const itemOnPressHandler = (key) => {
    setStepTwoData((prevStepTwoData) => {
      const newStepTwoData = prevStepTwoData.map((item) => {
        if (item.key === key) {
          item.selected = !item.selected;
          return item;
        }
        return item;
      });
      return newStepTwoData;
    });
  };

  const countSelectedItemsHandler = () => {
    setCount(stepTwoData.filter((item) => (item.selected)).length);
  };

  const applyButtonHandler = () => {
    /* let stepOneSelectedData = stepOneData.filter((item) => item.selected);
    stepOneSelectedData = stepOneSelectedData.map((item) => {
      delete item.selected;
      delete item.key;
      return item;
    });

    let stepTwoSelectedData = stepTwoData.filter((item) => item.selected);
    stepTwoSelectedData = stepTwoSelectedData.map((item) => {
      delete item.selected;
      delete item.key;
      return item;
    }); */

    // dispatch (stepOneSelectedData, stepTwoSelectedData)

    console.log('¡Sincronización Completa!');
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerTitle: () => (<HeaderLogo name={route.params.name}/>),
      headerBackTitle: 'Back',
    });
  }, [navigation]);

  return (
    <View style={styles.mainContainer}>

      <View style={styles.stepView}>
        <Text style={styles.stepText}>
          Paso 2 de 2
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
          syncData={stepTwoData}
          itemOnPressHandler={itemOnPressHandler}
          countSelectedItemsHandler={countSelectedItemsHandler}
          step="two"
        />
      </View>

      <TouchableOpacity style={styles.reloadTouchable}>
        <Text style={styles.reloadText}>recargar</Text>
      </TouchableOpacity>

    </View>
  );
};

export default StepTwoSyncScreen;
