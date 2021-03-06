import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { store, persistor, runSagas } from './store';
import colors from './styles/colors';
import styles from './styles/App/App';
import { SIGN_OUT_REQUEST } from './store/types';
import TeamScreen from './screens/TeamScreen/TeamScreen';
import FeedbackScreen from './screens/FeedbackScreen/FeedbackScreen';
import NewTeamScreen from './screens/NewTeamScreen/NewTeamScreen';
import LandingScreen from './screens/LandingScreen/LandingScreen';
import NewUserToTeamScreen from './screens/NewUserToTeamScreen/NewUserToTeamScreen';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen/ForgotPasswordScreen';
import RiteScreen from './screens/RiteScreen/RiteScreen';
import NewRiteToTeamScreen from './screens/NewRiteToTeamScreen/NewRiteToTeamScreen';
import IntegrationListScreen from './screens/IntegrationsListScreen/IntegrationsListScreen';
import IntegrationScreen from './screens/IntegrationScreen/IntegrationScreen';
import NewWorkspaceScreen from './screens/NewWorkspaceScreen/NewWorkspaceScreen';
import NewHookScreen from './screens/NewHookScreen/NewHookScreen';
import HookScreen from './screens/HookScreen/HookScreen';
import Splash from './screens/SplashScreen/SplashScreen';
import StepOneSyncScreen from './screens/SyncScreen/StepOneSyncScreen';
import StepTwoSyncScreen from './screens/SyncScreen/StepTwoSyncScreen';
import OrganizationListScreen from './screens/OrganizationsListScreen/OrganizationsListScreen';
import NewOrganizationScreen from './screens/NewOrganizationScreen/NewOrganizationScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import EditPhotoScreen from './screens/ProfileScreen/EditPhotoScreen';
import EditNameScreen from './screens/ProfileScreen/EditNameScreen';
import VotingScreen from './screens/VotingScreen/VotingScreen';
import NewVotingScreen from './screens/NewVotingScreen/NewVotingScreen';
import OrganizationLogo from './components/Logo/OrganizationLogo';
import ProfileLogo from './components/Logo/ProfileLogo';
import LogoutLogo from './components/Logo/LogoutLogo';
import TeamLogo from './components/Logo/TeamLogo';
import IntegrationLogo from './components/Logo/IntegrationLogo';

runSagas();
const AppStack = createStackNavigator();
const TeamStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();
const IntegrationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const OrganizationStack = createStackNavigator();

const Integration = () => (
  <IntegrationStack.Navigator>
    <IntegrationStack.Screen
      name="Integrations"
      component={IntegrationListScreen}
      options={{ title: 'Integraciones' }}
    />
    <IntegrationStack.Screen name="Integration" component={IntegrationScreen} />
    <IntegrationStack.Screen
      name="New Workspace"
      component={NewWorkspaceScreen}
      options={{ title: 'Configurar Workspace' }}
    />
    <IntegrationStack.Screen name="Sync step 1" component={StepOneSyncScreen}/>
    <IntegrationStack.Screen name="Step Two Sync" component={StepTwoSyncScreen}/>
  </IntegrationStack.Navigator>
);

const Organization = () => (
  <OrganizationStack.Navigator>
    <OrganizationStack.Screen
      name="Organizations"
      component={OrganizationListScreen}
      options={{ title: 'Organizaciones' }}
    />
    <OrganizationStack.Screen name="New Organization" component={NewOrganizationScreen} />
  </OrganizationStack.Navigator>
);

const Teams = () => (
  <TeamStack.Navigator>
    <TeamStack.Screen
      name="Teams"
      component={LandingScreen}
      options={{ title: 'Equipos', gestureEnabled: false }}
    />
    <TeamStack.Screen name="Team" component={TeamScreen} options={{ title: 'Equipo' }} />
    <TeamStack.Screen name="Feedback" component={FeedbackScreen} />
    <TeamStack.Screen name="New Team" component={NewTeamScreen} options={{ title: 'Nuevo Equipo' }} />
    <TeamStack.Screen
      name="Add Users"
      component={NewUserToTeamScreen}
      options={{ title: 'Agregar Usuarios' }}
    />
    <TeamStack.Screen name="Rite" component={RiteScreen} options={{ title: 'Rito' }} />
    <TeamStack.Screen name="New Rite" component={NewRiteToTeamScreen} options={{ title: 'Nuevo Rito' }} />
    <TeamStack.Screen name="Hook" component={HookScreen} options={{ title: 'Hook' }} />
    <TeamStack.Screen name="New Hook" component={NewHookScreen} options={{ title: 'Nuevo hook' }} />
    <TeamStack.Screen name="Voting" component={VotingScreen} options={{ title: 'Votación' }} />
    <TeamStack.Screen name="New Voting" component={NewVotingScreen} options={{ title: 'Nueva votación' }} />
  </TeamStack.Navigator>
);

const Profile = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
    <ProfileStack.Screen name="EditPhoto" component={EditPhotoScreen} options={{ title: 'Perfil' }} />
    <ProfileStack.Screen name="EditName" component={EditNameScreen} options={{ title: 'Perfil' }} />
  </ProfileStack.Navigator>
);

const AppNavigator = () => {
  const dispatch = useDispatch();
  const { email, token } = useSelector((state) => state.authentication);
  const { id } = useSelector((state) => state.organizations.currentOrganization);

  return (
    <AppDrawer.Navigator drawerContent= {props => (
      <DrawerContentScrollView {...props} contentContainerStyle={styles.contentContainer}>
        <DrawerItemList {...props} />
        <DrawerItem
          label='Cerrar Sesión'
          style={styles.signoutButton}
          inactiveTintColor={colors.red}
          onPress={() => dispatch({ type: SIGN_OUT_REQUEST, payload: { email, token, lastOrg: id } })}
          icon={() => <LogoutLogo />}
        />
      </DrawerContentScrollView>
    )}
    initialRouteName={id ? 'Equipos' : 'Organizaciones'}
    >
      { id ? (
        <>
          <AppDrawer.Screen
            name="Organizaciones"
            component={Organization}
            options={{ drawerIcon: () => <OrganizationLogo /> }}/>
          <AppDrawer.Screen
            name="Equipos"
            component={Teams}
            options={{ drawerIcon: () => <TeamLogo /> }}
          />
          <AppDrawer.Screen
            name="Integraciones"
            component={Integration}
            options={{ drawerIcon: () => <IntegrationLogo /> }}
          />
          <AppDrawer.Screen
            name="Editar perfil"
            component={Profile}
            options={{ drawerIcon: () => <ProfileLogo /> }}
          />
        </>
      ) :
        (
          <>
            <AppDrawer.Screen
              name="Organizaciones"
              component={Organization}
              options={{ drawerIcon: () => <OrganizationLogo /> }}/>
            <AppDrawer.Screen
              name="Editar perfil"
              component={Profile}
              options={{ drawerIcon: () => <ProfileLogo /> }}
            />
          </>
        )}
    </AppDrawer.Navigator>
  );
};

const SignInNavigatior = () => {
  const { authentication: { token } } = useSelector((state) => state);

  return (
    <NavigationContainer>
      <AppStack.Navigator>
        {token ? (
          <>
            <AppStack.Screen name="App" component={AppNavigator} options={{ headerShown: false }} />
          </>
        ) :
          (
            <>
              <AppStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
              <AppStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
              <AppStack.Screen name="Forgot Password" component={ForgotPasswordScreen}
                options={{ headerShown: false }} />
            </>
          )}
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Splash />}
        persistor={persistor}
        onBeforeLift={() => new Promise((resolve) => setTimeout(resolve, 2000))}
      >
        <SignInNavigatior />
      </PersistGate>
    </Provider>
  );
}


