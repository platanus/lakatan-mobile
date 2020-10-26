import React, { useLayoutEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from '../../styles/IntegrationScreen/IntegrationScreen';
import NewWorksapceButton from '../../components/IntegrationScreen/NewWorkspaceButton';
import colors from '../../styles/colors';

const IntegrationScreen = (props) => {
  const { name } = props.route.params;
  const img = {
    'Slack': require('../../assets/Slack/logoSlack.png'),
    'Google': require('../../assets/Google/google_logo_2.png'),
    'Notion': require('../../assets/Notion/logoNotion.png'),
  };
  const [workspace, setWorkspace] = useState('');

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
        <NewWorksapceButton navigation={props.navigation}/>
      ),
      headerBackTitle: 'Back',
    });
  }, [props.navigation]);

  let workspaceMessage = '';
  if (workspace) {
    workspaceMessage = 'Configurado con workspace';
  } else {
    workspaceMessage = 'No hay Workspace configurado';
  }

  return (
    <View>
      <View style={styles.description}>
        <Text style={styles.textDescription}>{workspaceMessage} </Text>
        <Text style={styles.textWorkspace}>{workspace}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: workspace ? colors.darkBlue : colors.gray }}
          disabled={workspace === ''}
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
