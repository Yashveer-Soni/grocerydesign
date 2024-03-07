import { StyleSheet, Text, View , Image, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Dimensions} from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import {Picker} from '@react-native-picker/picker';

const LocationPage = ({navigation}) => {
    const [selectedLanguage, setSelectedLanguage] = useState('Jaipur');
    const pickerRef=useRef();
    const [isLoaded]=useFonts({
        "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
    });
    
    

  return (
    <SafeAreaView>
    <View style={{ backgroundColor:'white', height:'100%'}}>
        <View style={{}} >
            <TouchableWithoutFeedback onPress={()=>navigation.goBack()} style={{backgroundColor:'red', width:100, height:100}}><Entypo name='chevron-left' size={35}></Entypo></TouchableWithoutFeedback>
        </View> 
        <View style={{width:'100%', height:200}}>
            <Image resizeMode='center' style={{flex:1, width:'100%', height:'100%'}} source={require ('../assets/img/Locationillustration.png')} />
        </View>
        <View style={{paddingLeft:15, paddingRight:15, marginTop:20}}>
            <Text style={{textAlign:'center', fontSize:25, fontFamily:'Roboto-Bold'}}>Select Your Location</Text>
            <Text style={{textAlign:'center', fontSize:15,color:'#7C7C7C', fontFamily:'Roboto-Regular', marginTop:10}}>Switch on your location to stay in tune with what’s happening in your area</Text>
        </View>
        <View style={{paddingRight:15, paddingLeft:15, marginTop:15}}>
            <View style={{borderBottomWidth:1, borderColor:'#E2E2E2'}}>
                <Text style={{ fontSize:15, fontFamily:'Roboto-Bold', color:'#7C7C7C'}}>Your Zone</Text>
                <Picker style={{marginLeft:-15, marginRight:-15, marginTop:-10}} ref={pickerRef} selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
                    <Picker.Item label="Jaipur" value="Jaipur" />
                </Picker>
            </View>
        </View>
        <View style={{paddingRight:15, paddingLeft:15, marginTop:15}}>
            <View style={{borderBottomWidth:1, borderColor:'#E2E2E2', paddingBottom:15}}>
                <Text style={{ fontSize:15, fontFamily:'Roboto-Bold', color:'#7C7C7C'}}>Enter Your Pin Code</Text>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', marginTop:10}}>
                    <TextInput placeholder='' style={{borderWidth:2, borderColor:'#E2E2E2', borderRadius:5, paddingLeft:10, paddingRight:10, width:'50%', height:40}} />
                    <TouchableOpacity >
                        <Text style={{backgroundColor:'#53B175', height:40,marginLeft:30, width:60, textAlign:'center', textAlignVertical:'center', color:'white', fontSize:15, fontWeight:'bold', fontFamily:'Roboto-Bold', borderRadius:5}}>Verify</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={{paddingLeft:15, paddingRight:15, marginTop:50}}>
            <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}} style={{backgroundColor:'#53B175', width:'100%', height:70, justifyContent:'center', alignItems:'center', borderRadius:15}}>
                <Text style={{color:'white', fontSize:20, fontFamily:'Roboto-Medium'}}>Submit</Text>
            </TouchableOpacity>
        </View>
    </View>
</SafeAreaView>
  )
}

export default LocationPage

const styles = StyleSheet.create({})