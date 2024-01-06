import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // hoặc bất kỳ bộ icon nào bạn muốn sử dụng

export default function Header() {
  const navigation = useNavigation();

  const navigateToProductScreen = () => {
    navigation.navigate('Product'); // Điều hướng đến màn hình sản phẩm
  };
  const navigateToCartScreen = () => {
    navigation.navigate('Cart'); // Điều hướng đến màn hình sản phẩm
  };
  const navigateToHomeScreen = () => {
    navigation.navigate('Home'); // Điều hướng đến màn hình sản phẩm
  };
  return (
    <View style={styles.header}>
      <Image source={require('./images/tao-logo-shop-quan-ao-ny.jpg')} style={styles.logo} />

      <View style={styles.nav}>
        <Text style={styles.navItem} onPress={navigateToHomeScreen}>Trang chủ</Text>
        <Text style={styles.navItem} onPress={navigateToProductScreen}>Sản phẩm</Text>
      </View>
      <View style={styles.actions}>
        <Text style={styles.action}>Tìm kiếm</Text>
        <Text style={styles.action} onPress={navigateToCartScreen}>Giỏ hàng</Text>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 70, // Đặt chiều rộng của hình ảnh logo
    height: 70, // Đặt chiều cao của hình ảnh logo
    // resizeMode: 'contain', // Chế độ resize của hình ảnh
  },
  nav: {
    flexDirection: 'row',
  },
  navItem: {
    marginLeft: 20,
  },
  actions: {
    flexDirection: 'row',
  },
  action: {
    marginLeft: 20,
  },
});
