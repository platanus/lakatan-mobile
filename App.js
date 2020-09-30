/* eslint-disable react/jsx-filename-extension */
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TeamScreen from './screens/TeamScreen/TeamScreen';
import FeedbackScreen from './screens/FeedbackScreen/FeedbackScreen';
import NewTeamScreen from './screens/NewTeamScreen/NewTeamScreen';
import LandingScreen from './screens/LandingScreen/LandingScreen';
import NewUserToTeamScreen from './screens/NewUserToTeamScreen/NewUserToTeamScreen';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';


const TeamStack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <TeamStack.Navigator>
        <TeamStack.Screen name ="Splash" component={SplashScreen} options={{ headerShown: false }}/>
        <TeamStack.Screen name ="SignIn" component={SignInScreen} options={{ headerShown: false }} />
        <TeamStack.Screen name ="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
        <TeamStack.Screen name="Equipos" component={LandingScreen} options={{ gestureEnabled: false ,headerLeft: null }} />
        <TeamStack.Screen name="Equipo" component={TeamScreen} />
        <TeamStack.Screen name="Feedback" component={FeedbackScreen} />
        <TeamStack.Screen name="Nuevo equipo" component={NewTeamScreen} />
        <TeamStack.Screen name="Agregar usuarios" component={NewUserToTeamScreen} />
      </TeamStack.Navigator>
    </NavigationContainer>
  );
}
