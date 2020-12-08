import React from 'react';
import { Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { View } from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/UsersListComponent/UsersListComponent';
import color from '../../styles/colors';
import defaultImage from '../../assets/user.png';

const bucket = 'https://bucketeer-60eb4403-f79d-491b-9dd5-066f00fac05c.s3.amazonaws.com/';

const UsersListComponent = ({ selectedMembers, itemOnPressHandler, vote }) => (

  <FlatList
    data={selectedMembers}
    renderItem={({ item }) => (
      <TouchableOpacity
        key={item.id}
        disabled={ !itemOnPressHandler}
        onPress={() => (itemOnPressHandler(item.id))
        }
      >
        <View style={(item.selected || !item.hasOwnProperty('selected')) ?
          ({ ...styles.selectedItemContainer,
            height: vote ? 50 : 60,
            borderRadius: vote ? 40 : 20 }
          ) : (
            { ...styles.unselectedItemContainer, height: vote ? 50 : 60,
              borderRadius: vote ? 40 : 20 }
          )}>

          { !vote && <View>
            <Image source={{
              uri: item.picture ? `${bucket}${item.picture.id}` :
                Image.resolveAssetSource(defaultImage).uri }}
            style={styles.picture} />
          </View> }

          <Text style={(item.selected || !item.hasOwnProperty('selected')) ?
            (styles.selectedItemText) : (styles.unselectedItemText)}>
            {vote ? (
              item.option
            ) : (
              item.name
            )}
          </Text>

          { itemOnPressHandler && item.selected &&
            <View style={styles.check}>
              <Icon
                name="check"
                size={15}
                color={color.darkBlue}
              />
            </View> }
          { itemOnPressHandler && !item.selected &&
            <View style={styles.check}>
              <Icon
                name="times"
                size={15}
                color={color.darkGray}
              />
            </View> }

        </View>

      </TouchableOpacity>
    )
    }
    keyExtractor={item => item.id.toString()}
  />)

;

export default React.memo(UsersListComponent);
