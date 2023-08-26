import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { useDispatch } from "react-redux"
import { QuantityChangeButtons } from "./QuantityChangeButtons"
import { useNavigation } from "@react-navigation/native"
import { ROUTES_NAMES } from "../utils/constants"
import commonStyles from "../styling"


const CartItem = ({ item }) => {
    const navigation = useNavigation()

    return (


        <View style={commonStyles.cardShadow}>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES_NAMES.itemDetail, { id: item.id })}>
                <Image source={{ uri: item.image }}
                    resizeMode="center" style={commonStyles.image} />

            </TouchableOpacity>

            <Text style={commonStyles.text}>
                {item.title}
            </Text>

            <View style={commonStyles.flexRowSpaceBetween}>

                <Text style={commonStyles.text}>
                    Total Price ${" " + +parseFloat(item.totalPrice).toFixed(2)}
                </Text>

                <QuantityChangeButtons item={item} />

            </View>




        </View>
    )
}
export default CartItem