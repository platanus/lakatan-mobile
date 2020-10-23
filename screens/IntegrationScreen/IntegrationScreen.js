import React, { useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../styles/IntegrationScreen/IntegrationScreen';
import NewWorksapceButton from '../../components/IntegrationScreen/NewWorkspaceButton';
import colors from '../../styles/colors';
import { useSelector } from 'react-redux';

const IntegrationScreen = (props) => {
  const { name } = props.route.params;
  const img = {
    'Slack': require('../../assets/Slack/logoSlack.png'),
    'Google': require('../../assets/Google/google_logo_2.png'),
    'Notion': require('../../assets/Notion/logoNotion.png'),
  };
  let { workspace } = useSelector((state) => state.sync);

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
        <NewWorksapceButton navigation={props.navigation} name={name}/>
      ),
      headerBackTitle: 'Back',
    });
  }, [props.navigation]);

  let workspaceMessaje = '';
  if (workspace && name === 'Slack') {
    workspaceMessaje = 'Configurado con workspace ';
  } else {
    workspaceMessaje = 'No hay Workspace configurado';
    workspace = '';
  }

  return (
    <View>
      <View style={styles.description}>
        <Text style={styles.textDescription}>{workspaceMessaje}</Text>
        <Text style={styles.textWorkspace}>{workspace}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: workspace && name==='Slack' ? colors.darkBlue : colors.gray }}
          disabled={name != 'Slack'}
          onPress={() => props.navigation.navigate('Sync step 1', { name })}
        >
          <Text style={styles.textButton}>
          Sincronizar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default IntegrationScreen;
