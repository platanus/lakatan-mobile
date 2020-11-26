import React, { useLayoutEffect, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import MenuButton from '../../components/LandingScreen/MenuButton';
import styles from '../../styles/OrganizationsListScreen/OrganizationsListScreen';
import {
  USER_ORGANIZATIONS_REQUEST,
  CHANGE_CURRENT_ORGANIZATION,
} from '../../store/types';
import { FlatList } from 'react-native-gesture-handler';

const OrganizationView = (props) => {
  const { id, attributes: { name, picture } } = props.organization.item;
  const dispatch = useDispatch();

  const pressHandler = () => {
    dispatch({ type: CHANGE_CURRENT_ORGANIZATION, payload: { name, picture, id } });
  };

  return (
    <TouchableOpacity
      onPress={pressHandler}
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
  const { token, email, id } = useSelector((state) => state.authentication);
  const { organizationsList, currentOrganization } = useSelector((state) => state.organizations);
  useEffect(() => {
    dispatch({
      type: USER_ORGANIZATIONS_REQUEST,
      payload: { token, email, user_id: id },
    });
  }, [props.navigation]);

  useEffect(() => {
    if (currentOrganization.id) {
      props.navigation.jumpTo('Equipos');
    }
  }, [currentOrganization]);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <MenuButton navigation={props.navigation}/>
      ),
    });
  }, [props.navigation]);

  return (
    <View style={styles.buttonContainer}>

      <View style={{ width: '100%' }}>
        <FlatList
          data={organizationsList}
          renderItem={(organization) => <OrganizationView organization={organization} />}
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
