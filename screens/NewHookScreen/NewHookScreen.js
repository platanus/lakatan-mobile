/* eslint-disable max-statements */
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../../components/LandingScreen/BackButton';
import styles from '../../styles/NewHookScreen/NewHookScreen';
import colors from '../../styles/colors';
import url from '../../env';
import { GET_SLACK_ENTITIES_REQUEST, SET_HOOK_REQUEST, CLEAR_HOOK_SUCCESS } from '../../store/types';

const NewHookScreen = (props) => {
  const { taskId } = props.route.params;
  const [hookName, setHookName] = useState('');
  const [hookOf, setHookOf] = useState('input');
  const [hookType, setHookType] = useState('Webhook');
  const [reference, setReference] = useState('');
  const [hookUrl, setHookUrl] = useState('');
  const { email, token } = useSelector(store => store.authentication);
  const { slackEntities, success } = useSelector(store => store.hooks);
  const organizationId = useSelector((store) => store.organizations.currentOrganization.id);
  const dispatch = useDispatch();
  let disable = true;

  useLayoutEffect(() => {
    props.navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <BackButton navigation={props.navigation}/>
      ),
      headerTitle: () => (
        <View style={styles.header}>
          <Text style={styles.title}>Nuevo hook</Text>
        </View>
      ),
    });
  }, [props.navigation]);

  const hookOfHandler = (item) => {
    setHookOf(item);
  };

  const hookTypeHandler = (item) => {
    console.log(item)
    setHookType(item);
  };

  const slackReferenceHandler = (item) => {
    setReference(item);
  };

  const createButtonDisable = () => {

  };

  const createHookHandler = () => {
    let auxUrl;
    if (hookOf === 'input') {
      auxUrl = `${url}webhook/raffle_task/${taskId}`;
    } else if (hookUrl.includes('https://')) {
      auxUrl = hookUrl;
    } else {
      auxUrl = `https://${hookUrl}`;
    }

    dispatch({
      type: SET_HOOK_REQUEST,
      payload: { email, token, hookOf, hookType, hookName, hookUrl: auxUrl, taskId, reference } });
  };

  useEffect(() => {
    if (props.navigation.isFocused() && success) {
      dispatch({ type: CLEAR_HOOK_SUCCESS });
      props.navigation.goBack();
    }
  }, [dispatch, props.navigation, success]);

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      dispatch({ type: GET_SLACK_ENTITIES_REQUEST, payload: { email, token, organizationId } });
    });
  }, [dispatch, props.navigation, email, token]);

  if (hookOf === 'output') {
    if (hookType === 'Webhook') {
      if (hookUrl && hookName) {
        disable = false;
      }
    } else if (hookType === 'Slack') {
      if (reference && hookName) {
        disable = false;
      }
    } else {
      if (hookName) {
        disable = false;
      }
    }
  } else {
    if (hookName) {
      disable = false;
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.textHeader}>Hook de</Text>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              value={hookOf}
              onValueChange={hookOfHandler}
              placeholder={{}}
              items={[
                { label: 'Entrada', value: 'input', key: 'input' },
                { label: 'Salida', value: 'output', key: 'output' },
              ]}
              style={ {
                inputIOS: {
                  color: colors.black,
                  paddingTop: 13,
                  paddingHorizontal: 10,
                  paddingBottom: 12,
                },
                inputAndroid: {
                  color: colors.black,
                },
              } }
            />
            <Icon name="angle-down" style={styles.icon} size={22} color={colors.darkBlue} />
          </View>
          <Text style={styles.textHeader}>Tipo</Text>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              value={hookType}
              onValueChange={hookTypeHandler}
              placeholder={{}}
              items={hookOf === 'output' ? [
                { label: 'Webhook', value: 'Webhook', key: 'Webhook' },
                { label: 'Slack', value: 'SlackHook', key: 'SlackHook' },
                { label: 'Zapier', value: 'ZapierTriggerHook', key: 'ZapierTriggerHook' },
              ] : [
                { label: 'Webhook', value: 'Webhook', key: 'Webhook' },
                { label: 'Zapier', value: 'ZapierActionHook', key: 'ZapierActionHook' },
              ]}
              style={ {
                inputIOS: {
                  color: colors.black,
                  paddingTop: 13,
                  paddingHorizontal: 10,
                  paddingBottom: 12,
                },
                inputAndroid: {
                  color: colors.black,
                },
              } }
            />
            <Icon name="angle-down" style={styles.icon} size={22} color={colors.darkBlue} />
          </View>

          {(hookType === 'SlackHook' && hookOf === 'output') && (<><Text style={styles.textHeader}>Entidades</Text>
            <View style={styles.pickerContainer}>
              <RNPickerSelect
                value={reference}
                onValueChange={slackReferenceHandler}
                placeholder={{ label: 'Selecciona entidad', color: colors.black, value: null }}
                items={slackEntities.map((item) => {
                  if ('purpose' in item) {
                    return { label: `#${item.name}`, value: item.slack_id, key: item.slack_id };
                  }

                  return { label: item.name, value: item.slack_id, key: item.slack_id };
                })}
                style={ {
                  inputIOS: {
                    color: colors.black,
                    paddingTop: 13,
                    paddingHorizontal: 10,
                    paddingBottom: 12,
                  },
                  inputAndroid: {
                    color: colors.black,
                  },
                  placeholder: { color: colors.black },
                } }
              />
              <Icon name="angle-down" style={styles.icon} size={22} color={colors.darkBlue} />
            </View></>)}

          {(hookType === 'Webhook' && hookOf === 'output') && (<><Text style={styles.textHeader}>Link</Text>
            <View style={styles.httpAreaInput}>
              <Text>https://</Text>
              <TextInput style={{ width: '80%' }}
                value={hookUrl} onChangeText={setHookUrl}
                placeholder="example.com"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View></>)}

          <Text style={styles.textHeader}>Nombre</Text>
          <TextInput
            style={styles.areaInput}
            value={hookName} onChangeText={setHookName}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.createButtonContainer}>
            <TouchableOpacity
              onPress={() => createHookHandler()}
              disabled={disable}
              style={{ ...styles.applyButton,
                backgroundColor:
                (disable ?
                  colors.gray : colors.darkBlue),
              }} >
              <Text style={styles.textConfirmButton}>Crear hook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewHookScreen;
