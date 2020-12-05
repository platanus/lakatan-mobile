import React from 'react';
import {
  Linking, Text, TouchableOpacity, View,
} from 'react-native';

import { clientID } from '../../env';
import styles from '../../styles/SlackAuth/SlackAuth';

const SlackAuth = () => {
  const client = clientID;
  const link = `https://slack.com/oauth/v2/authorize?scope=channels:read,groups:read,team:read,usergroups:read,users.profile:read,users:read,users:read.email,chat:write,chat:write.public,commands&client_id=${client}`;

  return (
    <View style={styles.buttonContainer}>
      <View style={styles.createButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(link)}>
          <Text style={styles.textButton}>Autorizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SlackAuth;
