import React, { useLayoutEffect } from 'react';
import { View, Button } from 'react-native';

import MenuButton from '../../components/LandingScreen/MenuButton';

const IntegrationList = (props) => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <MenuButton navigation={props.navigation}/>
      ),
    });
  }, [props.navigation]);

  return (
    <View>
      <Button title='Slack' onPress={() => props.navigation.navigate('Integration', { name: 'Slack' })} />
      <Button title='Google' onPress={() => props.navigation.navigate('Integration', { name: 'Google' })} />
      <Button title='Notion' onPress={() => props.navigation.navigate('Integration', { name: 'Notion' })} />
    </View>
  );
};

export default IntegrationList;
