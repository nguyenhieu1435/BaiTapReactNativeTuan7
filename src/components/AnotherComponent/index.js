import { View, Text, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'

export default function AnotherComponent() {
  return (
    <View style={{flex: 1}}>
        <StatusBar/>
        <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Text!</Text>
        </SafeAreaView>
    </View>
  )
}