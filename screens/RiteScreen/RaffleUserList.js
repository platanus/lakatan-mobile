import React from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { View } from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/RiteScreen/RaffleUserList';
import color from '../../styles/colors';

const RaffleUserList = ({ selectedMembers, itemOnPressHandler, searchWord }) => (
  <FlatList
    data={selectedMembers}
    renderItem={({ item }) => {
      if (item.name.includes(searchWord)) {
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              itemOnPressHandler(item.id);
            }}
          >
            <View style={item.selected ? (styles.selectedItemContainer) : (styles.unselectedItemContainer)}>
              <Text style={item.selected ? (styles.selectedItemText) : (styles.unselectedItemText)}>
                {item.name}
              </Text>
              { item.selected && <Icon
                name="check"
                size={15}
                color={color.darkBlue}
              /> }

            </View>

          </TouchableOpacity>
        );
      }
    }}
  />
);

export default RaffleUserList;
