import { StyleSheet, Text, View , Image, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, FlatList, ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Navbar from './Navbar';

const HomeScreen = ({navigation}) => {
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
  const category=[{
    id:'1',
    pName:'Pulses',
    img:require('../assets/img/HomeScreen/pulses.png'),
  },
  {
    id:'2',
    pName:'Rice',
    img:require('../assets/img/HomeScreen/rice.png'),
  },
];


  const RenderItem=({item})=>(
        <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Single')}}>
          <View style={{borderWidth:1, borderColor:'#ECECEC', width:150, borderRadius:15, padding:15}}>
            <View style={{height:100}}>
              <Image resizeMode='center' style={[Styles.width, Styles.height]} source={item.img}  />
            </View>
            <Text style={[Styles.fontFamily, Styles.fontSize,{marginTop:5}]}>{item.pName}</Text>
            <Text style={{fontFamily:'Roboto-Regular', fontSize:14, color:'grey'}}>{item.des}</Text>
            <View style={[Styles.flex2]}>
              <Text style={[Styles.fontFamily,{fontSize:20}]}>₹{item.price}</Text>
              <TouchableOpacity style={{backgroundColor:'#53B175', borderRadius:15, padding:10}}>
                <AntDesign name='plus' size={25} color={'white'} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
  );
  const RenderItem2=({item})=>(
      <View>
        <TouchableOpacity style={[ Styles.flex3,{ backgroundColor:'#F8A44C', borderRadius:15, width:250, height:120}]}>
          <View style={{width:100, height:100, marginLeft:15}}>
            <Image resizeMode='center' style={[Styles.width, Styles.height]} source={item.img}></Image>
          </View>
         <Text style={[Styles.fontFamily,{fontSize:25, marginLeft:15}]}>{item.pName}</Text>
        </TouchableOpacity>
      </View>
  )
  return (
    <SafeAreaView style={{}}>
      <Navbar active='homescreen' />
      <ScrollView contentContainerStyle={{paddingTop:11, paddingBottom:80}}>
          <TouchableWithoutFeedback onPress={()=>{navigation.navigate('Search')}}>
            <View style={[ Styles.boxShadow, Styles.flex3,{ marginLeft:15, marginRight:15,backgroundColor:'#F2F3F2', borderRadius:10, height:50}]}>
              <AntDesign name='search1' size={20} style={{marginLeft:10}} />
              <Text style={[Styles.fontFamily, Styles.width,{paddingLeft:15, paddingRight:40, color:'grey'}]}> Search Store</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={[Styles.flex2, Styles.gap,{ marginTop:20}]}>
            <Text style={[Styles.fontFamily,{width:'50%', fontSize:18}]}>Exclusive Offer</Text>
            <TouchableOpacity>
              <Text style={[Styles.fontFamily, Styles.width, Styles.color,{fontSize:18}]}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={Products} renderItem={RenderItem} keyExtractor={(item)=>item.id} contentContainerStyle={[Styles.gap,{gap:10, marginTop:15}]}  />
          <View style={[Styles.flex2, Styles.gap,{marginTop:20}]}>
            <Text style={[Styles.fontFamily, { width:'50%', fontSize:18}]}>Best Selling</Text>
            <TouchableOpacity>
              <Text style={[Styles.fontFamily, Styles.width, Styles.color,{fontSize:18}]}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={Products} renderItem={RenderItem} keyExtractor={(item)=>item.id} contentContainerStyle={[Styles.gap,{gap:10, marginTop:15}]}  />
          <View style={[ Styles.flex2, Styles.gap,{marginTop:20}]}>
            <Text style={[Styles.fontFamily, Styles.fontSize,{width:'50%'}]}>Groceries</Text>
            <TouchableOpacity >
              <Text style={[Styles.fontFamily, Styles.width, Styles.color,{fontSize:18}]}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList showsHorizontalScrollIndicator={false} horizontal={true} data={category} renderItem={RenderItem2} keyExtractor={(item)=>item.id} contentContainerStyle={[Styles.gap,{gap:10, marginTop:15}]}  />
          <View style={[Styles.flex2,{flexWrap:'wrap', padding:8}]}>
              {
                Products.map((item)=>(
                  <TouchableWithoutFeedback key={item.id}  onPress={()=>{navigation.navigate('Single')}}>
                    <View style={{borderWidth:1, borderColor:'#ECECEC', width:'49%', borderRadius:15, padding:15, marginTop:5}}>
                      <View style={{height:100}}>
                        <Image resizeMode='center' style={[Styles.width, Styles.height]} source={item.img}  />
                      </View>
                      <Text style={[Styles.fontFamily, Styles.fontSize,{marginTop:5}]}>{item.pName}</Text>
                      <Text style={{fontFamily:'Roboto-Regular', fontSize:14, color:'grey'}}>{item.des}</Text>
                      <View style={[Styles.flex2]}>
                        <Text style={[Styles.fontFamily,{fontSize:20}]}>₹{item.price}</Text>
                        <TouchableOpacity style={{backgroundColor:'#53B175', borderRadius:15, padding:10}}>
                          <AntDesign name='plus' size={25} color={'white'} />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                ))
              }
          </View>
      </ScrollView>
    </SafeAreaView>

  )
}

const Styles=StyleSheet.create(
  {
    color:{
      color:'#53B175'
    },
    flex:{
      flexDirection:'column', 
      justifyContent:'center', 
      alignItems:'center'
    },
    flex2:{
      flexDirection:'row', 
      justifyContent:'space-between', 
      alignItems:'center'
    },
    flex3:{
      flexDirection:'row', 
      alignItems:'center'
    },
    fontFamily:{
      fontFamily:'Roboto-Bold',
    },
    fontSize:{
      fontSize:15
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
    height:{
      height:'100%'
    }
  }
)

export default HomeScreen

