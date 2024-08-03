import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

export default function ProfileInfo() {
  return (
    <View style={styles.profileInfo}>
      <LinearGradient
              style={styles.cover}
              colors={['#DE0046', '#F7A34B']}>
              <Image source={{uri:'https://randomuser.me/api/portraits/women/3.jpg'}} 
              style={styles.avatar} />
      </LinearGradient>
      <View style={styles.userInfo}>
      <View style={styles.info}>
        <Text>0,000</Text>
        <Text style={styles.statLabel}>Posts</Text>
      </View>
      <View style={styles.info}>
        <Text>0,000</Text>
        <Text style={styles.statLabel}>Followers</Text>
      </View>
      <View style={styles.info}>
        <Text>0,000</Text>
        <Text style={styles.statLabel}>Following</Text>
      </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    stats:{
        alignItems:'center',
    },
    statLabel:{
        fontSize:12,
        color:'#00000',
        fontWeight:400,
    },
    statNumber:{
        fontSize:18,
        fontWeight:'700',
        color:'000000',

    },
    userInfo:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap: 30,
        marginHorizontal:20,
    },
    info:{
    },
    profileInfo:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        paddingVertical:10,

    },
    avatar:{
        width:80,
        height:80,
        borderRadius:40,
        borderColor:'#fff',
        borderWidth:2,

    },
    cover: {
        borderRadius: 45,
        width: 85,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:5,
      },
});  