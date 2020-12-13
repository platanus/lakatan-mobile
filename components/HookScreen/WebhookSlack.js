import React from 'react';
import { View, Text, TouchableOpacity, Clipboard, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from '../../styles/HookScreen/HookScreen';

const WebhookSlack = (props) => {
  const { hookType, description } = props;

  return (
    <View>
      {hookType === 'Webhook' ? (
        <View>
          <Text style={styles.textHeader}>URL</Text>
          <TouchableOpacity onPress={() => {
            Clipboard.setString(description);
            Alert.alert('Link copiado');
          }}>
            <View style={styles.urlContainer}>
              <Text style={styles.textDescription}>{description}</Text>
              <Icon name="copy" size={25} color="grey" style={styles.copyIcon} />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.textHeader}>Descripción</Text>
          <Text>{description}</Text>
        </View>
      )}
    </View>
  );
};

export default WebhookSlack;
