import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Category({ navigation }) {
  const navigateToCategoryJewelry = () => {
    navigation.navigate('Category_jewelery');
  };
  const navigateToCategoryElectronics = () => {
    navigation.navigate('Category_electronics');
  };
  const navigateToCategoryMen = () => {
    navigation.navigate('Category_men');
  };
  const navigateToCategoryWomen = () => {
    navigation.navigate('Category_women');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Danh mục</Text>
      <TouchableOpacity style={styles.optionGroup} onPress={navigateToCategoryJewelry}>
        <Text style={styles.optionText}>Danh mục Jewelry</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionGroup} onPress={navigateToCategoryElectronics}>
        <Text style={styles.optionText}>Danh mục Electronics</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionGroup} onPress={navigateToCategoryMen}>
        <Text style={styles.optionText}>Danh mục Men</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionGroup} onPress={navigateToCategoryWomen}>
        <Text style={styles.optionText}>Danh mục Women</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionGroup: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  optionText: {
    fontSize: 18,
  },
});
