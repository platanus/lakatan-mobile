import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import MenuButton from '../../components/LandingScreen/MenuButton';
import styles from '../../styles/IntegrationsListScreen/IntegrationListScreen';
import { SET_WORKSPACE } from '../../store/types';

const IntegrationList = (props) => {
  const dispatch = useDispatch();
  const { token, email } = useSelector((state) => state.authentication);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <MenuButton navigation={props.navigation}/>
      ),
    });
  }, [props.navigation]);

  const navigate = (name) => {
    props.navigation.navigate('Integration', { name });
    dispatch({ type: SET_WORKSPACE, payload: { token, email } });
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Slack')}
      >
        <Image source={require('../../assets/Slack/logoSlack.png')} style={styles.image} />
        <Text style={styles.buttonText}>
          Slack
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Google')}
      >
        <Image source={require('../../assets/Google/google_logo_2.png')} style={styles.image}/>
        <Text style={styles.buttonText}>
          Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('Notion')}
      >
        <Image source={require('../../assets/Notion/logoNotion.png')} style={styles.image}/>
        <Text style={styles.buttonText}>
          Notion
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default IntegrationList;
