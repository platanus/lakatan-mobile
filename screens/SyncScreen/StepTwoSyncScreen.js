/* eslint-disable max-statements */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { USERS_REQUEST } from '../../store/types';
import SyncItemList from '../../components/SyncScreen/SyncItemList';
import stylesHeader from '../../styles/IntegrationScreen/IntegrationScreen';
import styles from '../../styles/SyncScreen/SyncScreen';

const StepTwoSyncScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { token, email } = useSelector(state => state.authentication);
  const { stepOneData, stepTwoDataToShow } = route.params;
  const [stepTwoData, setStepTwoData] = useState(() => stepTwoDataToShow.map((item, key) => {
    item.selected = true;
    item.key = key.toString();

    return item;
  }));
  const [count, setCount] = useState(stepTwoDataToShow.length);

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

  const stepTwoReloadButtonHandler = () => {
    navigation.goBack();
  };

  const name = 'Slack'; // This will change with correct integration.
  const img = {
    'Slack': require('../../assets/Slack/logoSlack.png'),
    'Google': require('../../assets/Google/google_logo_2.png'),
    'Notion': require('../../assets/Notion/logoNotion.png'),
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerTitle: () => (
        <View style={stylesHeader.header}>
          <Image style={stylesHeader.logo} source={img[name]} />
          <Text style={stylesHeader.title}>{name}</Text>
        </View>
      ),
      headerBackTitle: 'Volver',
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

      <TouchableOpacity
        style={styles.reloadTouchable}
        onPress={stepTwoReloadButtonHandler}
      >
        <Text style={styles.reloadText}>recargar</Text>
      </TouchableOpacity>

    </View>
  );
};

export default StepTwoSyncScreen;
