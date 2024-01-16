import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CartContext } from './CartContext';

export default function Cart() {
  const { cartItems, removeFromCart,clearCart } = useContext(CartContext);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false); // Trạng thái hiển thị thông báo thanh toán thành công

  // Hàm tính tổng tiền trong giỏ hàng
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      if (item.price && !isNaN(item.price)) {
        return total + item.price; // Giả sử số lượng là 1 cho mỗi sản phẩm 
      }
      return total;
    }, 0).toFixed(2);
  };

  const handlePaymentSuccess = () => {
    setIsPaymentSuccess(true);
    clearCart();
  };

  // Render item trong giỏ hàng
  const renderCartItem = ({ item, index }) => (
    <View>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <View style={styles.itemInfo}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>Price: ${item.price}</Text>
          <TouchableOpacity onPress={() => removeFromCart(index)} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>xoá</Text>
          </TouchableOpacity>
        </View>
      </View>
      {!isPaymentSuccess && index === cartItems.length - 1 && (
        <View>
          <Text style={styles.totalPrice}>Total: ${getTotalPrice()}</Text>
          <TouchableOpacity onPress={handlePaymentSuccess} style={styles.paymentButton}>
            <Text style={styles.paymentButtonText}>Thanh Toán</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Cart</Text>
      {isPaymentSuccess ? (
        <View>
          <Text style={styles.successMessage}>Thanh toán thành công!</Text>
        </View>
      ) : (
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item, index) => index.toString()}
      />
      
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 10,
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    color: 'green',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    width: 40
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  paymentButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  paymentButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  successMessage: {
    fontSize: 18,
    color: 'green',
    marginTop: 10,
    textAlign: 'center',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // Thêm các styles khác nếu cần
});
