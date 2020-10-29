/* eslint-disable react/jsx-filename-extension */
import React, { useState, useLayoutEffect, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useSelector } from 'react-redux';

import HeaderLogo from '../../components/IntegrationScreen/HeaderLogo';
import SyncItemList from '../../components/SyncScreen/SyncItemList';
import styles from '../../styles/SyncScreen/SyncScreen';

const StepOneSyncScreen = ({ navigation, route }) => {
  const stepOneChanges = useSelector((state) => state.sync.step1changes);
  const [stepOneData, setStepOneData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (stepOneChanges.length > 0) {
      setStepOneData(stepOneChanges.map((item, key) => {
        item.selected = true;
        item.key = key.toString();

        return item;
      }));
      setCount(stepOneChanges.length);
    }
  }, [stepOneChanges]);
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
    navigation.navigate('Step Two Sync', { stepOneData, name });
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
