/* eslint-disable max-statements */
import React, { useState, useLayoutEffect, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { USERS_REQUEST, ALL_TEAMS_REQUEST, WORKSPACE_CHANGES_REQUEST } from '../../store/types';
import SyncItemList from '../../components/SyncScreen/SyncItemList';
import syncChangesHandler from './SyncChangesHandler';
import styles from '../../styles/SyncScreen/SyncScreen';
import stylesHeader from '../../styles/IntegrationScreen/IntegrationScreen';
import colors from '../../styles/colors';
// import { stepOneChanges, stepTwoChanges } from './SyncData';

const StepOneSyncScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { token, email } = useSelector(state => state.authentication);
  const { users } = useSelector(state => state.users);
  const { teamsList } = useSelector((state) => state.teams);
  const stepOneChanges = useSelector(state => state.sync.step1changes);
  const stepTwoChanges = useSelector(state => state.sync.step2changes);
  const { loading } = useSelector(state => state.sync);
  const [stepOneData, setStepOneData] = useState([]);
  const [count, setCount] = useState(0);

  const applyButtonHandler = () => {
    const stepTwoDataToShow = syncChangesHandler(stepOneData, stepTwoChanges, users, teamsList);
    navigation.navigate('Step Two Sync', { stepOneData, stepTwoDataToShow });
  };

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

  const stepOneAllTouchable = () => {
    setStepOneData((prevStepOneData) => {
      const newStepOneData = prevStepOneData.map((item) => {
        item.selected = true;

        return item;
      });

      return newStepOneData;
    });
    setCount(stepOneChanges.length);
  };

  const stepOneNoneTouchable = () => {
    setStepOneData((prevStepOneData) => {
      const newStepOneData = prevStepOneData.map((item) => {
        item.selected = false;

        return item;
      });

      return newStepOneData;
    });
    setCount(0);
  };

  const stepOneReloadButtonHandler = () => {
    dispatch({ type: WORKSPACE_CHANGES_REQUEST, payload: { token, email } });
  };

  useEffect(() => {
    dispatch({ type: USERS_REQUEST, payload: { token, email } });
    dispatch({ type: ALL_TEAMS_REQUEST, payload: { token, email } });
    // dispatch
  }, [dispatch, token, email]);

  useEffect(() => {
    setStepOneData(stepOneChanges.map((item, key) => {
      const element = { ...item };
      element.selected = true;
      element.key = key.toString();

      return element;
    }));

    setCount(stepOneChanges.length);
  }, [stepOneChanges, stepTwoChanges]);

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
        style={{ ...styles.applyTouchable, backgroundColor: loading ? colors.gray : colors.darkBlue }}
        onPress={applyButtonHandler}
        disabled={loading}
      >
        <Text style={styles.applyText}>
          aplicar
          {' '}
          {count}
        </Text>
      </TouchableOpacity>

      <View style={styles.syncItemListContainer}>
        { loading ?
          <ActivityIndicator size='large' style={{ flex: 1 }}/> :
          (stepOneData.length > 0 && <SyncItemList
            syncData={stepOneData}
            itemOnPressHandler={itemOnPressHandler}
            countSelectedItemsHandler={countSelectedItemsHandler}
            step="one"
          /> || <Text>
            No hay cambios para mostrar en el paso 1
          </Text>)
        }
      </View>

      <View style={styles.footContainer}>
        <TouchableOpacity
          style={styles.footTouchable}
          onPress={stepOneAllTouchable}>
          <Text style={styles.footText}>
            todos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footTouchable}
          onPress={stepOneNoneTouchable}>
          <Text style={styles.footText}>
            ninguno
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footTouchable}
          onPress={stepOneReloadButtonHandler}
        >
          <Text style={styles.footText}>
            recargar
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default StepOneSyncScreen;
