/* eslint-disable max-statements */
import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import MenuButton from '../../components/LandingScreen/MenuButton';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/ProfileScreen/ProfileScreen';
import {
  REFRESH_PROFILE_REQUEST,
} from '../../store/types';

const Profile = (props) => {
  // const { id, name, mail } = props.route.params;
  const { token, email, name, imageProfile } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  //   useEffect(() => {
  //     const refresh = props.navigation.addListener('focus', () => {
  //       dispatch({ type: CURRENT_TEAM_REQUEST, payload: { token, email, id } });
  //     });
  //     return refresh;
  //   }, [props.navigation]);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <MenuButton navigation={props.navigation}/>
      ),
    });
  }, [props.navigation]);

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      dispatch({ type: REFRESH_PROFILE_REQUEST, payload: { token, email } });
    });
  }, [dispatch, props.navigation, email, token]);

  return (
    <View style={styles.buttonContainer}>
      <View>
        <Image
          style={styles.image}
          source={{ uri: imageProfile }}
        />
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email} >{email}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('EditPhoto')}
        ><Text style={styles.buttonText}>
          Cambiar foto de perfil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('EditName')}
        ><Text style={styles.buttonText}>
          Cambiar nombre
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default Profile;
