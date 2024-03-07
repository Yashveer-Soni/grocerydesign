import { StyleSheet, Text, View , Image, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, FlatList, ScrollView} from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Navbar from './Navbar';

const Search = () => {
    const [isLoaded]=useFonts({
        "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
      });
      const [IskeyboardOpen,setIskeyboardOpen]=useState(false);
      useEffect(() => {
        const keyboardlistner=Keyboard.addListener('keyboardDidShow',()=>{setIskeyboardOpen(true)});
        const keyboardhide=Keyboard.addListener('keyboardDidHide',()=>{setIskeyboardOpen(false)});
        return () => {
          keyboardlistner.remove();
          keyboardhide.remove();
        }
      }, [])
      
      
  return (
    <SafeAreaView style={{flex:1, paddingTop:10}}>
        <Navbar active='explore' />
        <View  style={[ Styles.boxShadow, Styles.flex3,{ marginLeft:15, marginRight:15,backgroundColor:'#F2F3F2', borderRadius:10, height:50}]}>
          <AntDesign name='search1' size={20} style={{marginLeft:10}} />
          <TextInput caretHidden={!IskeyboardOpen} cursorColor={'#53B175'} placeholder='Search Store' style={[Styles.fontFamily, Styles.width,{paddingLeft:15, paddingRight:40}]}></TextInput>
        </View>
    </SafeAreaView>
  )
}

export default Search

const Styles = StyleSheet.create({
    boxShadow:{
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 1 },  
        shadowOpacity: 0.8, 
        shadowRadius: 2,  
        elevation: 5, 
    },

    flex3:{
        flexDirection:'row', 
        alignItems:'center'
    },
    fontFamily:{
        fontFamily:'Roboto-Bold',
    },
    width:{
        width:'100%'
    },
})