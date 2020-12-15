import React from 'react';
import { Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { View } from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../styles/UsersListComponent/UsersListComponent';
import color from '../../styles/colors';
import defaultImage from '../../assets/user.png';
import { BUCKETEER_BUCKET_NAME } from '../../env';

const http = 'https://';
const amaz = '.s3.amazonaws.com/';

       
const UsersListComponent = ({ selectedMembers, itemOnPressHandler, search, vote }) => (

  <FlatList
    data={selectedMembers}
    persistentScrollbar={true}
    renderItem={({ item }) => {
      if (!!search && !item.name.toLowerCase().includes(search.toLowerCase())) {
        return <></>;
      }

      return (
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

            {!vote &&  
            <View>
              <Image source={{
                uri: item.picture ? `${http}${BUCKETEER_BUCKET_NAME}${amaz}${item.picture.id}` :
                  Image.resolveAssetSource(defaultImage).uri }}
              style={styles.picture} />
            </View>
            }

            <View style={{ flex: 1 }}>
              <Text style={(item.selected || !item.hasOwnProperty('selected')) ?
                (styles.selectedItemText) : (styles.unselectedItemText)}>
                {vote ? (
              item.name
            ) : (
              item.name
            )}
              </Text>

              {item.labels &&
            <View style={styles.labelsView}>
              {item.labels.map((label, index) => {
                if (index === item.labels.length - 1) {
                  return <Text style={(item.selected || !item.hasOwnProperty('selected')) ?
                    (styles.selectedLabelsText) : (styles.unselectedLabelsText)} key={index}>{label}</Text>;
                }


                return <Text style={(item.selected || !item.hasOwnProperty('selected')) ?
                  (styles.selectedLabelsText) : (styles.unselectedLabelsText)} key={index}>{label}, </Text>;
              })}
            </View>}
            </View>

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
      );
    }
    }
    keyExtractor={item => item.id.toString()}
  />)

;

export default React.memo(UsersListComponent);
