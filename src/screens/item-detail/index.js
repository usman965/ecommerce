import axios from "axios"
import React, { useEffect, useState } from "react"
import { Image, Text, View } from "react-native"
import { QuantityChangeButtons } from "../../components/QuantityChangeButtons"
import CustomHeader from "../../components/CustomHeader"
import { ROUTES_NAMES } from "../../utils/constants"
import ApiCallerService from "../../networking"
import commonStyles from "../../styling"



const apiService = new ApiCallerService('https://fakestoreapi.com/products');


const ItemDetail = ({ route }) => {
    const [itemDetail, setItemDetail] = useState({})

    useEffect(() => {

        apiService.get(`/${route.params.id}`)
            .then(resp => {
                setItemDetail(resp)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, [route.params.id])


    return (

        <View
            style={commonStyles.container}
        >
            <CustomHeader nameOfPage={ROUTES_NAMES.itemDetail} />
            <View >
                <Image source={{ uri: itemDetail?.image }}
                    resizeMode="center" style={commonStyles.image} />

                <Text style={commonStyles.textTitle}>
                    {itemDetail?.title}
                </Text>

                <Text style={[commonStyles.text,commonStyles.marginVerticalSmall]}>
                    {itemDetail?.description}
                </Text>

                <View style={commonStyles.flexRowSpaceBetween}>
                    <Text style={commonStyles.text}>
                        Price ${" " + itemDetail?.price}
                    </Text>
                    <QuantityChangeButtons item={itemDetail} />
                </View>

            </View>
        </View>


    )
}

export default ItemDetail;



