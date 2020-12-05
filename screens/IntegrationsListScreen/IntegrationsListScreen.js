import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import MenuButton from '../../components/LandingScreen/MenuButton';
import styles from '../../styles/IntegrationsListScreen/IntegrationListScreen';
import { SET_WORKSPACE } from '../../store/types';
import color from '../../styles/colors';

const IntegrationList = (props) => {
  const dispatch = useDispatch();
  const { token, email } = useSelector((state) => state.authentication);
  const { id } = useSelector((state) => state.organizations.currentOrganization);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <MenuButton navigation={props.navigation}/>
      ),
      headerTitle: () => (
        <View style={styles.header}>
          <Text style={styles.title}>Integraciones</Text>
        </View>
      ),
    });
  }, [props.navigation]);

  const navigate = (name) => {
    props.navigation.navigate('Integration', { name });
    dispatch({ type: SET_WORKSPACE, payload: { token, email, id } });
  };

  const activado = true; // TO DO: esto viene de backend

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Slack')}
      >
        <View style={styles.integrationContainer}>
          <Image source={require('../../assets/Slack/logoSlack.png')} style={styles.image} />
          <Text style={styles.buttonText}>Slack</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Sincronización y mensajería</Text>
          </View>
        <View>
          {activado ? (
            <Text style={{ ...styles.activate, color: color.blue }}>Activado</Text>
          ) : (
            <Text style={{ ...styles.activate, color: color.red }}>No activado</Text>
          )}
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Google')}
      >
        <Image source={require('../../assets/Google/google_logo_2.png')} style={styles.image}/>
        <Text style={styles.buttonText}>
          Google
        </Text>
        <Text>Sincronización y mensajería</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Notion')}
      >
        <Image source={require('../../assets/Notion/logoNotion.png')} style={styles.image}/>
        <Text style={styles.buttonText}>
          Notion
        </Text>
        <Text>Sincronización y mensajería</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default IntegrationList;
