/* eslint-disable react/jsx-filename-extension */
import React, { useState, useLayoutEffect } from 'react';
import {
  View, Text, TouchableOpacity, Image, Alert,
} from 'react-native';
import ItemList from '../../components/SyncScreen/ItemList';
import styles from '../../styles/SyncScreen/SyncScreen';
import stylesHeader from '../../styles/IntegrationScreen/IntegrationScreen';

const StepTwoScreen = ({ route, navigation }) => {
  const { syncData2 } = route.params;
  const [data, setData] = useState(syncData2);
  const [count, setCount] = useState(syncData2.length);

  const { name } = route.params;
  const img = {
    'Slack': require('../../assets/Slack/logoSlack.png'),
    'Google': require('../../assets/Google/google_logo_2.png'),
    'Notion': require('../../assets/Notion/logoNotion.png'),
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerTitle: () => (
        <View style={stylesHeader.header}>
          <Image style={stylesHeader.logo} source={img[name]} />
          <Text style={stylesHeader.title}>{name}</Text>
        </View>
      ),
      headerBackTitle: 'Back',
    });
  }, [navigation]);

  const itemOnPressHandler = (key) => {
    setData((prevData) => {
      const newData = prevData.map((item) => {
        if (item.key === key) {
          item.selected = !item.selected;

          return item;
        }

        return item;
      });

      return newData;
    });
  };

  const countSelectedItemsHandler = () => {
    const newCount = data.filter((item) => (item.selected)).length;
    setCount(newCount);
  };

  const pressHandler = () => {
    Alert.alert(
      '¡Sincronización Completa!',
      '',
      [
        { text: 'OK' },
      ],
      { cancelable: false },
    );
    navigation.navigate('Integration', { name });
  };

  return (
    <View style={styles.mainContainer}>

      <View style={styles.step}>
        <Text style={styles.textStep}>
          Paso 2 de 2
        </Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.textDescription}>
          Configurado con workspace
        </Text>
        <Text style={styles.textWorkspace}>
          Palatanus
        </Text>
      </View>

      <TouchableOpacity style={styles.applyButton} onPress={pressHandler}>
        <Text style={styles.textApplyButton}>
          aplicar
          {' '}
          {count}
        </Text>
      </TouchableOpacity>

      <ItemList
        data={data}
        itemOnPressHandler={itemOnPressHandler}
        countSelectedItemsHandler={countSelectedItemsHandler}
      />

      <TouchableOpacity style={styles.reloadButton}>
        <Text style={styles.textReloadButton}>recargar</Text>
      </TouchableOpacity>

    </View>
  );
};

export default StepTwoScreen;
