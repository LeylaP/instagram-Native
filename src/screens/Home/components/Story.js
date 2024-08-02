import { StyleSheet, Text,Image, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
export default function Story({story}) {
  return (
    <View key={story.id} style={styles.story}>
            <LinearGradient
              style={styles.cover}
              colors={['#DE0046', '#F7A34B']}>
              <Image source={{uri: story.user.avatar}} style={styles.avatar} />
            </LinearGradient>

            <Text numberOfLines={1} style={styles.username}>{story.user.name}</Text>
          </View>
  )
}

const styles = StyleSheet.create({
    username:{
        fontSize:12,
    
    },
    story: {
        width:67,
        marginHorizontal:8,
    
    },
    cover: {
        borderRadius: 60,
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:5,
      },
    
      avatar: {
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth:1,
        borderColor:'white',
      },
})


