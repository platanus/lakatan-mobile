/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import styles from '../../styles/SyncScreen/SyncScreen';

import SetItemColor, { textContainer } from './SetItemColor';

const ItemList = ({ data, itemOnPressHandler, countSelectedItemsHandler }) => (
  <View style={styles.itemsListContainer}>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            itemOnPressHandler(item.key);
            countSelectedItemsHandler();
          }}
          style={SetItemColor(item.title, 'item', item.selected)}
          key={item.key}
        >
          <View style={textContainer}>
            <Text style={SetItemColor(item.title, 'title', item.selected)}>
              {item.title}
            </Text>

            <Text style={SetItemColor(item.title, 'description', item.selected)}>
              {item.description}
            </Text>
          </View>

          {item.selected && <Icon name="check" size={15} color={colors.gray} /> }
        </TouchableOpacity>
      )}
    />
  </View>
);

export default ItemList;
