import { StyleSheet, Text, View , Image, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';


const Verification = ({navigation}) => {
    const [isFocus, setFocus]=useState(true);

    const [isLoaded]=useFonts({
        "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
    });
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
              setFocus(false);
            }
          );
          const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
              setFocus(true);
            }
          );
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      }
    }, [])
  return (
    <SafeAreaView>
        <View style={{ backgroundColor:'white', height:'100%'}}>
            <View style={{}} >
                <TouchableWithoutFeedback onPress={()=>navigation.goBack()} style={{backgroundColor:'red', width:100, height:100}}><Entypo name='chevron-left' size={35}></Entypo></TouchableWithoutFeedback>
            </View> 
            <Text style={{fontSize:25, fontFamily:'Roboto-Medium', marginTop:40, marginLeft:15}}>Enter your 4-digit code</Text>
            <Text style={{fontSize:15, fontFamily:'Roboto-Medium', marginTop:30, marginLeft:15, color:'#7C7C7C'}}>Code</Text>
            <View style={{paddingLeft:15, paddingRight:15}}>
                <TextInput caretHidden={isFocus}  keyboardType='numeric' placeholder='- - - -' style={{ fontSize:20,width:'100%', height:50, borderBottomWidth:1, borderColor:'#E2E2E2'}} ></TextInput>
            </View>
            <View style={{position:'absolute', bottom:20, display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%', paddingLeft:15, paddingRight:15}}>
                <TouchableWithoutFeedback >
                    <Text style={{color:'#53B175'}}>Resend Code</Text>
                </TouchableWithoutFeedback>
                <View style={{ backgroundColor:'#53B175', padding:15, borderRadius:30}}>
                  <TouchableWithoutFeedback style={{}} onPress={()=>{navigation.navigate('LocationPage')}}>
                      <AntDesign name='caretright' size={25} color={'white'} />
                  </TouchableWithoutFeedback>
                </View>
            </View>
            
        </View>
    </SafeAreaView>
  )
}

export default Verification

