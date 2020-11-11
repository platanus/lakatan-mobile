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
import { GET_SLACK_ENTITIES_REQUEST, SET_HOOK_REQUEST } from '../../store/types';

const NewHookScreen = (props) => {
  const { taskId } = props.route.params;
  const [hookName, setHookName] = useState('');
  const [hookOf, setHookOf] = useState('output');
  const [hookType, setHookType] = useState('Webhook');
  const [reference, setReference] = useState('');
  const [hookUrl, setHookUrl] = useState('');
  const { email, token } = useSelector(store => store.authentication);
  const { slackEntities } = useSelector(store => store.hooks);
  const dispatch = useDispatch();

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
    setHookType(item);
  };

  const slackReferenceHandler = (item) => {
    setReference(item);
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
  // const createHookButtonDisable = () => (
  //   { ...styles.confirmButton, backgroundColor: hookName ? colors.blue : colors.gray });

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      dispatch({ type: GET_SLACK_ENTITIES_REQUEST, payload: { email, token } });
    });
  }, [dispatch, props.navigation, email, token]);

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
          <Text style={styles.textHeader}>Tipo 2</Text>
          <View style={styles.pickerContainer}>
            <RNPickerSelect
              value={hookType}
              onValueChange={hookTypeHandler}
              placeholder={{}}
              items={hookOf === 'output' ? [
                { label: 'Webhook', value: 'Webhook', key: 'Webhook' },
                { label: 'Slack', value: 'SlackHook', key: 'SlackHook' },
              ] : [
                { label: 'Webhook', value: 'Webhook', key: 'Webhook' },
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
                placeholder={{}}
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
                } }
              />
              <Icon name="angle-down" style={styles.icon} size={22} color={colors.darkBlue} />
            </View></>)}

          {(hookType === 'Webhook' && hookOf === 'output') && (<><Text style={styles.textHeader}>Link</Text>
            <View style={styles.httpAreaInput}>
              <Text>https:// </Text>
              <TextInput style={{ width: '100%' }}
                value={hookUrl} onChangeText={setHookUrl}
                placeholder="Ingresar url"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View></>)}

          <Text style={styles.textHeader}>Nombre</Text>
          <TextInput
            style={styles.areaInput}
            value={hookName} onChangeText={setHookName}
            placeholder="Ingresar nombre"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={styles.instructionContainer}>
            <Text style={styles.instructionText}>Acá tienen que ir los campos necesarios según el tipo de hook, por ejemplo:</Text>
            <Text style={styles.instructionText}>para un hook de entrada webhook, definir el endpoint después del dominio</Text>
            <Text style={styles.instructionText}>para un hook de salida slack, debiera poder asignarse un canal o una persona y el mensaje</Text>
            <Text style={styles.instructionText}>para un hook de salida webhook debiera poder ingresarse la URL</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.createButtonContainer}>
            <TouchableOpacity
              onPress={() => createHookHandler()}

              style={styles.applyButton} disabled={false}>
              <Text style={styles.textConfirmButton}>crear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewHookScreen;
