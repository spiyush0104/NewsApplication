import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Root = () => {
  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('token').then(Response => {
      if (!Response) {
        navigation.reset({
          index: 0,
          routes: [{name: 'SelectLanguage'}],
        });
      }else{
        navigation.reset({
            index: 0,
            // routes: [{name: 'Home'}],
            routes: [{name: 'MainScreen'}],
          });
      }
    });
  });

  return (
    <View>
     
    </View>
  );
};

export default Root;
