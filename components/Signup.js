import { StyleSheet, Text, View , Image, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';


const Signup = ({navigation}) => {
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
    <SafeAreaView style={styles.container}>
        <View style={{ flex:1,backgroundColor:'white'}}>
            <View style={{zIndex:999}} >
            </View>
                {
                    isFocus?(
                    <View style={{width:'100%', height:550, backgroundColor:'grey', marginTop:-200}}>
                        <Image resizeMode='cover' style={{flex:1, width:'100%', height:'100%', zIndex:-55}} source={require ('../assets/img/fruitbasket.jpg')} />
                    </View>
                    ):null
                }
                {
                    isFocus?(
                    <View style={{paddingLeft:15}}>
                        <Text style={styles.font}>Get your groceries {'\n'}with Ramjeet</Text>
                    </View>
                    ):(
                        <Text style={{fontSize:25, fontFamily:'Roboto-Medium', marginTop:40, marginLeft:15}}>Enter your mobile number</Text>
                    )
                }
                   
               
                <View style={{paddingLeft:15, marginTop:15}}>
                    <Text>Mobile Number</Text>
                    <View style={[styles.displayFlex,{borderBottomWidth:1,borderColor:'#E2E2E2', justifyContent:'flex-start', height:50}]}>
                        <View style={[styles.displayFlex,{justifyContent:'flex-start'}]}>
                            <View style={{width:20, height:20}}>
                                <Image resizeMode='center' style={[styles.flex, styles.size]} source={require ('../assets/icon/indiaflag.png')} ></Image>
                            </View>
                            <Text style={{marginLeft:5, fontSize:20}}>+91</Text>
                        </View>
                        <TextInput caretHidden={isFocus}  keyboardType='numeric' placeholder='Your Phone Number' style={{marginLeft:10, fontSize:20,width:'70%', height:50}} ></TextInput>
                    </View>
                </View>
                <View style={{paddingLeft:15, paddingRight:15, height:'100%', marginTop:30}} onPress={()=>{setFocus(true)}}>
                    <Text style={{textAlign:'center', height:50}}>Or Connect with social media</Text>
                    <TouchableWithoutFeedback>
                        <View style={[styles.displayFlex,{ justifyContent:'space-evenly',backgroundColor:'#5383EC', height:70, borderRadius:20}]}>
                            <AntDesign name='google' size={25} color={'white'} /><Text style={{color:'white', fontSize:20, fontFamily:'Roboto-Bold'}}>Continue With Google</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                {
                    !isFocus?(
                    <View style={{position:'absolute', bottom:20, right:20, backgroundColor:'#53B175', padding:15, borderRadius:30}}>
                        <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Verification')}}>
                            <AntDesign name='caretright' size={25} color={'white'} />
                        </TouchableWithoutFeedback>
                    </View>
     
                    ):null
                }
        </View>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFF',
        flex:1
    },
    font:{
        fontFamily:'Roboto-Bold',
        fontSize:20,
        letterSpacing:3
    },
    flex:{
        flex:1,
    },
    size:{
        width:'100%',
        height:'100%'
    },
    displayFlex:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row'
    }
})