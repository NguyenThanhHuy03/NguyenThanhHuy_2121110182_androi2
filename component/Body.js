import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Home() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        alert(error.message);
      }
    };

    fetchData();
  }, []);

  const navigateToProductDetail = (productId) => {
    navigation.navigate('ProductDetail', { productId });
  };

  return (
    <ScrollView style={styles.container}>
      {products.map((product) => (
        
        <TouchableOpacity
          style={styles.productItem}
          onPress={() => navigateToProductDetail(product.id)}
          key={product.id}
        >
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{product.title}</Text>
            <Text style={styles.productPrice}>${product.price}</Text>
          </View>
        </TouchableOpacity>

      ))}
    </ScrollView>
  );
}

// ...

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productItem: {
    flexDirection: 'row', /* Hiển thị sản phẩm trên cùng một hàng */
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20, /* Thêm padding ngang */
    marginBottom: 10, /* Thêm khoảng trắng dưới sản phẩm */
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
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

