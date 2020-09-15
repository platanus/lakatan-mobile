/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TeamScreen from './screens/TeamScreen/TeamScreen';
import FeedbackScreen from './screens/FeedbackScreen/FeedbackScreen';
import NewTeamScreen from './screens/NewTeamScreen/NewTeamScreen';
import LandingScreen from './screens/LandingScreen/LandingScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import NewUserToTeamScreen from './screens/NewUserToTeamScreen/NewUserToTeamScreen';

const TeamStack = createStackNavigator();

const TeamStackScreen = () => (
  <TeamStack.Navigator screenOptions={{ headerShown: true, headerLeft: null, headerStyle: { opacity: 0, height: 50 } }}>
    <TeamStack.Screen name="Equipos" component={LandingScreen} />
    <TeamStack.Screen name="Equipo" component={TeamScreen} />
    <TeamStack.Screen name="Feedback" component={FeedbackScreen} />
    <TeamStack.Screen name="Nuevo equipo" component={NewTeamScreen} />
    <TeamStack.Screen name="Iniciar sesión" component={LoginScreen} />
    <TeamStack.Screen name="Agregar usuarios" component={NewUserToTeamScreen} />
  </TeamStack.Navigator>
);

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Equipos"
          component={TeamStackScreen}
          options={{
            title: 'Equipos',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-contacts" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={TeamStackScreen}
          options={{
            title: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-contact" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
