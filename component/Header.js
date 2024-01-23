import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();


  const navigateToProductScreen = () => {
    navigation.navigate('Product');
  };

  const navigateToSearchScreen = () => {
    // Thêm hàm điều hướng đến màn hình tìm kiếm ở đây
    // Ví dụ: navigation.navigate('Search');
  };

  return (
    <View style={styles.header}>
      <Image source={require('./images/tao-logo-shop-quan-ao-ny.jpg')} style={styles.logo} />
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm sản phẩm..."
        placeholderTextColor="#666"
        onPress={navigateToSearchScreen}
      />
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
    width: 70,
    height: 70,
  },
  searchInput: {
    flex: 1,
    marginLeft: 20,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
});
