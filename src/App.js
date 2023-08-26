import { StyleSheet } from 'react-native';
import React from 'react';

import { Provider } from 'react-redux';
import AllProducts from './screens/all-products.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES_NAMES } from './utils/constants';
import ItemDetail from './screens/item-detail';
import MyCart from './screens/my-cart';
import store from './store';


const StackNvigator = createNativeStackNavigator()

export default function App() {




  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNvigator.Navigator
          screenOptions={{ headerShown: false }}
        >
          <StackNvigator.Screen
            component={AllProducts}
            name={ROUTES_NAMES.allProducts}
            
          />
          <StackNvigator.Screen
            component={ItemDetail}
            name={ROUTES_NAMES.itemDetail} />
          <StackNvigator.Screen
            component={MyCart}
            name={ROUTES_NAMES.myCart} />
        </StackNvigator.Navigator>

      </NavigationContainer>
    </Provider>
  );
}

