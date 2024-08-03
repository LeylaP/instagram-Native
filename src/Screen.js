
import React from 'react';
import { StyleSheet,Image } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home/index';
import SearchScreen from './screens/Search';
import ReelScreen from './screens/Reel';
import ShopScreen from './screens/Shop';
import ProfileScreen from './screens/Home/Profile/Profile';
import {Home,Heart,Messenger,Search,Shop,Reel, HomeField,ShopField,SearchField,ReelField} from './Icon';
const Tab = createBottomTabNavigator();

export default function Screen() {
  return (
    
      <Tab.Navigator initialRouteName='Home'  screenOptions={{
        tabBarShowLabel:false, 
        tabBarInactiveTintColor: 'gray',
        headerShown:false,}}>
        <Tab.Screen options={{
          tabBarIcon: ({focused})=>(focused ? <HomeField size={25}/> : <Home size={25}/>)
        }} name="Home" component={HomeScreen} />
        <Tab.Screen
        options={{
          tabBarIcon: ({focused})=>(focused ? <SearchField size={25}/> :<Search size={25}/>)}} name="Search" component={SearchScreen} />
        <Tab.Screen
        options={{
          tabBarIcon: ({focused})=>(focused ? <ReelField size={25}/> : <Reel size={25}/>)}} name="Reel" component={ReelScreen} />
        <Tab.Screen
        options={{
          tabBarIcon: ({focused})=>(focused ? <ShopField size={25}/> : <Shop size={25}/>)}} name="Shop" component={ShopScreen} />
        <Tab.Screen
        options={{
          tabBarIcon:({focused})=> (<Image style={[styles.avatar,{borderColor: focused? '#000':'transparent'}]} source={require('./../assets/profile.png')}/>)}}  name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    
  );
  
}
const styles= StyleSheet.create({
  avatar:{
    width:25,
    height:25,
    borderWidth:2,
    borderRadius:25,
  }
});

