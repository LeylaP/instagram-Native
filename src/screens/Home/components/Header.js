import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Heart, Logo, Messenger, Plus } from '../../../Icon'

export default function Header() {
  return (
    <View style={styles.container}>
      <Logo/>
      <View style={styles.actions}>
        <TouchableOpacity activeOpacity={0.6}>
            
        <Plus size={24}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.dotContainer}>
                <View style={styles.dot}><Text style={styles.text}>2</Text></View>
            </View>
        <Heart size={24}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
        <View style={styles.dotContainer}>
                <View style={styles.dot}><Text style={styles.text}>3</Text></View>
            </View>
        <Messenger size={24}/>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor:'fff',
      flexDirection:'row',
      justifyContent:'space-between',
      //backgroundColor:'green',
      paddingHorizontal: 15,
      height:44,
      alignItems: 'center',
    },
    actions:{
        flexDirection:'row',
        gap: 15,
    },
    dotContainer:{
        position:'absolute',
        right:0,
        top:0,
        zIndex:3,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',

    },
    dot:{
        backgroundColor:'#FE3650',
        width:10,
        height:10,
        borderRadius:10,
        alignItems:'center',
        
    },
    text:{
        fontSize:10, 
        fontWeight:600,
    }
  })