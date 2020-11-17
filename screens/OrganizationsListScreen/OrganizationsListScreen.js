import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import MenuButton from '../../components/LandingScreen/MenuButton';
import styles from '../../styles/OrganizationsListScreen/OrganizationsListScreen';
// import { SET_WORKSPACE } from '../../store/types';

const OrganizationList = (props) => {
  const dispatch = useDispatch();
  const { token, email } = useSelector((state) => state.authentication);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <MenuButton navigation={props.navigation}/>
      ),
    });
  }, [props.navigation]);

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>
          Platanus
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>
          Organización 2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {}}
      >
        <Text style={styles.buttonText}>
        Organización 2
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('New Organization')}
      >
        <Text>New Organization</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrganizationList;
