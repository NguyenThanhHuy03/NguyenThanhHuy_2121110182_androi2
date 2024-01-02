import React, { Component } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

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

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login</Text>
        <TextInput
          placeholder="Username"
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
          style={{ borderWidth: 1, width: 200, margin: 10, padding: 5 }}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          secureTextEntry={true}
          style={{ borderWidth: 1, width: 200, margin: 10, padding: 5 }}
        />
        <Button title="Login" onPress={this.handleLogin} />
      </View>
    );
  }
}

export default Login;
