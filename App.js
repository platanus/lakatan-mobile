/* eslint-disable react/jsx-filename-extension */
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TeamScreen from './screens/TeamScreen/TeamScreen';
import FeedbackScreen from './screens/FeedbackScreen/FeedbackScreen';
import NewTeamScreen from './screens/NewTeamScreen/NewTeamScreen';
import LandingScreen from './screens/LandingScreen/LandingScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import NewUserToTeamScreen from './screens/NewUserToTeamScreen/NewUserToTeamScreen';
import SplashScreen from './screens/SplashScreen/SplashScreen';
import SignInScreen from './screens/SignInScreen/SignInScreen';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';


const Stack = createStackNavigator();



export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
              <Stack.Screen name ="Splash" component={SplashScreen} options={{ headerShown: false }}/>
              <Stack.Screen name ="SignIn" component={SignInScreen} options={{ headerShown: false }} />
              <Stack.Screen name ="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
              <Stack.Screen name="Equipos" component={LandingScreen} options={{ gestureEnabled: false ,headerLeft: null }} />
              <Stack.Screen name="Equipo" component={TeamScreen} />
              <Stack.Screen name="Feedback" component={FeedbackScreen} />
              <Stack.Screen name="Nuevo equipo" component={NewTeamScreen} />
              <Stack.Screen name="Iniciar sesión" component={LoginScreen} />
              <Stack.Screen name="Agregar usuarios" component={NewUserToTeamScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
