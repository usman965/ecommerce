import React, { useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import CardItem from "../../components/CardItem"
import CustomHeader from "../../components/CustomHeader"
import { ROUTES_NAMES } from "../../utils/constants"
import ApiCallerService from "../../networking"
import commonStyles from "../../styling"


const apiService = new ApiCallerService('https://fakestoreapi.com/products');

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([])
    
    
    useEffect(() => {
        apiService.get("/")
            .then(resp => {
                setAllProducts(resp)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, [])


    return (
        

        <View style={{ flex: 1 }}>
            <CustomHeader nameOfPage={ROUTES_NAMES.allProducts} toShowBackArrow={false} />
            <View style={commonStyles.container}>

                <FlatList
                    renderItem={({ item }) => <CardItem item={item} />}
                    data={allProducts}
                    numColumns={2}
                    keyExtractor={(item) => item.id}
                />
            </View>

        </View>


    )
}

export default AllProducts;

