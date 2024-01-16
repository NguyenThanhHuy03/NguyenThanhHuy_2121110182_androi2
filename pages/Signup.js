import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Xử lý logic đăng ký tài khoản ở đây
    console.log('Username:', username);
    console.log('Password:', password);

    // Sau khi xử lý, bạn có thể điều hướng đến một màn hình khác
    // Ví dụ: navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SignUp</Text>
      <TextInput
        style={styles.input}
        placeholder="UserName"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="PassWord"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Button title="Đăng ký" onPress={handleSignUp} />

      <View style={styles.signInLinkContainer}>
        <Text style={styles.signInText}>Đã có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.signInLink}>Đăng nhập ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    width: '100%',
    padding: 10,
    marginBottom: 15,
  },
  signInLinkContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  signInText: {
    fontSize: 16,
  },
  signInLink: {
    fontSize: 16,
    color: 'blue',
  },
});

export default Signup;
