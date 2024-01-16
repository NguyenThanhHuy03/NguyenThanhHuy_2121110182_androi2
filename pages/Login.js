import React, { Component } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleLogin = () => {
    // Xử lý đăng nhập ở đây, có thể gửi dữ liệu đến server hoặc thực hiện xác thực
    const { username, password } = this.state;
    console.log('Username:', username);
    console.log('Password:', password);
    // Gọi hàm xử lý đăng nhập từ props hoặc navigation
    // Ví dụ: this.props.handleLogin(username, password);
  };

  handleSignUp = () => {
    // Xử lý khi nhấn vào liên kết "Tạo tài khoản"
    console.log('Navigate to SignUp');
    // Thực hiện điều hướng đến màn hình đăng ký
   this.props.navigation.navigate('Signup');
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login</Text>
        <TextInput
          placeholder="Username"
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          secureTextEntry={true}
          style={styles.input}
        />
        <Button title="Login" onPress={this.handleLogin} />

        {/* Dòng chữ màu xanh tới Signup */}
        <TouchableOpacity onPress={this.handleSignUp}>
          <Text style={styles.signUpLink}>Tạo tài khoản ?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    width: 200,
    margin: 10,
    padding: 5,
  },
  signUpLink: {
    color: 'blue',
    marginTop: 10,
  },
});

export default Login;
