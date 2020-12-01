import React, { useLayoutEffect, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, RefreshControl, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import MenuButton from '../../components/LandingScreen/MenuButton';
import styles from '../../styles/OrganizationsListScreen/OrganizationsListScreen';
import {
  USER_ORGANIZATIONS_REQUEST,
  CHANGE_CURRENT_ORGANIZATION,
} from '../../store/types';

const OrganizationView = (props) => {
  const { id, attributes: { name, picture } } = props.organization.item;
  const dispatch = useDispatch();

  const pressHandler = () => {
    dispatch({ type: CHANGE_CURRENT_ORGANIZATION, payload: { name, picture, id } });
  };

  return (
    <TouchableOpacity onPress={pressHandler}>
      <View style={styles.buttonTextContainer}>
        <Image source={require('../../assets/platanus/logoPlatanus.png')} style={styles.image} />
        <Text style={styles.buttonText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const OrganizationList = (props) => {
  const dispatch = useDispatch();
  const { token, email, id } = useSelector((state) => state.authentication);
  const { organizationsList, loading, currentOrganization } = useSelector((state) => state.organizations);

  const onRefresh = useCallback(() => {
    dispatch({ type: USER_ORGANIZATIONS_REQUEST, payload: { token, email, user_id: id } });
  });

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
      headerTitle: () => (
        <View style={styles.header}>
          <Text style={styles.title}>Organizaciones</Text>
        </View>
      ),
    });
  }, [props.navigation]);

  return (
    <View style={styles.buttonContainer}>
      <View style={styles.mainContainer}>
        <FlatList
          data={organizationsList}
          renderItem={(organization) => <OrganizationView organization={organization} />}
          keyExtractor={(organization) => organization.id.toString()}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
        />
      </View>
    </View>
  );
};

export default OrganizationList;
