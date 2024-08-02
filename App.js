import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Screen from './src/Screen';

export default function componentName() {
  return (
    
   
        <SafeAreaView style={{flex:1}}> 
        <NavigationContainer>
        <Screen/>
        </NavigationContainer>
        </SafeAreaView>
     
  );
}
