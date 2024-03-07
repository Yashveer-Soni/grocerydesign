import { View, Text, Image, StyleSheet, Dimensions, Animated } from 'react-native'
import React, {useEffect, useState} from 'react'
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';



const {width}=Dimensions.get('window');

const Splashscreen = ({navigation}) => {
    const fadeAnim=new Animated.Value(0);
    useEffect(()=>{
        let effectTrack=false;
        if(!effectTrack){
            const animation=Animated.timing(fadeAnim,{
                toValue:1,
                duration:3000,
                useNativeDriver:true,
            });
            animation.start(()=>{
                console.log('Animation completed');
                navigation.replace('GetStarted');
            });
            return ()=>{effectTrack=true}
        }
       
    },[fadeAnim, navigation]);
 
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
            <View style={style.container}>
                <Animated.View style={[style.flex,{opacity:fadeAnim}]}>
                    <View style={{width:100, height:100, display:'flex', justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../assets/icon/Logo.png')} resizeMode='contain' style={{flex:0.7,height:'100%', width:'100%'}}  />
                    </View>
                    <View >
                        <Text style={[style.font, style.fontFamily]}>Ramjeet</Text>
                        <Text style={{fontSize:15, color:'white', letterSpacing:4, marginTop:-10}}>Online Grocery</Text>
                    </View>
                </Animated.View>
            </View>
        )
    }

}

const style=StyleSheet.create({
    fontFamily:{
        fontFamily:'Roboto-Bold'
    },
    container:{
        backgroundColor:'#53B175',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    flex:{
        display:'flex',
        flexDirection:'row',
        width:width,
        height:80,
        justifyContent:'center',
        alignItems:'center',
    },
    font:{
        fontSize:55,
        color:'white',
    }
});
export default Splashscreen