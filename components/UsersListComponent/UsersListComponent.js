import React from 'react';
import { Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { View } from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/UsersListComponent/UsersListComponent';
import color from '../../styles/colors';
import defaultImage from '../../assets/user.png';

const bucket = 'https://bucketeer-60eb4403-f79d-491b-9dd5-066f00fac05c.s3.amazonaws.com/';

const UsersListComponent = ({ selectedMembers, itemOnPressHandler }) =>

  (
    <FlatList
      data={selectedMembers}
      renderItem={({ item }) => (
        <TouchableOpacity
          key={item.id.toString()}
          disabled={ !itemOnPressHandler}
          onPress={() => (itemOnPressHandler(item.id))
          }
        >
          <View style={item.selected ? (styles.selectedItemContainer) : (styles.unselectedItemContainer)}>

            <View>
              <Image source={{
                uri: item.picture ? `${bucket}${item.picture.id}` :
                  Image.resolveAssetSource(defaultImage).uri }}
              style={styles.picture} />
            </View>

            <Text style={(item.selected || !item.hasOwnProperty('selected')) ?
              (styles.selectedItemText) : (styles.unselectedItemText)}>
              {item.name}
            </Text>

            { itemOnPressHandler && item.selected &&
            <View style={styles.check}>
              <Icon
                name="check"
                size={15}
                color={color.darkBlue}
              />
            </View> }

          </View>

        </TouchableOpacity>
      )
      }
    />
  )

;

export default UsersListComponent;
