import axios from "axios"
import React from "react"
import { FlatList, View } from "react-native"
import { useSelector } from "react-redux"
import CartItem from "../../components/CartItem"
import CustomHeader from "../../components/CustomHeader"
import { ROUTES_NAMES } from "../../utils/constants"
import commonStyles from "../../styling"



const MyCart = () => {
    const cartItems = useSelector(state => state.cartReducer)


    return (

        <View
            style={commonStyles.container}>
            <CustomHeader nameOfPage={ROUTES_NAMES.myCart} />
            <FlatList
                renderItem={({ item }) => item !== "totalPrice" && < CartItem item={cartItems[item]} />}
                data={Object.keys(cartItems)}
                keyExtractor={(item) => item}
                numColumns={1}
            />

        </View>
    )
}

export default MyCart;

