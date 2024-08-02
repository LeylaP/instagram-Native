import { StyleSheet,Image, Dimensions} from 'react-native'
import React from 'react'

export default function FitImage({src}) {
    const width=Dimensions.get("window").width
    //console.log(width);
const ratio=1080 / width ;
const height=607 / ratio;


  return (
    <Image style={{width, height}} source={{uri:src}}/>
  )
}

const styles = StyleSheet.create({})