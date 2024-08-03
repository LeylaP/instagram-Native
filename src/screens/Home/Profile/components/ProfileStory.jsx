import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ProfileStory() {
  return (
    <ScrollView horizontal style={styles.stories} showsHorizontalScrollIndicator={false}>
      <View style={styles.story}>
        <View style={styles.storyCover}>
          <Image
            source={{uri: 'https://picsum.photos/1080/611'}}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storyCover}>
          <Image
            source={{uri: 'https://picsum.photos/1080/611'}}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storyCover}>
          <Image
            source={{uri: 'https://picsum.photos/1080/611'}}
            style={styles.storyImage}
          />
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.storyCover}>
          <TouchableOpacity style={styles.newStoryButton}>
            <Text style={styles.plusSign}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.storyLabel}>Story 1</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    newStoryButton:{
        justifyContent:'center',
        alignItems:'center',

    },
    plusSign:{
        fontSize:40,


    },
  storyCover: {
    borderColor: '#DCDCDC',
    borderWidth: 1,
    borderRadius: 35,
    padding: 5,
    justifyContent:'center',
    alignItems:'center',
    width:70,
    height:70,
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    //padding: 5,
  },
  story: {
    marginRight: 10,
    alignItems: 'center',
  },
  storyLabel: {
    color:''
  },
  stories: {
    paddingHorizontal: 15,
  },
});
