import { View, Text, StatusBar, SafeAreaView, ScrollView, Pressable, Image, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Octicons } from '@expo/vector-icons';


export default function ListProduct() {
    const [datas, setDatas] = useState([
        {
            name: "Cáp chuyển từ Cổng USB sang PS2 thuận tiện, rẻ và bền bỉ",
            star: 4,
            numOfReview: 15,
            price: 139230,
            salePercent: 0.39,
            img: require("../../../assets/giacchuyen1.png")
        },
        {
            name: "Cáp chuyển từ Cổng USB sang PS2 thuận tiện, rẻ và bền bỉ",
            star: 4,
            numOfReview: 15,
            price: 139230,
            salePercent: 0.39,
            img: require("../../../assets/daynguon1.png")
        },
        {
            name: "Cáp chuyển từ Cổng USB sang PS2 thuận tiện, rẻ và bền bỉ",
            star: 4,
            numOfReview: 15,
            price: 139230,
            salePercent: 0.39,
            img: require("../../../assets/dauchuyendoipsps21.png")
        },
        {
            name: "Cáp chuyển từ Cổng USB sang PS2 thuận tiện, rẻ và bền bỉ",
            star: 4,
            numOfReview: 15,
            price: 139230,
            salePercent: 0.39,
            img: require("../../../assets/dauchuyendoi1.png")
        },
        {
            name: "Cáp chuyển từ Cổng USB sang PS2 thuận tiện, rẻ và bền bỉ",
            star: 4,
            numOfReview: 15,
            price: 139230,
            salePercent: 0.39,
            img: require("../../../assets/carbusbtops21.png")
        },
        {
            name: "Cáp chuyển từ Cổng USB sang PS2 thuận tiện, rẻ và bền bỉ",
            star: 4,
            numOfReview: 15,
            price: 139230,
            salePercent: 0.39,
            img: require("../../../assets/daucam1.png")
        },
    ])
    const renderProductItem = (item, index)=>{
        return (
            <View style={{width: "50%", marginBottom: 15}}>
                <Image
                    source={item?.img}
                    resizeMode='contain'
                    style={{width: "100%", height: 100}}
                />
                <Text style={{paddingHorizontal: 15, marginTop: 8, fontWeight: "600"}} numberOfLines={2}>{item.name}</Text>
                <View style={{flexDirection: "row", alignItems: "center", paddingHorizontal: 18, marginVertical: 5}}>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        {
                            Array(5).fill(0).map((_, id)=>{
                                if (id+1 <= item.star){
                                    return (
                                        <Image
                                            source={require("../../../assets/StarYellow.png")}
                                            resizeMode='contain'
                                            style={{width: 13, height: 13}}

                                        />
                                    )
                                } else {
                                    return (
                                        <Image
                                            source={require("../../../assets/StarEmpty.png")}
                                            resizeMode='contain'
                                            style={{width: 13, height: 13}}

                                        />
                                    )
                                }
                            })
                        }
                    </View>
                    <Text>({item.numOfReview})</Text>
                </View>
                <View style={{flexDirection: "row", marginRight: 10}}>
                    <Text style={{fontWeight: "700", paddingHorizontal: 20}}>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: "vnd"}).format((item.price*(1-item.salePercent)))}
                    </Text>
                    <Text style={{color :"#666"}}>{item?.salePercent ? -1*(item.salePercent*100) : 0}%</Text>
                </View>
            </View>
        )
    }
  return (
    <View style={{flex: 1}}>
        <StatusBar/>
        <SafeAreaView style={{flex: 1}}>
            <ScrollView
                style={{flex: 1}}
                stickyHeaderIndices={[0]}
            >
                <View>
                    <View style={{backgroundColor: "#1BA9FF", paddingHorizontal: 15, paddingVertical: 14
                , flexDirection: "row" ,alignItems: "center", justifyContent: "space-between"}}>
                        <Pressable
                            onPress={()=>navigation.goBack()}
                        >
                            <Image
                                source={require("../../../assets/btnBack.png")}
                                resizeMode='contain'
                                style={{width: 24, height: 24}}

                            />
                        </Pressable>
                        <View style={{flexDirection: "row", backgroundColor: "#fff"
                        , paddingHorizontal: 10, paddingVertical: 4, width: "55%"}}>
                            <Image
                                source={require("../../../assets/whh_magnifier.png")}
                                resizeMode='contain'
                                style={{width: 24, height: 24}}
                            />
                            <TextInput
                                placeholder='Dây cáp usb'
                                placeholderTextColor={"#333"}
                                style={{marginLeft: 10, fontSize: 16}}
                            />
                        </View>
                        <Pressable style={{position: "relative"}}>
                            <Image
                                source={require("../../../assets/btnCart.png")}
                                resizeMode='contain'
                                style={{width: 28, height: 28}}

                            />
                            <Text style={{position: "absolute", padding: 5, backgroundColor: "#E93838"
                            ,paddingHorizontal: 10, paddingVertical: 5, borderRadius: 100
                            , top: -12, right: -12
                            , textAlign: "center", color :"#fff", fontSize: 12}}
                            
                            >4</Text>
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
                <FlatList
                    data={datas}
                    style={{paddingVertical: 20}}
                    keyExtractor={(item, index)=> index}
                    numColumns={2}
                    renderItem={({item, index})=> renderProductItem(item, index)}
                />
            </ScrollView>
        </SafeAreaView>
    </View>
  )
}