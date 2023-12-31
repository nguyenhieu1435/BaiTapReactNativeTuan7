import { useState } from 'react'
import { View, Text, StatusBar, SafeAreaView, ScrollView, Pressable, Image, FlatList } from 'react-native'



export default function ChatWithSuplier({navigation}) {
    const [selectedID, setSelectedId] = useState(0);
    const [datas, setDatas] = useState([
        {
            name: "Ca nấu lẩu, nấu mì mini...",
            shopName: "Devang",
            isHotShop: true,
            img: require("../../../assets/ca_nau_lau.png")
        },
        {
            name: "1KG KHÔ GÀ BƠ TỎI",
            shopName: "LTD FOOD",
            isHotShop: true,
            img: require("../../../assets/ga_bo_toi.png")
        },
        {
            name: "Xe cần cẩu đa năng",
            shopName: "Thế giới đồ chơi",
            isHotShop: false,
            img: require("../../../assets/xa_can_cau.png")
        },
        {
            name: "Đồ chơi dạng mô hình",
            shopName: "Thế giới đồ chơi",
            isHotShop: false,
            img: require("../../../assets/do_choi_dang_mo_hinh.png")
        },
        {
            name: "Lãnh đạo giản đơn",
            shopName: "Minh Long Book",
            isHotShop: false,
            img: require("../../../assets/lanh_dao_gian_don.png")
        },
        {
            name: "Hiểu lòng trẻ con",
            shopName: "Minh Long Book",
            isHotShop: false,
            img: require("../../../assets/hieu_long_con_tre.png")
        },
        {
            name: "Donal Trump thiên tài lãnh đạo",
            shopName: "Minh Long Book",
            isHotShop: false,
            img: require("../../../assets/trump_1.png")
        },
        {
            name: "Xe cần cẩu đa năng",
            shopName: "Thế giới đồ chơi",
            isHotShop: false,
            img: require("../../../assets/xa_can_cau.png")
        },
        {
            name: "Đồ chơi dạng mô hình",
            shopName: "Thế giới đồ chơi",
            isHotShop: false,
            img: require("../../../assets/do_choi_dang_mo_hinh.png")
        },
        {
            name: "Lãnh đạo giản đơn",
            shopName: "Minh Long Book",
            isHotShop: false,
            img: require("../../../assets/lanh_dao_gian_don.png")
        },
        {
            name: "Hiểu lòng trẻ con",
            shopName: "Minh Long Book",
            isHotShop: false,
            img: require("../../../assets/hieu_long_con_tre.png")
        },
        {
            name: "Donal Trump thiên tài lãnh đạo",
            shopName: "Minh Long Book",
            isHotShop: false,
            img: require("../../../assets/trump_1.png")
        },
    ])
    const renderItemChat = (item, index)=>{
        return (
            <Pressable style={{flexDirection: "row", alignItems: "center", paddingVertical: 5
            , backgroundColor: selectedID == index ? "#fff" : "transparent"}}
                onPress={()=> setSelectedId(index)}
            >
                <View style={{flexDirection: "row", flex: 2}}>
                    <Image
                        source={item?.img}
                        resizeMode='contain'
                        style={{width: 74, height: 74, marginRight: 15, flex: 1}}
                    />
                    <View style={{flex: 2}}>
                        <Text style={{fontSize: 16, marginBottom: 14, width: "100%"}} numberOfLines={1}
                            
                        >{item.name}</Text>
                        <View style={{flexDirection: "row" ,alignItems: "center"}}>
                            <Text style={{marginRight: 5}}>Shop</Text>
                            <Text style={{color: item.isHotShop ? "#FF0E0E" : "#000"}}>{item.shopName}</Text>
                        </View>
                    </View>
                </View>
                <Pressable style={{flex: 1}}>
                    <Text style={{backgroundColor: "#F31111", color: "#fff"
                    , width: "70%", textAlign: "center", paddingVertical: 10, paddingHorizontal: 20
                    ,fontSize :18
                    }}>Chat</Text>
                </Pressable>
            </Pressable>
        )

    }
    const seperatorComponent = ()=>{
        return (
            <View style={{height: 0.5, width: "100%", backgroundColor: "#999"}}>

            </View>
        )
    }
  return (
    <View style={{flex: 1}}>
        <StatusBar/>
        <SafeAreaView style={{flex: 1, backgroundColor: "#e5e5e5"}}>
            <ScrollView
                style={{flex: 1}}
                stickyHeaderIndices={[0]}
            >
                <View>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"
                    , backgroundColor: "#1BA9FF", paddingHorizontal: 15, paddingVertical: 15}}>
                        <Pressable
                            onPress={()=>navigation.goBack()}
                        >
                            <Image
                                source={require("../../../assets/btnBack.png")}
                                resizeMode='contain'
                                style={{width: 24, height: 24}}
                            />
                           
                        </Pressable>
                        <Text style={{color: "#fff", fontSize: 18}}>Chat</Text>
                        <Pressable>
                            <Image
                                source={require("../../../assets/btnCart.png")}
                                style={{width: 28, height: 28}}
                                resizeMode='contain'
                            />
                        </Pressable>
                    </View>
                </View>
                <View style={{paddingHorizontal: 40, paddingVertical: 10}}>
                    <Text style={{fontSize: 16}}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
                </View>

                <FlatList
                    data={datas}
                    keyExtractor={(item, index)=> index}
                    renderItem={({item, index})=> renderItemChat(item, index)}
                    extraData={selectedID}
                    ItemSeparatorComponent={seperatorComponent}
                />
            </ScrollView>
        </SafeAreaView>
    </View>
  )
}