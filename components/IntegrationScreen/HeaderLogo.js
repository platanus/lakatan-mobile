import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../../styles/IntegrationScreen/IntegrationScreen';

const img = {
  'Slack': require('../../assets/Slack/logoSlack.png'),
  'Google': require('../../assets/Google/google_logo_2.png'),
  'Notion': require('../../assets/Notion/logoNotion.png'),
};

const HeaderLogo = ({ name }) => (
  <View style={styles.header}>
    <Image style={styles.logo} source={img[name]} />
    <Text style={styles.title}>{name}</Text>
  </View>
);

export default HeaderLogo;
