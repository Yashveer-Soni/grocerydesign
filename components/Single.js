import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';

const Single = ({navigation}) => {
  const image = [
    {
      id: '1',
      img: require('../assets/img/HomeScreen/apple.png'),
    },
    {
      id: '2',
      img: require('../assets/img/HomeScreen/banana.png'),
    },
    {
      id: '3',
      img: require('../assets/img/HomeScreen/ginger.png'),
    },
    {
      id: '4',
      img: require('../assets/img/HomeScreen/redchili.png'),
    },
  ];

  const { width, height } = Dimensions.get('window');
  const scrollX = useRef(new Animated.Value(0)).current;
  const [animation]=useState(new Animated.Value(0));
  const [isCollapsed, setCollapsed]=useState(true);


  const RenderItem = ({ item }) => (
    <View style={{ width: width, height: 300, padding: 40 }}>
      <Image
        resizeMode='contain'
        style={{ width: '100%', height: '100%' }}
        source={item.img}
      />
    </View>
  );
  const CollapseData=()=>{
    isCollapsed?setCollapsed(false):setCollapsed(true);
  }
 

  return (
    <ScrollView>
      <View>
        <View
          style={[Styles.flex, Styles.gaps,Styles.container,]}>
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Entypo name='chevron-left' size={25} />
          </TouchableOpacity>
          <Entypo name='share' size={25} />
        </View>
        <View style={[Styles.FlatContainer,]}>
          <FlatList
            pagingEnabled
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={image}
            renderItem={RenderItem}
            keyExtractor={(item) => item.id}
          />
          <View style={[Styles.flex2]}>
            {image.map((data, i) => {
              const inputRange = [
                (i - 1) * width,
                i * width,
                (i + 1) * width,
              ];
              const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [5, 10, 5],
                extrapolate: 'clamp',
              });
              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: ['#B3B3B3', '#53B175', '#B3B3B3'],
                extrapolate: 'clamp',
              });

              return (
                <Animated.View key={data.id} style={{ backgroundColor: opacity, height: 5, width: dotWidth, marginLeft: 5, borderRadius: 10, }} />
              );
            })}
          </View>
        </View>
        <View style={[Styles.flex, Styles.gaps,{marginTop:10}]}>
            <View>
                <Text style={[Styles.titlestyle]}>Natural Red Apple</Text>
                <Text style={[Styles.tinydesc]}>1Kg, Price</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <AntDesign name='hearto' size={25}/>
                </TouchableOpacity>
            </View>   
        </View>
        <View style={[Styles.flex,Styles.container2]}>
            <View style={[Styles.flex2]}>
                <TouchableOpacity>
                    <AntDesign name='minus' size={25} />
                </TouchableOpacity>
                <Text style={[Styles.quant]}>1</Text>
                <TouchableOpacity style={{marginLeft:10}}>
                    <AntDesign name='plus' size={25} color={'green'} />
                </TouchableOpacity>
            </View>
            <Text style={[Styles.fontFamily,{fontSize:20}]}>
                $4.99
            </Text>
        </View>
        <View style={[Styles.pDetail]}>
            <TouchableOpacity  onPress={CollapseData}>
                <View  style={[Styles.flex,{height:40}]}>
                    <Text style={[Styles.tinydesc, Styles.fontFamily,]}>Product Detail</Text>
                    <AntDesign name={isCollapsed?'down':'up'} size={15} />
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                <View>
                    <Text style={{color:'#7C7C7C'}}>Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sam</Text>
                </View>
            </Collapsible>
        </View>
      </View>
        <View style={[Styles.gaps,{marginTop:15}]}>
            <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}} style={[Styles.flex2,{backgroundColor:'#53B175', width:'100%', height:70, borderRadius:15}]}>
                    <Text style={[Styles.baskettitle]}>Add To Basket</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

const Styles=StyleSheet.create({
   container:{
    position: 'absolute',
    zIndex: 999, 
    width: '100%',
    top: 40
   },
   fontFamily:{
    fontFamily:'Roboto-Bold'
   },
   container2:{
    marginLeft:15, 
    marginRight:15, 
    marginTop:20 , 
    borderBottomWidth:1, 
    borderColor:'#E2E2E2', 
    paddingBottom:20
   },
   FlatContainer:{
    backgroundColor: '#F2F3F2',
    paddingBottom: 25,  
    borderBottomLeftRadius: 30,  
    borderBottomRightRadius: 30,
   },
   flex:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   },
   flex2:{
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems:'center'
   },
   titlestyle:{
    fontSize:25, 
    fontFamily:'Roboto-Bold'
   },
   tinydesc:{
    fontSize:15
   },
   gaps:{
    paddingLeft:15,
    paddingRight:15
   },
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
    marginLeft:10
   },
   pDetail:{
    marginTop:15, 
    marginLeft:15, 
    marginRight:15,
    borderBottomWidth:1, 
    borderColor:'#E2E2E2', 
    paddingBottom:15
   },
   baskettitle:{
    color:'white', 
    fontSize:20, 
    fontFamily:'Roboto-Medium'
   },
})
export default Single;
