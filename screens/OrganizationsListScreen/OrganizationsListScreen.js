import React, { useLayoutEffect, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import MenuButton from '../../components/LandingScreen/MenuButton';
import styles from '../../styles/OrganizationsListScreen/OrganizationsListScreen';
import {
  // CURRENT_ORGANIZATION_REQUEST,
  USER_ORGANIZATIONS_REQUEST,
} from '../../store/types';
import { FlatList } from 'react-native-gesture-handler';

const OrganizationView = (props) => {
  const { id, attributes: { name, picture } } = props.organization;

  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Teams')}
      style={styles.button}
    >
      <Text style={styles.buttonText}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const OrganizationList = (props) => {
  const dispatch = useDispatch();
  const { token, email } = useSelector((state) => state.authentication);
  const { organizationList } = useSelector((state) => state.organizations);
  useEffect(() => {
    dispatch({
      type: USER_ORGANIZATIONS_REQUEST,
      payload: { token, email },
    });
  });

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <MenuButton navigation={props.navigation}/>
      ),
    });
  }, [props.navigation]);

  return (
    <View style={styles.buttonContainer}>

      <View>
        <FlatList
          data={organizationList}
          renderItem={(organization) => <OrganizationView navigation={props.navigation} organization={organization} />}
          keyExtractor={(organization) => organization.id.toString()}
        />
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('New Organization')}
      >
        <Text>New Organization</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrganizationList;
