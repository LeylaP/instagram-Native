import {StyleSheet, Text,TouchableOpacity, View} from 'react-native';
import React from 'react';
import { BurgerMenu, Dropdown, Plus } from '../../../../Icon'


export default function Header() {
  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text styles={styles.username}>Username</Text>
        <Dropdown size={20} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <TouchableOpacity activeOpacity={0.7}>
          <Plus size={20} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <BurgerMenu size={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#fff',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:10,
      },
      username:{
        fontSize:20,
        fontWeight:'bold',
        
      },
});
