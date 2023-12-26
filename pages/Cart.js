import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CartContext } from './CartContext';

export default function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  // Render item trong giỏ hàng
  const renderCartItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>Price: ${item.price}</Text>
        <TouchableOpacity onPress={() => removeFromCart(index)} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>xoá</Text>
        </TouchableOpacity>
        {/* Các thông tin khác của sản phẩm */}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item, index) => index.toString()}
      />
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
  // Thêm các styles khác nếu cần
});
