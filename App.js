import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatWithSuplier from './src/components/ChatWithSuplier';
import ListProduct from './src/components/ListProduct';
import { Octicons } from '@expo/vector-icons';
import AnotherComponent from './src/components/AnotherComponent';
import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: "#1BA9FF"}}}
        
      >

        <BottomTab.Screen name='ChatWithSuplier' component={ChatWithSuplier}
          
          options={{
            title: "",
            tabBarIcon: ({focused, color})=>{
            return <Octicons name="three-bars" size={24} color="black" />
          }}}
        />

        <BottomTab.Screen name='ListProduct' component={ListProduct}
          options={{
            title: "",
            tabBarIcon: ({focused, color})=>{
              return <Octicons name="home" size={24} color="black" />
            }
          }}
        />
         <BottomTab.Screen name='AnotherComponent' component={AnotherComponent}
          options={{
            title: "",
            tabBarIcon: ({focused, color})=>{
              return <Ionicons name="md-return-up-back-sharp" size={24} color="black" />
            }
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

