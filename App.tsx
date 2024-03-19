import React, { useEffect } from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Navigations from './components/Navigations';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Root from './components/Screens/Root';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Navigations/>
    
  );
};
export default App;
