import { StyleSheet, Text, View , Image, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, FlatList, ScrollView, Dimensions} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Navbar from './Navbar';

const MyFavourite = () => {
    const {width}=Dimensions.get('window');
    const [isLoaded]=useFonts({
        "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
        "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
        "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
        "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
      });
      const Products=[{
        id:'1',
        pName:'Organic Bananas',
        des:'7pcs, Priceg',
        price:'200',
        img:require('../assets/img/HomeScreen/banana.png'),
      },
      {
        id:'2',
        pName:'Red Apple',
        des:'1kg, Priceg',
        price:'150',
        img:require('../assets/img/HomeScreen/apple.png'),
      },
      {
        id:'3',
        pName:'Rice',
        des:'1kg, Priceg',
        price:'100',
        img:require('../assets/img/HomeScreen/rice.png'),
      },
      {
        id:'4',
        pName:'Ginger',
        des:'1kg, Priceg',
        price:'20',
        img:require('../assets/img/HomeScreen/ginger.png'),
      },
      {
        id:'5',
        pName:'Red Chili',
        des:'1kg, Priceg',
        price:'100',
        img:require('../assets/img/HomeScreen/redchili.png'),
      },
      
    ];
  return (
    <SafeAreaView style={{flex:1}}>
        <Navbar active='favourite' />
        <View style={{marginTop:2, marginBottom:20}}>
            <Text style={{textAlign:'center', textAlignVertical:'center', fontFamily:'Roboto-Bold', fontSize:20}}>Favourite</Text>
        </View>
        <ScrollView style={{borderTopWidth:1, borderColor:'#E2E2E2', paddingLeft:15, paddingRight:15, marginBottom:70}} >
            <TouchableWithoutFeedback >
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', borderBottomWidth:1, borderBottomColor:'#E2E2E2', height:140, width:'100%',paddingRight:10, height:100}}>
                    <View style={{width:'30%', height:'50%'}}>
                        <Image resizeMode='center' style={{width:'100%' , height:'100%'}} source={require('../assets/img/HomeScreen/apple.png')}></Image>
                    </View>
                    <View style={{width:'75%', paddingLeft:10}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                            <View>
                                <Text style={{fontFamily:'Roboto-Bold', fontSize:20}}>Red Apple</Text>
                                <Text>1kg, price</Text>
                            </View>
                            <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'center', gap:10}}>
                                <Text style={{fontFamily:'Roboto-Bold', fontSize:20}}>$4.99</Text>
                                <TouchableOpacity>
                                    <Entypo name='chevron-right' size={25} color={'black'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
        <View style={[Styles.gaps, Styles.flex2,]}>
          <TouchableOpacity style={[Styles.flex2,{backgroundColor:'#53B175', width:'100%', height:70, borderRadius:15, position:'absolute', bottom:100}]}>
              <Text style={[Styles.baskettitle]}>Add All To Cart</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default MyFavourite

const Styles = StyleSheet.create({
    quant:{
        borderWidth:1,
        borderColor:'#E2E2E2', 
        width:40, 
        height:40, 
        borderRadius:15,
        textAlign:'center', 
        textAlignVertical:'center', 
        fontSize:20, 
        fontFamily:'Roboto-Bold', 
    },
    flex:{
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems:'center'
    },
    flex2:{
      flexDirection: 'row', 
      justifyContent: 'center',
      alignItems:'center'
     },
     baskettitle:{
      color:'white', 
      fontSize:20, 
      fontFamily:'Roboto-Medium'
     },
     gaps:{
      paddingLeft:15,
      paddingRight:15
     },
})