import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/core';


const {height, width}=Dimensions.get('window');
const GetStarted = () => {
    const navigation=useNavigation();
    const [isLoaded]=useFonts({
        "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
    });
    if(isLoaded){
        return (
            <View style={{width:'100%', height:'100%'}}>
            <Image resizeMode='cover' source={require ("../assets/img/BackgroundDeliveryBoyImage.jpeg")} style={{flex:1,width:null, height:null}} />
            <LinearGradient
                colors={['transparent', 'rgba(0, 0, 0, 0.8)' ]}
                style={style.gradientBottom}
            />
            <View style={style.absolute}>
                <View style={{ display:'flex', justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:100, height:100, display:'flex', justifyContent:'center',alignItems:'center'}}>
                        <Image resizeMode='center' source={require ('../assets/icon/Logo.png')} style={{flex:1, width:'100%', height:'100%'}} />
                    </View>
                    <Text style={{fontFamily:'Roboto-Bold', color:'white', fontSize:50, textAlign:'center'}}>Welcome</Text>
                    <Text style={{fontFamily:'Roboto-Bold', color:'white', fontSize:50, textAlign:'center'}}>to our store</Text>
                    <Text style={{color:'#FCFCFC'}}>Ger your groceries in as fast as one hour</Text>
                </View>
                    <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}} style={{backgroundColor:'#53B175', width:width-40, height:70, justifyContent:'center', alignItems:'center', borderRadius:15}}>
                        <Text style={{color:'white', fontSize:20, fontFamily:'Roboto-Medium'}}>Get Started</Text>
                    </TouchableOpacity>
            </View>
            </View>
        )
    }
 
}

export default GetStarted;

const style=StyleSheet.create({
   absolute:{
    position:'absolute',
    bottom:40,
    height:height/2,
    width:width,
    display:'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
    flexDirection:'column'
   },
   gradientBottom: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%', // Adjust the height as needed
  },
});