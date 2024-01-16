import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Category_jewelery() {
  const navigation = useNavigation();
  const [jewelryProducts, setJewelryProducts] = useState([]);

  useEffect(() => {
    async function fetchJewelryProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
        const data = await response.json();
        setJewelryProducts(data);
      } catch (error) {
        console.error('Error fetching jewelry products:', error);
      }
    }

    fetchJewelryProducts();
  }, []);

  const navigateToProductDetail = (productId) => {
    navigation.navigate('ProductDetail', { productId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Jewelry Products</Text>
      <FlatList
        data={jewelryProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToProductDetail(item.id)}>
            <View style={styles.productContainer}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>Price: ${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginBottom: 5,
  },
  productTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
});
