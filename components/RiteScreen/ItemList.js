/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import styles from '../../styles/RiteScreen/RiteScreen';

const ItemList = ({ data, itemOnPressHandler }) => (
  <View style={styles.itemsListContainer}>
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            // itemOnPressHandler(item.key); // TO DO
            '';
          }}
          style={styles.hookButton}
          key={item.key}
        >
          <View style={styles.textContainer}>
            <Text style={styles.titleHookText}>
              {item.title}
            </Text>

            <Text style={styles.descriptionHookText}>
              {item.description}
            </Text>
          </View>

          {item.selected && <Icon name="times" style={styles.icon} size={18} color={colors.gray} /> }
        </TouchableOpacity>
      )}
    />
  </View>
);

export default ItemList;
