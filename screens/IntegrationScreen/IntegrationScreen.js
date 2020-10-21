import React, { useLayoutEffect } from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../../styles/IntegrationScreen/IntegrationScreen';
import NewWorksapceButton from '../../components/IntegrationScreen/NewWorkspaceButton';

const IntegrationScreen = (props) => {
  const { name } = props.route.params;
  const img = {
    'Slack': require('../../assets/Slack/logoSlack.png'),
    'Google': require('../../assets/Google/google_logo_2.png'),
    'Notion': require('../../assets/Notion/logoNotion.png'),
  };

  useLayoutEffect(() => {
    props.navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerTitle: () => (
        <View style={styles.header}>
          <Image style={styles.logo} source={img[name]} />
          <Text style={styles.title}>{name}</Text>
        </View>
      ),
      // eslint-disable-next-line react/display-name
      headerRight: () => (
        <NewWorksapceButton navigation={props.navigation}/>
      ),
      headerBackTitle: 'Back',
    });
  }, [props.navigation]);

  return (
    <View>
      <Text>Integration</Text>
    </View>
  );
};

export default IntegrationScreen;
