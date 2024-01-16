import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function BottomNavBar() {
  const navigation = useNavigation();

  const navigateToHomeScreen = () => {
    navigation.navigate('Home');
  };

  const navigateToProductScreen = () => {
    navigation.navigate('Product');
  };

  const navigateToCartScreen = () => {
    navigation.navigate('Cart');
  };

  const navigateToCategoryScreen = () => {
    navigation.navigate('Category');
  };

  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.bottomNavBar}>
      <TouchableOpacity style={styles.navItem} onPress={navigateToHomeScreen}>
        <Icon name="home" size={24} color="black" />
        <Text>Trang chủ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={navigateToProductScreen}>
        <Icon name="shopping-bag" size={24} color="black" />
        <Text>Sản phẩm</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={navigateToCategoryScreen}>
        <Icon name="th-large" size={24} color="black" />
        <Text>Danh mục</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={navigateToCartScreen}>
        <Icon name="shopping-cart" size={24} color="black" />
        <Text>Giỏ hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={ navigateToLoginScreen}>
        <Icon name="user" size={24} color="black" />
        <Text>Tài khoản</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNavBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    height: 60,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
