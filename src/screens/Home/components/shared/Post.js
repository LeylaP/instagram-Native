import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Bookmark, Comment, Dots, Heart, Share} from '../../../../Icon';
import React from 'react';
import FitImage from './FitImage';
import ReadMore from 'react-native-read-more-text';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';


export default function Post({post}) {
    dayjs.extend(relativeTime);
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
              <Heart size={24} />
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
      <View style={styles.comment}>
        <Text style={{fontWeight:600}}>{post.likes} Likes </Text>
        <ReadMore numberOfLines={2} >
            <Text style={{fontWeight:600}}>{post.user.name} </Text>
            <Text >{post.description}</Text>
        </ReadMore>
        {post?.comments > 0 && (
            <TouchableOpacity activeOpacity={0.7}>
                <Text style={{color:'#707070'}}>View all {post?.comments} comments</Text>
            </TouchableOpacity>
        )}
      </View>
      <View>
        <Text style={styles.date}>{dayjs(post?.date).fromNow()}</Text>
        <Text style={styles.translation}>See Translation</Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

    comment:{

    },
    translation:{
        fontSize:13,
        fontWeight:600,
        marginTop:10,
    },
    date:{
        fontSize:13,
        opacity: 0.5,    },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
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
    paddingVertical:5,
    borderColor:'#d9d9d9',
    borderTopWidth:0.5,


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
    paddingHorizontal: 15,
  },
  action: {
    marginRight: 5,
  },
});
