import React, { useLayoutEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../../styles/IntegrationScreen/IntegrationScreen';
import NewWorksapceButton from '../../components/IntegrationScreen/NewWorkspaceButton';
import colors from '../../styles/colors';
import { WORKSPACE_CHANGES_REQUEST } from '../../store/types';

const img = {
  'Slack': require('../../assets/Slack/logoSlack.png'),
  'Google': require('../../assets/Google/google_logo_2.png'),
  'Notion': require('../../assets/Notion/logoNotion.png'),
};
let workspaceMessage = '';

const IntegrationScreen = (props) => {
  const { name } = props.route.params;
  const { workspace } = useSelector((state) => state.sync);
  const { token, email } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

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
      headerBackTitle: 'Volver',
    });
  }, [props.navigation]);

  if (workspace && name === 'Slack') {
    workspaceMessage = 'Configurado con workspace ';
  } else {
    workspaceMessage = 'No hay Workspace configurado';
  }

  const pressHandler = () => {
    dispatch({ type: WORKSPACE_CHANGES_REQUEST, payload: { token, email } });
    props.navigation.navigate('Sync step 1', { name });
  };

  return (
    <View>
      <View style={styles.description}>
        <Text style={styles.textDescription}>{workspaceMessage} </Text>
        <Text style={styles.textWorkspace}>{workspace}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: workspace && name === 'Slack' ? colors.darkBlue : colors.gray }}
          disabled={name !== 'Slack'}
          onPress={pressHandler}
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
