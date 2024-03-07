import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splashscreen from './components/Splashscreen';
import GetStarted from './components/GetStarted';
import Signup from './components/Signup';
import Verification from './components/Verification';
import LocationPage from './components/LocationPage';
import HomeScreen from './components/HomeScreen';
import Single from './components/Single';
import Search from './components/Search';
import MyCart from './components/MyCart';
import MyFavourite from './components/MyFavourite';
import Navbar from './components/Navbar';
import Account from './components/Account';

const Stack=createStackNavigator();

export default function App() {
  const [isLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });
  console.log("bap");
  if(isLoaded){
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Splashscreen' screenOptions={{headerShown:false}}>
                <Stack.Screen name="Splashscreen" component={Splashscreen} />
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Verification" component={Verification} />
                <Stack.Screen name="LocationPage" component={LocationPage} />
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                <Stack.Screen name='Single' component={Single}/>
                <Stack.Screen name='Search' component={Search}/>
                <Stack.Screen name='MyFavourite' component={MyFavourite}/>
                <Stack.Screen name='MyCart' component={MyCart}/>
                <Stack.Screen name='Navbar' component={Navbar}/>
                <Stack.Screen name='Account' component={Account}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
  }
}


