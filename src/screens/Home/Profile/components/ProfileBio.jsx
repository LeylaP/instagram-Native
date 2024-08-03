import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ProfileBio() {
  return (
    <View style={styles.bio}>
      <Text style={styles.name}>UserName</Text>
      <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
        <Text style={styles.link}>Link Goes here</Text>
        <TouchableOpacity activeOpacity={0.5} style={styles.editProfileButton}>
            <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
    
    </View>
  )
}

const styles = StyleSheet.create({
    editProfileButton:{
        borderColor:'#CBCBCB',
        borderWidth:1,
        justifyContent:'center',
        borderRadius:5,
        marginVertical:5,
    },
    editProfileText:{
        textAlign:'center',
        padding:6,
        fontWeight:'700',

    },
    bio:{
        paddingHorizontal:15,
        paddingVertical:10,
    },
    name:{
        fontWeight:'700',
        color:'#000000',
    },
    description:{
        marginVertical:5,
    },
    link:{
        fontWeight:'400',
        color:'#004C8B',
        
    },
})