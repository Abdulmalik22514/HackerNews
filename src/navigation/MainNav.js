// In App.js in a new project
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopStories from '../screens/TopStories/TopStories';
import WebPage from '../screens/WebPage/WebPage';
import LoginScreen from '../screens/Login/Login';
import Profile from '../screens/Profile/Profile';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TopStories" component={TopStories} />
        <Stack.Screen name="WebPage" component={WebPage} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
