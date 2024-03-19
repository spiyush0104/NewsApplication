import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Root from '../Screens/Root';
import SelectLanguage from '../Screens/SelectLanguage';
import Home from '../Screens/Home';
import MainScreen from '../Screens/Main';
import SearchScreen from '../Screens/Search';
import SettingsComp from '../Screens/Settings';
const Stack = createNativeStackNavigator();
const Navigations = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Root" >
        <Stack.Screen
          name="Root"
          component={Root}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SelectLanguage"
          component={SelectLanguage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />
         <Stack.Screen
          name="SettingsComp"
          component={SettingsComp}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
