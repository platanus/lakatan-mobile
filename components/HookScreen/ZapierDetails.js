import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import styles from '../../styles/HookScreen/HookScreen';
import UserId from './UserId';

const ZapierDetails = (props) => {
  const { hookType } = props;
  const rite = useSelector((state) => state.hooks.riteInfo);

  return (
    <View>
      <Text style={styles.textHeader}>Id del rito</Text>
      <Text>{rite.attributes.taskId}</Text>
      {hookType === 'ZapierActionHook' ? (
        <View>
          <Text style={styles.textHeader}>Usuarios</Text>
          <View style={styles.userTitleContainer}>
            <Text style={styles.userTitle}>Nombre</Text>
            <Text style={styles.userTitle}>Id</Text>
          </View>
          <FlatList
            data={rite.attributes.users}
            renderItem={(user) => <UserId user={user.item}/>}
            keyExtractor={(user) => user.id.toString()}
          />
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default ZapierDetails;
