// Trong component Category_men.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Category_men = () => {
  const navigation = useNavigation();
  const [menProducts, setMenProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
        const data = await response.json();
        setMenProducts(data);
      } catch (error) {
        console.error('Error fetching men\'s clothing products:', error);
      }
    };

    fetchData();
  }, []);

  const navigateToProductDetail = (productId) => {
    navigation.navigate('ProductDetail', { productId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menProducts}
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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

export default Category_men;
