import { StyleSheet, Text,Dimensions,TouchableOpacity,Image, View } from 'react-native'
import React from 'react'
import posts from '../../../../data/posts'
import { FlatList } from 'react-native'

export default function ProfilePosts() {

    const screenWidth=Dimensions.get("window").width;
  const numColumns=3;
  const imageSize = (screenWidth -(numColumns + 1)* 2 )/ numColumns;

//   console.log(imageSize);
//   console.log(screenWidth);

//   const renderProps= ({item}) => {
//     <TouchableOpacity key={item.id} activeOpacity={0.7}>
//       <Image source={{uri:item.image}} style={{width:imageSize, height:imageSize}}/>
//     </TouchableOpacity>
//   };



  return (
    <View style={styles.posts} >
       { posts.map(( item) =>( 
        <TouchableOpacity key={item.id} activeOpacity={0.7}>
        <Image source={{uri:item.image}} style={{width:imageSize, height:imageSize}}/>
      </TouchableOpacity>
       ))}
    </View>
    // <FlatList horizontal={false}
    //   keyExtractor={(item, index) => index.toString()}
    //   numColumns={numColumns} 
    //   data={posts} 
    //   renderItem={renderProps} 
    //   contentContainerStyle={styles.photoGrid}
    //   />
  )
}

const styles = StyleSheet.create({
    posts:{
        marginTop: 5,
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        gap: 1,
        marginHorizontal:3,
        justifyContent:'flex-start',
    },
    mapPost:{
        width:30,
        height:30,
    }
})