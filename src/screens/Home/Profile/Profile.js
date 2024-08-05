import { FlatList, Image, ScrollView,Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'


import ProfileInfo from './components/ProfileInfo'
import ProfileBio from './components/ProfileBio'
import ProfileStory from './components/ProfileStory'
import ProfileHeader from './components/Header'
import posts from '../../../data/posts'
import ProfilePosts from './components/ProfilePosts'

export default function ProfileScreen() {

  

  return (
    <ScrollView style={styles.container}>
      
     <ProfileHeader/>
     <ProfileInfo/>
     <ProfileBio/>
     <ProfileStory/>
     <ProfilePosts/>

      {/* <FlatList 
      keyExtractor={(item, index) => index.toString()}
      numColumns={numColumns} 
      data={posts} 
      renderItem={renderProps} 
      contentContainerStyle={styles.photoGrid}
      />
      */}
     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1,

  },
  photoGrid:{},

})