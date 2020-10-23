import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import MenuButton from '../../components/LandingScreen/MenuButton';
import styles from '../../styles/IntegrationsListScreen/IntegrationListScreen';

const IntegrationList = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <MenuButton navigation={props.navigation}/>
      ),
    });
  }, [props.navigation]);

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Integration', { name: 'Slack' })}>
        <Image source={require('../../assets/Slack/logoSlack.png')} style={styles.image} />
        <Text style={styles.buttonText}>
          Slack
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Integration', { name: 'Google' })}>
        <Image source={require('../../assets/Google/google_logo_2.png')} style={styles.image}/>
        <Text style={styles.buttonText}>
          Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Integration', { name: 'Notion' })}>
        <Image source={require('../../assets/Notion/logoNotion.png')} style={styles.image}/>
        <Text style={styles.buttonText}>
          Notion
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default IntegrationList;
