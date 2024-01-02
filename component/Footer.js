import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Footer() {
  const navigation = useNavigation();

  const navigateToProductScreen = () => {
    navigation.navigate('Product'); // Điều hướng đến màn hình sản phẩm
  };
  const navigateToCartScreen = () => {
    navigation.navigate('Cart'); // Điều hướng đến màn hình sản phẩmjjjkjjj
  };
  const navigateToHomeScreen = () => {
    navigation.navigate('Home'); // Điều hướng đến màn hình sản phẩmdfrdhdhwgit
  };
  return (

    <View style={styles.footer}>
      {/* Các liên kết điều hướng */}
      <View style={styles.nav}>
        <TouchableOpacity style={styles.navItem} onPress={navigateToHomeScreen}>
          <Text>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={navigateToProductScreen}>
          <Text >Sản phẩm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={navigateToCartScreen}>
          <Text>Giỏ hàng</Text>
        </TouchableOpacity>
        {/* Thêm các liên kết điều hướng khác tùy thuộc vào ứng dụng của bạn */}
      </View>

      {/* Thông tin liên hệ */}
      <View style={styles.contactInfo}>
        <Text style={styles.contactText}>Liên hệ:</Text>
        <Text style={styles.contactText}>Địa chỉ: Số 123, Đường ABC, Thành phố XYZ</Text>
        <Text style={styles.contactText}>Email: contact@example.com</Text>
        {/* Thêm các thông tin liên hệ khác tùy thuộc vào ứng dụng của bạn */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
    paddingHorizontal: 100,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  contactInfo: {
    alignItems: 'center',
  },
  contactText: {
    marginBottom: 5,
    textAlign: 'center',
  },
});
