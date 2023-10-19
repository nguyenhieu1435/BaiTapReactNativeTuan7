import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatWithSuplier from './src/components/ChatWithSuplier';
import ListProduct from './src/components/ListProduct';

const BottomTab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{headerShown: false}}>
        <BottomTab.Screen name='ListProduct' component={ListProduct}/>
        <BottomTab.Screen name='ChatWithSuplier' component={ChatWithSuplier}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

