import React, { useLayoutEffect } from 'react';
import {
  View, Text, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Clipboard, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../../components/LandingScreen/BackButton';
import styles from '../../styles/HookScreen/HookScreen';
import colors from '../../styles/colors';

const HookScreen = (props) => {
  const { hookOf, name, description, hookType } = props.route.params;
  console.log("hola")
  console.log(hookOf)
  
  useLayoutEffect(() => {
    props.navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <BackButton navigation={props.navigation}/>
      ),
      headerTitle: () => (
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
        </View>
      ),
    });
  }, [props.navigation]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.textHeader}>Hook de</Text>
          <Text>{hookOf}</Text>
          <Text style={styles.textHeader}>Tipo</Text>
          <Text>{hookType}</Text>
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
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HookScreen;
