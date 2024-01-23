import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const User = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({
    email: 'don@gmail.com',
    username: 'donero',
    name: 'don',
    phone: '1-765-789-6734',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = await AsyncStorage.getItem('id');
        console.log('User Id', userId);

        if (!userId) {
          console.log('User Id null');
          return;
        }

        const responseAPI = await axios.get(`https://fakestoreapi.com/users/${userId}`);
        const res = responseAPI.data;

        if (res.success === true) {
          setUserData(res.data);
        }
      } catch (error) {
        console.log('Lỗi gọi API:', error);
      }
    };

    fetchUserData();
  }, []);

  const onLogout = async () => {
    try {
      await AsyncStorage.clear();
      navigation.replace('Login');
    } catch (error) {
      console.log('Lỗi khi đăng xuất:', error);
    }
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.label}>Thông tin người dùng</Text>
      <Text>Email: {userData.email}</Text>
      <Text>Username: {userData.username}</Text>
      <Text>Name: {userData.name}</Text>
      <Text>Phone: {userData.phone}</Text>

      {/* Thêm các thông tin khác của người dùng nếu cần */}

      <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
        <Text style={styles.logoutButtonText}>Đăng Xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'column',
    marginTop: 200
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 50
  },
  logoutButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
    marginTop: 100,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: 100,
  },
});

export default User;