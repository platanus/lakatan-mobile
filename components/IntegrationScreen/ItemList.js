/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  View, Text, FlatList, TouchableOpacity, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors';
import styles from '../../styles/IntegrationScreen/IntegrationScreen';

const ItemList = ({ data }) => (
  <View style={styles.itemsListContainer}>
    <FlatList
      data={data}
      style={styles.listItems}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {} }
          style={styles.itemButton}
          key={item.key}
        >
          <View style={styles.textContainer}>
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={require('../../assets/slack_logo.png')}
            />
            <Text style={styles.itemText}>
              {item.title}
              <Icon name="angle-right" size={30} color={colors.gray} />
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  </View>
);

export default ItemList;
