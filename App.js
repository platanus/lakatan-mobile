/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { store, persistor, runSagas } from './store';
import TeamScreen from './screens/TeamScreen/TeamScreen';
import FeedbackScreen from './screens/FeedbackScreen/FeedbackScreen';
import NewTeamScreen from './screens/NewTeamScreen/NewTeamScreen';
import LandingScreen from './screens/LandingScreen/LandingScreen';
import NewUserToTeamScreen from './screens/NewUserToTeamScreen/NewUserToTeamScreen';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import RiteScreen from './screens/RiteScreen/RiteScreen';
import NewRiteToTeamScreen from './screens/NewRiteToTeamScreen/NewRiteToTeamScreen';

import Splash from './screens/SplashScreen/SplashScreen';
import StepOneScreen from './screens/SyncScreen/StepOneScreen';
import StepTwoScreen from './screens/SyncScreen/StepTwoScreen';

runSagas();
const TeamStack = createStackNavigator();

const Navigation = () => {
  const { authentication: { token } } = useSelector((state) => state);

  return (
    <NavigationContainer>
      <TeamStack.Navigator>
        {!token
          ? (
            <>
              <TeamStack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
              <TeamStack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
            </>
          )
          : (
            <>
              <TeamStack.Screen name="Teams" component={LandingScreen} options={{ title: 'Equipos', gestureEnabled: false, headerLeft: null }} />
              <TeamStack.Screen name="Team" component={TeamScreen} options={{ title: 'Equipo' }} />
              <TeamStack.Screen name="Feedback" component={FeedbackScreen} />
              <TeamStack.Screen name="New Team" component={NewTeamScreen} options={{ title: 'Nuevo Equipo' }} />
              <TeamStack.Screen name="Add Users" component={NewUserToTeamScreen} options={{ title: 'Agregar Usuarios' }} />
              <TeamStack.Screen name="Rite" component={RiteScreen} options={{ title: 'Rito' }} />
              <TeamStack.Screen name="New Rite" component={NewRiteToTeamScreen} options={{ title: 'Nuevo Rito' }} />
            </>
          )}
      </TeamStack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Splash />} persistor={persistor} onBeforeLift={() => new Promise((resolve) => setTimeout(resolve, 3000))}>
        <NavigationContainer>
          <TeamStack.Navigator>
            <TeamStack.Screen name="StepOne" component={StepOneScreen} options={{ title: 'Paso 1' }} />
            <TeamStack.Screen name="StepTwo" component={StepTwoScreen} options={{ title: 'Paso 2' }} />
          </TeamStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
