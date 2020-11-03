/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import itemStyles from '../../styles/SyncScreen/SyncItemList';
import { itemStyleSetter, actionTypeStyleSetter, actionNameStyleSetter } from './SyncItem-ActionStyleSetter';
import { actionTypeTextSetter, actionNameTextSetter } from './SyncItem-ActionTextSetter';

const SyncItemList = ({
  syncData, itemOnPressHandler, countSelectedItemsHandler, step,
}) => (
  <FlatList
    data={syncData}
    renderItem={({ item }) => (

      <TouchableOpacity
        onPress={() => {
          itemOnPressHandler(item.key);
          countSelectedItemsHandler();
        }}
        key={item.key}
        style={itemStyleSetter(item.selected, item.action)}
      >

        <View style={itemStyles.actionTextContainer}>

          <Text style={actionTypeStyleSetter(item.selected, item.action)}>
            {actionTypeTextSetter(step, item)}
          </Text>

          <Text style={{
            ...actionNameStyleSetter(item.selected, item.action),
            fontSize: step === 'two' ? 12 : 14,
          }}
          >
            {actionNameTextSetter(step, item)}
          </Text>

        </View>

        {item.selected && (
          <Icon
            name="check"
            size={15}
            color={item.action === 'Add' ? colors.darkBlue : colors.darkRed}
          />
        ) }

      </TouchableOpacity>

    )}
  />
);

export default SyncItemList;
