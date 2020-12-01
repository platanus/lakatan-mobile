import React, { useLayoutEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import HeaderLogo from '../../components/IntegrationScreen/HeaderLogo';
import styles from '../../styles/IntegrationScreen/IntegrationScreen';
import NewWorksapceButton from '../../components/IntegrationScreen/NewWorkspaceButton';
import colors from '../../styles/colors';
import { WORKSPACE_CHANGES_REQUEST } from '../../store/types';
import BackButton from '../../components/LandingScreen/BackButton';

let workspaceMessage = '';

// eslint-disable-next-line max-statements
const IntegrationScreen = (props) => {
  const { name } = props.route.params;
  let { workspace } = useSelector((state) => state.sync);
  const { token, email } = useSelector((state) => state.authentication);
  const { id } = useSelector((state) => state.organizations.currentOrganization);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    props.navigation.setOptions({
      // eslint-disable-next-line react/display-name
      headerLeft: () => (
        <BackButton navigation={props.navigation}/>
      ),
      headerTitle: () => (
        <HeaderLogo name={name} />
      ),
      // eslint-disable-next-line react/display-name
      headerRight: () => (
        (name === 'Slack') ?
          <NewWorksapceButton navigation={props.navigation} name={name}/> : undefined
      ),
    });
  }, [props.navigation]);

  if (workspace && name === 'Slack') {
    workspaceMessage = 'Configurado con workspace';
  } else {
    workspaceMessage = 'No hay Workspace configurado';
    workspace = '';
  }

  const pressHandler = () => {
    dispatch({ type: WORKSPACE_CHANGES_REQUEST, payload: { token, email, id } });
    props.navigation.navigate('Sync step 1', { name });
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.description}>
        <Text style={styles.textDescription}>{workspaceMessage} </Text>
        <Text style={styles.textWorkspace}>{workspace}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{ ...styles.button, backgroundColor: workspace && name === 'Slack' ? colors.darkBlue : colors.gray }}
          disabled={name !== 'Slack' || !workspace}
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
