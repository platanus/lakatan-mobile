import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../styles/HookScreen/HookScreen';

const UserId = ({ user }) => (
  <View style={styles.userContainer}>
    <Text style={styles.userName}>{user.name}</Text>
    <Text style={styles.userId}>{user.id}</Text>
  </View>
);

export default UserId;
