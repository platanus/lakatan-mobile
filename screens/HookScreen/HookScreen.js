import React, { useEffect, useLayoutEffect } from 'react';
import {
  View, Text, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Clipboard, Alert, FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../../components/LandingScreen/BackButton';
import ZapierDetails from '../../components/HookScreen/ZapierDetails'
import WebhookSlack from '../../components/HookScreen/WebhookSlack';
import styles from '../../styles/HookScreen/HookScreen';
import { GET_RITE_INFO_REQUEST } from '../../store/types';

const HookScreen = (props) => {
  const { hookOf, name, description, hookType, id } = props.route.params;
  const { email, token } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    props.navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <BackButton navigation={props.navigation}/>
      ),
      headerTitle: () => (
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
        </View>
      ),
    });
  }, [props.navigation]);

  useEffect(() => {
    if (hookType === 'ZapierActionHook') {
      dispatch({ type: GET_RITE_INFO_REQUEST, payload: { id, email, token } });
    }
  });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.textHeader}>Hook de</Text>
          <Text>{hookOf}</Text>
          <Text style={styles.textHeader}>Tipo</Text>
          <Text>{hookType}</Text>
          {hookType.includes("Zapier") ? (
            <ZapierDetails hookType={hookType} />
          ) : (
            <WebhookSlack hookType={hookType} description={description} />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HookScreen;
