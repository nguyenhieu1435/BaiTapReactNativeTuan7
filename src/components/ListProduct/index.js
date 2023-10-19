import { View, Text, StatusBar, SafeAreaView, ScrollView, Pressable, Image, TextInput } from 'react-native'
import React from 'react'

export default function ListProduct() {
  return (
    <View style={{flex: 1}}>
        <StatusBar/>
        <SafeAreaView>
            <ScrollView>
                <View>
                    <View>
                        <Pressable>
                            <Image
                                source={require("../../../assets/btnBack.png")}
                                resizeMode='contain'
                                style={{width: 24, height: 24}}

                            />
                        </Pressable>
                        <View>
                            <Image
                                source={require("../../../assets/whh_magnifier.png")}
                                resizeMode='contain'
                                style={{width: 24, height: 24}}
                            />
                            <TextInput
                                placeholder='Dây cáp usb'

                            />
                        </View>
                        <Pressable style={{position: "relative"}}>
                            <Image
                                source={require("../../../assets/btnCart.png")}
                                resizeMode='contain'
                                style={{width: 24, height: 24}}

                            />
                            <Text>4</Text>
                        </Pressable>
                        <Pressable>
                            <Image
                                    source={require("../../../assets/ThreeDot.png")}
                                    resizeMode='contain'
                                    style={{width: 24, height: 24}}

                            />
                        </Pressable>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    </View>
  )
}