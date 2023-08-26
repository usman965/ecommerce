import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux"
import { QuantityChangeButtons } from "./QuantityChangeButtons"
import { useNavigation } from "@react-navigation/native"
import { ROUTES_NAMES } from "../utils/constants"


const CardItem = ({ item }) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()


    return (


        <View style={{
            backgroundColor: 'white',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 4,
            elevation: 5,
            flex: 1,
            marginHorizontal: 5,
            marginBottom: 10,

            padding: 10
        }}>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES_NAMES.itemDetail, { id: item.id })}>
                <Image source={{ uri: item.image }}
                    resizeMode="center" style={{ width: "100%", height: 200 }} />

            </TouchableOpacity>

            <Text style={{ color: "black", fontWeight: "600", marginVertical: 6 }}>
                {item.title}
            </Text>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                <Text style={{ color: "black" }}>
                    ${" " + item.price}
                </Text>

                <QuantityChangeButtons item={item} />

            </View>


            {/* <TouchableOpacity onPress={() => { dispatch({ type: "ADD_TO_CART" }) }}>
                <Text>hadgsdcbdjbcjdbckdjwkchj</Text>
            </TouchableOpacity> */}


        </View>
    )
}
export default CardItem