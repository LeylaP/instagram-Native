import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Bookmark, Comment, Dots, Heart, Share} from '../../../../Icon';
import React from 'react';
import FitImage from './FitImage';

export default function Post({post}) {
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image source={{uri: post?.user?.avatar}} style={styles.avatar} />
          <Text style={styles.title}>{post?.user?.name}</Text>
        </View>
        <Dots size={20} />
      </View>
      <FitImage src={post?.image} />

      <View style={styles.content}>
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity style={styles.action} activeOpacity={0.7}>
              <Heart size={24}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} activeOpacity={0.7}>
              <Comment size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} activeOpacity={0.7}>
              <Share size={24} />
            </TouchableOpacity>
            
          </View>
          <TouchableOpacity style={styles.action} activeOpacity={0.7}>
              <Bookmark size={24} />
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    height:40,
  },
  leftActions: {
    flexDirection: 'row',
  },
  post: {
    marginBottom: 20,
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  header: {
    //backgroundColor:'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 30,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  content: {
    paddingHorizontal:15,
  },
  action:{
    marginRight:5,
  }
});
