/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View, Text, FlatList, TouchableOpacity, Clipboard, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import styles from '../../styles/RiteScreen/RiteScreen';

const Item = ({ item }) => {
  let description = '';

  if (item.attributes.type === 'Webhook') {
    description = item.attributes.url;
  } else {
    description = item.attributes.slackReference;
  }

  return (
    <TouchableOpacity
      onPress={() => {
        Clipboard.setString(description);
        Alert.alert("Link copiado");
      }}
      style={styles.hookButton}
      key={item.id}
    >
      <View style={styles.textContainer}>
        <Text style={styles.titleHookText}>
          {item.attributes.name}
        </Text>

        <Text style={styles.descriptionHookText}>
          {description}
        </Text>
      </View>

      {item.selected && <Icon name="times" style={styles.icon} size={18} color={colors.gray} /> }
    </TouchableOpacity>
  );
};

const ItemList = ({ data }) => (
  <View style={styles.itemsListContainer}>
    <FlatList
      data={data}
      renderItem={({ item }) => (<Item item={item} />)}
    />
  </View>
);

export default ItemList;
