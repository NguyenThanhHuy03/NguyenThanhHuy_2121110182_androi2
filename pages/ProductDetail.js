import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { CartContext } from './CartContext';
import { useNavigation } from '@react-navigation/native'; // Import hook điều hướng

export default function ProductDetail({ route }) {
  const { productId } = route.params;
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const navigation = useNavigation(); // Sử dụng hook navigation
  const [isPurchased, setIsPurchased] = useState(false); // Trạng thái mua hàng
  const handleAddToCart = () => {
    addToCart(product);
    alert(`Added ${product.title} to Cart`);
  };
  const handleBuyNow = () => {
    setIsPurchased(true);
    // Điều hướng sang trang Order khi mua hàng thành công
    navigation.navigate('Order', { product });
  };
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <View style={styles.container}>
      {product ? (
        <View>
          <Image source={{ uri: product.image }} style={styles.image} />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.price}>Price: ${product.price}</Text>

         {/* Add to Cart button */}
         <TouchableOpacity onPress={handleAddToCart} style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>

          {/* Buy Now button */}
          <TouchableOpacity onPress={handleBuyNow} style={[styles.button, { backgroundColor: 'blue' }]}>
            <Text style={[styles.buttonText, { color: 'white' }]}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
  },
  button: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  // Add more styles as needed
});
