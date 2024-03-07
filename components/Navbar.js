import { StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import {MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/core';


const Navbar = (props) => {
    const {active}=props;
    const navigation=useNavigation();
    const [isLoaded]=useFonts({
        "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
      });
  return (
 
    <View style={[Styles.flex2, Styles.gap,Styles.boxShadow, Styles.width,{position:'absolute', bottom:0, backgroundColor:'white', height:70, zIndex:999, borderTopLeftRadius:20, borderTopRightRadius:20}]}>
        <TouchableWithoutFeedback onPress={()=>{navigation.navigate('HomeScreen')}}>
            <View style={[Styles.flex]}>
                <MaterialCommunityIcons name='shopping-outline' size={25} color={active=='homescreen'?'#53B175':null} />
                <Text style={{color:active=='homescreen'?'#53B175':null, fontFamily:'Roboto-Bold'}}>Shop</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Search')}}>
            <View style={[Styles.flex]}>
                <MaterialCommunityIcons name='airplane-search' size={25} color={active=='explore'?'#53B175':null}  />
                <Text style={{color:active=='explore'?'#53B175':null, fontFamily:'Roboto-Bold'}}>Explore</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>{navigation.navigate('MyCart')}}>
            <View style={[Styles.flex]}>
                <MaterialCommunityIcons name='cart-outline' size={25} color={active=='mycart'?'#53B175':null}  />
                <Text style={{color:active=='mycart'?'#53B175':null, fontFamily:'Roboto-Bold'}}>Cart</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>{navigation.navigate('MyFavourite')}}>
            <View style={[Styles.flex]}>
                <MaterialCommunityIcons name='cards-heart-outline' size={25}  color={active=='favourite'?'#53B175':null} />
                <Text style={{color:active=='favourite'?'#53B175':null, fontFamily:'Roboto-Bold'}}>Favourite</Text>
            </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Account')}}>
            <View style={[Styles.flex]}>
                <MaterialCommunityIcons name='account-circle-outline' size={25} color={active=='account'?'#53B175':null}  />
                <Text style={{color:active=='account'?'#53B175':null, fontFamily:'Roboto-Bold'}}>Account</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>
   
  )
}

export default Navbar

const Styles = StyleSheet.create({
    flex2:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center'
      },
    gap:{
        paddingLeft:15,
        paddingRight:15
    },
    boxShadow:{
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 1 },  
        shadowOpacity: 0.8, 
        shadowRadius: 2,  
        elevation: 5, 
    },
    width:{
        width:'100%'
    },
    flex:{
        flexDirection:'column', 
        justifyContent:'center', 
        alignItems:'center'
    },
})