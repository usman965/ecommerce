import React from "react"
import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity } from "react-native"
import AntDesignIcon from "react-native-vector-icons/AntDesign"
import IoniconsIcon from "react-native-vector-icons/Ionicons"

import { useSelector } from "react-redux"
import { ROUTES_NAMES } from "../utils/constants"
import commonStyles from "../styling"


const CustomHeader = ({ nameOfPage, toShowBackArrow = true }) => {
    const allCartItems = useSelector(state => state.cartReducer)
    const navigation = useNavigation()


    return (
        <View style={commonStyles.header}>

            <View style={commonStyles.flexRowAlignCenter}>

                {
                    toShowBackArrow &&
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>

                        <IoniconsIcon name="arrow-back" color={"black"} size={30} />
                    </TouchableOpacity>
                }
                <Text style={commonStyles.textTitle}>{nameOfPage}</Text>
            </View>

            <View style={commonStyles.flexRowAlignCenter}>
                <Text style={[commonStyles.textSubTitle,commonStyles.marginHorizontalSmall]}>Total : ${+parseFloat(allCartItems.totalPrice).toFixed(2)}</Text>
                
                <View>
                    <View style={commonStyles.cartNumber}>
                        <Text style={commonStyles.text}>
                            {(Object.keys(allCartItems)).length - 1}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => { navigation.navigate(ROUTES_NAMES.myCart) }}>
                        <AntDesignIcon name="shoppingcart" color={"black"} size={35} />
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}
export default CustomHeader