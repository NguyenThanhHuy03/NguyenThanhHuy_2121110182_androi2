import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Body from './component/Body';
import Header from './component/Header';
import Footer from './component/Footer';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { CartProvider } from './pages/CartContext';
import ProductDetail from './pages/ProductDetail';
import Order from './pages/Order';
import Category_jewelery from './pages/categories/Category_jewelery';
import Category from './pages/categories/Category';
import Category_electronics from './pages/categories/Category_electronics';
import Category_men from './pages/categories/Category_men';
import Category_women from './pages/categories/Category_women';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="Order" component={Order} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Category_jewelery" component={Category_jewelery} />
          <Stack.Screen name="Category_electronics" component={Category_electronics} />
          <Stack.Screen name="Category_men" component={Category_men} />
          <Stack.Screen name="Category_women" component={Category_women} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
