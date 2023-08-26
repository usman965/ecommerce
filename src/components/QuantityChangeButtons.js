import React, { useEffect } from "react"
import { Text, TouchableOpacity, View } from "react-native"


import EntypoIcons from "react-native-vector-icons/Entypo"
import AntDesignIcons from "react-native-vector-icons/AntDesign"
import { useDispatch, useSelector } from "react-redux"
import { REDUCERS_NAME } from "../store/reducers-names"
import commonStyles from "../styling"


export const QuantityChangeButtons = ({ item }) => {
    const dispatch = useDispatch()
    const cartItemQuantity = useSelector(state => state?.cartReducer[item.id]?.totalQuantity)



    return (
        <View style={[commonStyles.flexDirectionRow]}>
            <TouchableOpacity style={commonStyles.cartChangeButton} onPress={() => {
                if (cartItemQuantity > 0) dispatch({ type: REDUCERS_NAME.cart.removeFromCart, payload: item })
            }}>

                <AntDesignIcons name="minus" color={"white"} size={20} style={commonStyles.fontBold} />
            </TouchableOpacity>
            <Text style={[commonStyles.text,commonStyles.marginHorizontalSmall]}>
                {cartItemQuantity ?? 0}
            </Text>

            <TouchableOpacity style={commonStyles.cartChangeButton}
                onPress={() => {
                    dispatch({ type: REDUCERS_NAME.cart.addToCart, payload: item })
                }}

            >
                <EntypoIcons name="plus" color={"white"} size={20} />
            </TouchableOpacity>
        </View>
    )
}
