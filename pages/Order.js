import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Order({ route }) {
  const { product } = route.params;
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  const handlePayment = () => {
    // Xử lý thanh toán và thiết lập trạng thái thành công
    setIsPaymentSuccess(true);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Order Details:</Text>
      {isPaymentSuccess ? (
        <View>
          <Text style={styles.successMessage}>Thanh toán thành công!</Text>
        </View>
      ) : (
        <View style={styles.productInfo}>
          <Image source={{ uri: product.image }} style={styles.image} />
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>Price: ${product.price}</Text>
          <TouchableOpacity onPress={handlePayment} style={styles.paymentButton}>
            <Text style={{ color: 'white' }}>Thanh Toán</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 10,
  },
  paymentButton: {
    padding: 10,
    backgroundColor: 'green',
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
  successMessage: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
    textAlign: 'center',
  },
});
