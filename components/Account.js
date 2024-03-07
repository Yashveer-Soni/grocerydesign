import { StyleSheet, Text, View , Image, TextInput, TouchableWithoutFeedback, TouchableOpacity, Keyboard, FlatList, ScrollView, Dimensions} from 'react-native'
import React, { useState, useEffect } from 'react'
import { Ionicons, Entypo, AntDesign, MaterialCommunityIcons , MaterialIcons, Feather} from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Navbar from './Navbar';

const Account = ({navigation}) => {
    const {height}=Dimensions.get('window');
    
  return (
    <SafeAreaView style={{flex:1}}>
        <Navbar active='account' />
        <View style={{flex:1, flexDirection:'column'}}>
            <View style={{paddingLeft:15, paddingRight:15,flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:70}}>
                <View style={{width:50, height:50 , borderWidth:1, borderColor:'#E2E2E2', borderRadius:50}}>
                    <Image resizeMode='center' style={{width:'100%', height:'100%'}} source={require('../assets/img/HomeScreen/ginger.png')}></Image>
                </View>
                <View>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontSize:20, fontFamily:'Roboto-Bold'}}>Yashveer Soni</Text>
                        <TouchableWithoutFeedback>
                            <MaterialCommunityIcons style={{marginLeft:8, color:'#53B175'}} name='pencil-outline' size={20} />
                        </TouchableWithoutFeedback>
                    </View>
                    <Text>9414454702</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <MaterialIcons name='light-mode' size={20} />

                    <MaterialIcons name='dark-mode' size={20} />
                </View>
            </View>
            <View style={{height:height/2, paddingLeft:15, paddingRight:15, marginTop:20}}>
                <ScrollView>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderBottomWidth:1, borderTopWidth:1, borderColor:'#E2E2E2', height:50}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Feather name='shopping-bag' size={20} />
                                <Text style={{marginLeft:10, fontSize:18, fontFamily:'Roboto-Medium'}}>Orders</Text>
                            </View>
                            <View>
                                <Entypo name='chevron-right' size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderBottomWidth:1, borderColor:'#E2E2E2', height:50}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <MaterialCommunityIcons name='card-account-details-outline' size={20} />
                                <Text style={{marginLeft:10, fontSize:18, fontFamily:'Roboto-Medium'}}>My Details</Text>
                            </View>
                            <View>
                                <Entypo name='chevron-right' size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderBottomWidth:1, borderColor:'#E2E2E2', height:50}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Ionicons name='location-sharp' size={20} />
                                <Text style={{marginLeft:10, fontSize:18, fontFamily:'Roboto-Medium'}}>Delivery Address</Text>
                            </View>
                            <View>
                                <Entypo name='chevron-right' size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderBottomWidth:1, borderColor:'#E2E2E2', height:50}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Ionicons name='card-outline' size={20} />
                                <Text style={{marginLeft:10, fontSize:18, fontFamily:'Roboto-Medium'}}>Pyament Methods  </Text>
                            </View>
                            <View>
                                <Entypo name='chevron-right' size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderBottomWidth:1, borderColor:'#E2E2E2', height:50}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Ionicons name='notifications-outline' size={20} />
                                <Text style={{marginLeft:10, fontSize:18, fontFamily:'Roboto-Medium'}}>Notifications</Text>
                            </View>
                            <View>
                                <Entypo name='chevron-right' size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderBottomWidth:1, borderColor:'#E2E2E2', height:50}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <Ionicons name='help-circle-outline' size={20} />
                                <Text style={{marginLeft:10, fontSize:18, fontFamily:'Roboto-Medium'}}>Help</Text>
                            </View>
                            <View>
                                <Entypo name='chevron-right' size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderBottomWidth:1, borderColor:'#E2E2E2', height:50}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <AntDesign name='exclamationcircleo' size={20} />
                                <Text style={{marginLeft:10, fontSize:18, fontFamily:'Roboto-Medium'}}>About</Text>
                            </View>
                            <View>
                                <Entypo name='chevron-right' size={20} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={{paddingLeft:15, paddingRight:15}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}  style={{backgroundColor:'green', width:'100%', height:70,flexDirection:'row', justifyContent:'center', alignItems:'center', borderRadius:15}}>
                    <Text style={{color:'white', fontSize:20, fontFamily:'Roboto-Medium',}}>Sign In</Text>
                    <MaterialCommunityIcons name='location-exit' size={20} color={'white'} style={{marginLeft:10}} />
                </TouchableOpacity>
                <TouchableOpacity  style={{backgroundColor:'#FF004D', width:'100%', height:70,flexDirection:'row', marginTop:15, justifyContent:'center', alignItems:'center', borderRadius:15}}>
                    <Text style={{color:'white', fontSize:20, fontFamily:'Roboto-Medium',}}>Log Out</Text>
                    <MaterialCommunityIcons name='location-exit' size={20} color={'white'} style={{marginLeft:10}} />
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Account

const Styles = StyleSheet.create({})