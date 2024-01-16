import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Product() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');

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

  // Hàm xử lý khi người dùng thay đổi nội dung ô tìm kiếm
  const handleSearchInputChange = (text) => {
    setSearchInput(text);
  };

  // Lọc sản phẩm dựa trên nội dung tìm kiếm
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm sản phẩm..."
        placeholderTextColor="#666"
        value={searchInput}
        onChangeText={handleSearchInputChange}
      />
      <ScrollView style={styles.productList}>
        {filteredProducts.map((product) => (
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchInput: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
    marginBottom: 10,
  },
  productList: {
    flex: 1,
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
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
  productName: {
    fontSize: 18,
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
  },
});
