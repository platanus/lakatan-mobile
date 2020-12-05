/* eslint-disable max-statements */
import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard,
  TextInput } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import MultiSelect from 'react-native-multiple-select';

import RaffleUserList from './RaffleUserList';
import UsersListComponent from '../../components/UsersListComponent/UsersListComponent';

import { CREATE_RAFFLE_REQUEST, GET_SLACK_ENTITIES_REQUEST, GET_HOOKS_REQUEST } from '../../store/types';

import Raffle from '../../components/TeamScreen/Raffle';
import styles from '../../styles/RiteScreen/RiteScreen';

import ItemList from '../../components/RiteScreen/ItemList';
import BackButton from '../../components/LandingScreen/BackButton';
import color from '../../styles/colors';

// eslint-disable-next-line max-statements
const RiteScreen = ({
  navigation, route: {
    params: {
      name, userMinimum, goal, members, taskId,
    },
  },
}) => {
  const availableMembers = [];
  members.forEach((member) => availableMembers.push({
    id: member.id.toString(),
    name: member.name,
    picture: member.picture,
    selected: true }));
  const [selectedMembers, setSelectedMembers] = useState(availableMembers);
  const [selectedItems, setSelectedItems] = useState(() => availableMembers.map((item) =>
    item.id,
  ));
  const [isModalVisible, setModalVisible] = useState(false);
  const [raffleButton, setRaffleButton] = useState(userMinimum <= availableMembers.length);
  // const [dataIn, setDataIn] = useState(hooksDataIn);
  // const [dataOut, setDataOut] = useState(hooksDataOut);
  const [searchWord, setSearchWord] = useState('');
  const { email, token } = useSelector((store) => store.authentication);
  const organizationId = useSelector((store) => store.organizations.currentOrganization.id);

  const { inHooks, outHooks, slackEntities } = useSelector((state) => state.hooks);
  const outHooksName = [];
  outHooks.forEach((hook) => {
    let slackReference = hook.attributes.slackReference;
    if (hook.attributes.type === 'SlackHook') {
      for (let i = 0; i < slackEntities.length; i++) {
        if (slackEntities[i].slack_id === hook.attributes.slackReference) {
          slackReference = 'purpose' in slackEntities[i] ? `#${slackEntities[i].name}` : slackEntities[i].name;
        }
      }
    }
    outHooksName.push({
      id: hook.id,
      attributes: {
        type: hook.attributes.type,
        name: hook.attributes.name,
        url: hook.attributes.url,
        slackReference,
      },
    });
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <BackButton navigation={navigation}/>
      ),
      headerTitle: () => (
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
        </View>
      ),
    });
  }, [name]);

  const dispatch = useDispatch();

  const raffleHandler = () => {
    dispatch({
      type: CREATE_RAFFLE_REQUEST,
      payload: {
        selectedItems, taskId, email, token,
      },
    });
    setModalVisible(true);
  };

  const itemOnPressHandler = (id) => {
    setSelectedMembers((prevData) => {
      const newData = prevData.map((item) => {
        if (item.id === id) {
          item.selected = !item.selected;

          return item;
        }

        return item;
      });

      return newData;
    });
  };

  useEffect(() => {
    const list = [];
    selectedMembers.forEach((item) => {
      if (item.selected) {
        list.push(item.id);
      }
    });
    setSelectedItems(list);
    setRaffleButton(userMinimum <= list.length);
  }, [selectedMembers, userMinimum]);

  // const selectedHandler = () => {
  //   setRaffleButton(userMinimum <= selected.length);
  // };

  useEffect(() => {
    navigation.addListener('focus', () => {
      dispatch({ type: GET_HOOKS_REQUEST, payload: { token, email, taskId } });
      dispatch({ type: GET_SLACK_ENTITIES_REQUEST, payload: { email, token, organizationId } });
    });
  }, [dispatch, navigation, email, token, taskId]);

  const raffleRoute = () => (
    <View style={styles.subScreenContainer}>
      <View style={styles.subScreen}>
        <View>
          <Text style={styles.hookHeader}>Personas</Text>
          <Text style={styles.textInfo}>Este objetivo necesita {userMinimum} persona(s)</Text>
        </View>

        <View style={styles.raffleUserList}>
          <Text style={styles.hookHeader}>Sorteo</Text>
          <UsersListComponent
            selectedMembers={selectedMembers}
            itemOnPressHandler={itemOnPressHandler}
          />
          {/* <RaffleUserList
              selectedMembers={selectedMembers}
              itemOnPressHandler={itemOnPressHandler}
              searchWord={searchWord} /> */}
        </View>

        {raffleButton ? (
          <View style={styles.buttonContainer}>
            <View style={styles.newHookContainer}>
              <TouchableOpacity style={styles.applyButton} onPress={raffleHandler}>
                <Text style={styles.textRaffleButton}>Sortear</Text>
              </TouchableOpacity>
              <Raffle
                visible={isModalVisible}
                setVisible={setModalVisible}
                users={members.filter((member) => selectedItems.includes(member.id))}
                navigation={navigation}
              />
            </View>
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <View style={styles.newHookContainer}>
              <TouchableOpacity disabled style={styles.disabledRaffleButton}>
                <Text style={styles.textRaffleButton}>Sortear</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );

  const hooksRoute = (props) => (
    <View style={styles.subScreenContainer}>
      <View style={styles.subScreen}>
        <View style={{ flex: 1 }}>
          <View style={styles.listHooksContainerInput}>
            <Text style={styles.hookHeader}>Entrada</Text>
            { inHooks.length > 0 ?
              (<ItemList
                data={inHooks}
                navigation={navigation}
                hookOf={'Entrada'}
              />) :
              (<View style={{ height: 60 }}>
              </View>)
            }
          </View>
          <View style={styles.listHooksContainerOutput}>
            <Text style={styles.hookHeader}>Salida</Text>

            { outHooks.length > 0 ? (<ItemList
              data={outHooksName}
              navigation={navigation}
              hookOf={'Salida'}
            />) : (
              <View style={{ height: 60 }}>
              </View>)}
          </View>
        </View>

          <View style={styles.buttonContainer}>
            <View style={styles.newHookContainer}>
              <TouchableOpacity
                style={styles.applyButton}
                onPress={() => navigation.navigate('New Hook', { taskId })}>
                <Text style={styles.textApplyButton}>
                Nuevo hook
                </Text>
              </TouchableOpacity>
            </View>
          </View>
   
      </View>
    </View>
  );

  const initialLayout = {};

  const [index, setIndex] = useState(0);
  const routes = [
    { key: 'first', title: 'Sortear' },
    { key: 'second', title: 'Hooks' },
  ];

  // const renderScene = SceneMap({
  //   first: raffleRoute,
  //   second: hooksRoute,
  // });

  const renderScene =

  ({ route, jumpTo }) => {
    switch (route.key) {
    case 'first':
      return raffleRoute();
    case 'second':
      return hooksRoute();
    }
  };

  const renderTabBar = (tabProps) => (

    <View style={styles.container}>
      <View style={styles.screen}>
        <View>
          <Text style={styles.textSharedHeader}>Objetivo</Text>
          <Text>{goal}</Text>
        </View>
      </View>
      <View>
        <TabBar
          {...tabProps}
          indicatorStyle={{ backgroundColor: color.darkBlue }}
          style={{ backgroundColor: color.white }}
          getLabelText={({ route }) => route.title}
          labelStyle={{ fontSize: 16, color: color.darkBlue }}
        />
      </View>
    </View>

  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default RiteScreen;
