import React from 'react';
import { TouchableOpacityBase,
  View, Linking, Text, TouchableOpacity,
} from 'react-native';

import { clientID } from '../../env';
import style from '../../styles/SlackAuth/SlackAuth';

const SlackAuth = () => {
  const client = clientID;
  const link = `https://slack.com/oauth/v2/authorize?scope=channels:read&client_id=${client}`;

  return (
    <TouchableOpacity style={style.applyButton} onPress={() => Linking.openURL(link)}>
      <Text>Slack</Text>
    </TouchableOpacity>
  );
};
export default SlackAuth;
