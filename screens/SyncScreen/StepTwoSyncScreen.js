/* eslint-disable max-statements */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useLayoutEffect, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { END_SYNC_REQUEST, WORKSPACE_CHANGES_REQUEST, ALL_TEAMS_REQUEST, CLEAR_WORKSPACE } from '../../store/types';
import SyncItemList from '../../components/SyncScreen/SyncItemList';
import stylesHeader from '../../styles/IntegrationScreen/IntegrationScreen';
import styles from '../../styles/SyncScreen/SyncScreen';

const StepTwoSyncScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { token, email } = useSelector(state => state.authentication);
  const { success } = useSelector(state => state.sync);
  const { stepOneData, stepTwoDataToShow } = route.params;
  const [stepTwoData, setStepTwoData] = useState(() => stepTwoDataToShow.map((item, key) => {
    const element = { ... item };
    element.selected = true;
    element.key = key.toString();

    return element;
  }));
  const [count, setCount] = useState(stepTwoDataToShow.length);

  const applyButtonHandler = () => {
    let stepOneSelectedData = stepOneData.filter((item) => item.selected);
    stepOneSelectedData = stepOneSelectedData.map((item) => {
      const auxItem = { ...item };
      delete auxItem.selected;
      delete auxItem.key;

      return auxItem;
    });
    let stepTwoSelectedData = stepTwoData.filter((item) => item.selected);
    stepTwoSelectedData = stepTwoSelectedData.map((item) => {
      const auxItem = { ...item };
      delete auxItem.selected;
      delete auxItem.key;

      return auxItem;
    });

    if (stepOneSelectedData.length > 0 || stepTwoSelectedData.length > 0) {
      dispatch({
        type: END_SYNC_REQUEST,
        payload: { token, email, changes: [...stepOneSelectedData, ...stepTwoSelectedData] } });
    } else {
      navigation.navigate('Integration');
    }
  };

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

  const stepTwoAllTouchable = () => {
    setStepTwoData((prevStepTwoData) => {
      const newStepTwoData = prevStepTwoData.map((item) => {
        item.selected = true;

        return item;
      });

      return newStepTwoData;
    });
    setCount(stepTwoData.length);
  };

  const stepTwoNoneTouchable = () => {
    setStepTwoData((prevStepTwoData) => {
      const newStepTwoData = prevStepTwoData.map((item) => {
        item.selected = false;

        return item;
      });

      return newStepTwoData;
    });
    setCount(0);
  };

  const stepTwoReloadButtonHandler = () => {
    dispatch({ type: WORKSPACE_CHANGES_REQUEST, payload: { token, email } });
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

  useEffect(() => {
    if (success) {
      Alert.alert(
        '¡Sincronización Completa!', '', [{ text: 'OK', onPress: () => {
          dispatch({ type: ALL_TEAMS_REQUEST, payload: { token, email } });
          dispatch({ type: CLEAR_WORKSPACE });
          navigation.navigate('Integration');
        } }],
        { cancelable: false },
      );
    }
  }, [dispatch, email, navigation, success, token]);

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
        {(stepTwoData.length > 0 && <SyncItemList
          syncData={stepTwoData}
          itemOnPressHandler={itemOnPressHandler}
          countSelectedItemsHandler={countSelectedItemsHandler}
          step="two"
        /> || <Text>
         No hay cambios para mostrar en el paso 2
        </Text>)}
      </View>

      <View style={styles.footContainer}>
        <TouchableOpacity
          style={styles.footTouchable}
          onPress={stepTwoAllTouchable}>
          <Text style={styles.footText}>
            todos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footTouchable}
          onPress={stepTwoNoneTouchable}>
          <Text style={styles.footText}>
            ninguno
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footTouchable}
          onPress={stepTwoReloadButtonHandler}
        >
          <Text style={styles.footText}>
            recargar
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default StepTwoSyncScreen;
