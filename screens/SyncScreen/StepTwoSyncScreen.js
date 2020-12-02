/* eslint-disable max-statements */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useLayoutEffect, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { END_SYNC_REQUEST, WORKSPACE_CHANGES_REQUEST, ALL_TEAMS_REQUEST, CLEAR_WORKSPACE } from '../../store/types';
import SyncItemList from '../../components/SyncScreen/SyncItemList';
import styles from '../../styles/SyncScreen/SyncScreen';
import HeaderLogo from '../../components/IntegrationScreen/HeaderLogo';
import BackButton from '../../components/LandingScreen/BackButton';

const StepTwoSyncScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { token, email } = useSelector(state => state.authentication);
  const { success, workspace } = useSelector(state => state.sync);
  const { id } = useSelector((state) => state.organizations.currentOrganization);
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
        payload: { token, email, id, changes: [...stepOneSelectedData, ...stepTwoSelectedData] } });
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
    dispatch({ type: WORKSPACE_CHANGES_REQUEST, payload: { token, email, id } });
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <BackButton navigation={navigation}/>
      ),
      headerTitle: () => (
        <HeaderLogo name={route.params.name} />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (success) {
      Alert.alert(
        '¡Sincronización Completa!', '', [{ text: 'OK', onPress: () => {
          dispatch({ type: ALL_TEAMS_REQUEST, payload: { token, email, id } });
          dispatch({ type: CLEAR_WORKSPACE });
          navigation.navigate('Integration');
        } }],
        { cancelable: false },
      );
    }
  }, [dispatch, email, navigation, success, token]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.descriptionView}>
        <Text style={styles.descriptionText}>
          Configurado con workspace
        </Text>
        <Text style={styles.workspaceText}>
          {workspace}
        </Text>
      </View>

      <View style={styles.stepView}>
        <Text style={styles.stepText}>
          Paso 2
        </Text>
      </View>

      <TouchableOpacity
        style={styles.applyTouchable}
        onPress={applyButtonHandler}
      >
        <Text style={styles.applyText}>
          Aplicar
          {' '}
          {count}
        </Text>
      </TouchableOpacity>

      <View style={styles.footContainer}>
        <TouchableOpacity
          style={styles.footTouchable}
          onPress={stepTwoAllTouchable}>
          <Text style={styles.footText}>
            Todos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footTouchable}
          onPress={stepTwoNoneTouchable}>
          <Text style={styles.footText}>
            Ninguno
          </Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.footTouchable}
          onPress={stepTwoReloadButtonHandler}
        >
          <Text style={styles.footText}>
            recargar
          </Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.syncItemListContainer}>
        {(stepTwoData.length > 0 && <SyncItemList
          syncData={stepTwoData}
          itemOnPressHandler={itemOnPressHandler}
          countSelectedItemsHandler={countSelectedItemsHandler}
          step="two"
        /> || <Text>
         No hay cambios de membresías
        </Text>)}
      </View>

    </View>
  );
};

export default StepTwoSyncScreen;
