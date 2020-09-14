/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TeamScreen from './screens/TeamScreen/TeamScreen';
import FeedbackScreen from './screens/FeedbackScreen/FeedbackScreen';
import NewTeamScreen from './screens/NewTeamScreen/NewTeamScreen';
import LandingScreen from './screens/LandingScreen/LandingScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import NewUserToTeamScreen from './screens/NewUserToTeamScreen/NewUserToTeamScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Equipos" component={LandingScreen} />
        <Stack.Screen name="Equipo" component={TeamScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="Nuevo equipo" component={NewTeamScreen} />
        <Stack.Screen name="Iniciar sesión" component={LoginScreen} />
        <Stack.Screen name="Agregar usuarios" component={NewUserToTeamScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
