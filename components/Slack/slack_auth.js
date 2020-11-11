import React from 'react';
import {
  Linking, Text, TouchableOpacity,
} from 'react-native';

import { clientID } from '../../env';
import styles from '../../styles/SlackAuth/SlackAuth';

const SlackAuth = () => {
  const client = clientID;
  const link = `https://slack.com/oauth/v2/authorize?scope=channels:read,groups:read,team:read,chat:write,usergroups:read,users.profile:read,users:read,users:read.email&client_id=${client}`;

  return (
    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(link)}>
      <Text style={styles.textButton}>Slack</Text>
    </TouchableOpacity>
  );
};
export default SlackAuth;
