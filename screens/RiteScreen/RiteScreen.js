import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import MultiSelect from 'react-native-multiple-select';
import { CREATE_RAFFLE_REQUEST } from '../../store/types';

import Raffle from '../../components/TeamScreen/Raffle';
import styles from '../../styles/RiteScreen/RiteScreen';

import { hooksDataIn, hooksDataOut } from './HooksData';
import ItemList from '../../components/RiteScreen/ItemList';
import color from '../../styles/colors';

const RiteScreen = ({
  navigation, route: {
    params: {
      name, userMinimum, goal, members, taskId,
    },
  },
}) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [raffleButton, setRaffleButton] = useState(false);
  const [dataIn, setDataIn] = useState(hooksDataIn)
  const [dataOut, setDataOut] = useState(hooksDataOut)

  const { email, token } = useSelector((store) => store.authentication);

  const dispatch = useDispatch();
  const availableMembers = [];
  members.forEach((member) => availableMembers.push({ id: member.id.toString(), name: member.name }));

  const raffleHandler = () => {
    dispatch({
      type: CREATE_RAFFLE_REQUEST,
      payload: {
        selectedItems, taskId, email, token,
      },
    });
    setModalVisible(true);
  };

  const selectedHandler = (selected) => {
    setSelectedItems(selected);
    setRaffleButton(userMinimum <= selected.length);
  };

  const raffleRoute = () => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.subScreenContainer}>
        <View style={styles.subScreen}>
          <View>
            <Text style={styles.hookHeader}>Personas</Text>
            <Text style={styles.textInfo}>Este objetivo necesita {userMinimum} persona(s)</Text>
          </View>

          <View>
            <Text style={styles.hookHeader}>Sortear</Text>
            <MultiSelect
              items={availableMembers}
              uniqueKey="id"
              alwaysShowSelectText
              onSelectedItemsChange={selectedHandler}
              selectedItems={selectedItems}
              colors={{ primary: color.blue, success: color.blue, text: color.black }}
              confirmText="Confirmar"
              selectText="Elige usuarios"
              searchInputPlaceholderText="Elige un usuario a agregar..."
              tagRemoveIconColor={color.softGray}
              tagBorderColor={color.softGray}
              tagTextColor={color.black}
              selectedItemTextColor={color.blue}
              selectedItemIconColor={color.softGray}
              itemTextColor={color.black}
              displayKey="name"
              searchInputStyle={{ color: color.softGray }}
              submitButtonColor={color.blue}
              submitButtonText="Ok"
              button="40"
            />
          </View>

          {raffleButton ? (
            <View style={styles.buttonContainer}>
              <View style={styles.newHookContainer}>
                <TouchableOpacity style={styles.applyButton} onPress={raffleHandler}>
                  <Text style={styles.textRaffleButton}>Sortear</Text>
                </TouchableOpacity>
                {isModalVisible &&
                  <Raffle
                    visible={isModalVisible}
                    setVisible={setModalVisible}
                    users={members.filter((member) => selectedItems.includes(member.id))}
                    navigation={navigation}
                  />}
              </View>
            </View>
          ) : (
            <View>
              <TouchableOpacity disabled style={styles.disabledRaffleButton}>
                <Text style={styles.textRaffleButton}>Sortear</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );

  const hooksRoute = (props) => (
    <View style={styles.subScreenContainer}>
      <View style={styles.subScreen}>
        <View style={styles.listHooksContainer}>
          <Text style={styles.hookHeader}>Entrada</Text>
          <ItemList
            data={dataIn}
          />
        </View>
        <View style={styles.listHooksContainer}>
          <Text style={styles.hookHeader}>Salida</Text>
          <ItemList
            data={dataOut}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.newHookContainer}>
            <TouchableOpacity style={styles.applyButton}>
              <Text style={styles.textApplyButton} onPress={() => ''}>
                nuevo hook
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  const initialLayout = {};

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'sortear' },
    { key: 'second', title: 'hooks' },
  ]);

  const renderScene = SceneMap({
    first: raffleRoute,
    second: hooksRoute,
  });

  const renderTabBar = (tabProps) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.screen}>
          <Text style={styles.riteTitle}>{name}</Text>
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
    </TouchableWithoutFeedback>
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
  // return (
  //   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  //     <View style={styles.container}>
  //       <View style={styles.screen}>
  //         <Text style={styles.riteTitle}>{name}</Text>
  //         <View>
  //           <Text style={styles.textHeader}>Objetivo</Text>
  //           <Text>{goal}</Text>
  //           <Text style={styles.textHeader}>Cantidad de personas</Text>
  //           <Text style={styles.textInfo}>{userMinimum}</Text>
  //         </View>
  //         <View>
  //           <Text style={styles.textHeader}>Sortear</Text>
  //           <MultiSelect
  //             items={availableMembers}
  //             uniqueKey="id"
  //             alwaysShowSelectText
  //             onSelectedItemsChange={selectedHandler}
  //             selectedItems={selectedItems}
  //             colors={{ primary: color.blue, success: color.blue, text: color.black }}
  //             confirmText="Confirmar"
  //             selectText="Elige usuarios"
  //             searchInputPlaceholderText="Elige un usuario a agregar..."
  //             tagRemoveIconColor={color.softGray}
  //             tagBorderColor={color.softGray}
  //             tagTextColor={color.black}
  //             selectedItemTextColor={color.blue}
  //             selectedItemIconColor={color.softGray}
  //             itemTextColor={color.black}
  //             displayKey="name"
  //             searchInputStyle={{ color: color.softGray }}
  //             submitButtonColor={color.blue}
  //             submitButtonText="Ok"
  //             button="40"
  //           />
  //         </View>
  //       </View>
  //       {raffleButton ? (
  //         <View>
  //           <TouchableOpacity style={styles.raffleButton} onPress={raffleHandler}>
  //             <Text style={styles.textRaffleButton}>Sortear</Text>
  //           </TouchableOpacity>
  //           {isModalVisible &&
  //           <Raffle
  //             visible={isModalVisible}
  //             setVisible={setModalVisible}
  //             users={members.filter((member) => selectedItems.includes(member.id))}
  //             navigation={navigation}
  //           />}
  //         </View>
  //       ) : (
  //         <View style={styles.raffleButtonContainer}>
  //           <TouchableOpacity disabled style={styles.disabledRaffleButton}>
  //             <Text style={styles.textRaffleButton}>Sortear</Text>
  //           </TouchableOpacity>
  //         </View>
  //       )}
  //     </View>
  //   </TouchableWithoutFeedback>
  // );
};

export default RiteScreen;
