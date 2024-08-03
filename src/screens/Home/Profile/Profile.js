import { FlatList, Image, ScrollView,Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Header from './components/Header'
import ProfileInfo from './components/ProfileInfo'
import ProfileBio from './components/ProfileBio'
import ProfileStory from './components/ProfileStory'
import posts from '../../../data/posts'

export default function ProfileScreen() {

  const screenWidth=Dimensions.get("window").width;

  console.log(screenWidth);

  const renderProps= ({item}) => {
    <TouchableOpacity>
      <Image source={{uri:item.image}} style={{width:50, height:50}}/>
    </TouchableOpacity>
  };

  return (
    <ScrollView style={styles.container}>
      
     <Header/>
     <ProfileInfo/>
     <ProfileBio/>
     <ProfileStory/>
     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1,

  },

})