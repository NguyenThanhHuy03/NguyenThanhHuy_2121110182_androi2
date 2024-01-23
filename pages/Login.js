import React, { useState } from 'react';
    import { Image, Keyboard, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
    import  Icon  from 'react-native-vector-icons/FontAwesome';
    import { useNavigation } from '@react-navigation/native';
    const Login = ( {navigation} ) => {
        const [useremail, setUserEmail] = React.useState('');
        const [password, setPassWord] = React.useState('');
        

        const navigateToSignupScreen = () => {
          navigation.navigate('Signup');
        };
      

        const formSignIn = () => {
            Keyboard.dismiss();
            
            // Gọi API để kiểm tra thông tin đăng nhập
            fetch('https://fakestoreapi.com/users')
                .then(response => response.json())
                .then(data => {
                    // Tìm người dùng trong dữ liệu API
                    const user = data.find(item => item.email === useremail);
        
                    if (user) {
                        // Kiểm tra mật khẩu
                        if (user.password === password) {
                            navigation.navigate('Home');
                        } else {
                            alert("Sai mật khẩu");
                        }
                    } else {
                        alert("Người dùng không tồn tại");
                    }
                })
                .catch(error => {
                    console.error('Lỗi gọi API:', error);
                });
        };

        return(
                    <View style={{flex: 1, marginVertical: 20, }}>
                        {/* header */}
                        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                            <Text style={{fontSize:30,
                                fontWeight: 'bold',
                                color: 'black',
                            }}>
                                Login
                            </Text>
                        </View>
                        {/* body */}
                        <View style={{flex:6, }}>
                            <View style={{margin:30, }}>
                                {/* username */}
                                <View style={{marginBottom:20}}>
                                    <View>
                                    <Text style={{color:'black', }}></Text>
                                    <View style={{flexDirection:'row',
                                                    borderBottomColor:'grey',
                                                    borderBottomWidth: 1,
                                                }}>
                                        <View style={{justifyContent:'center', 
                                                        alignItems:'center',
                                                        padding: 10,
                                                    }}>
                                        </View>
                                        <View style={{flex:1}}>
                                            <TextInput value={useremail}
                                                        onChangeText={text => setUserEmail(text)}
                                            placeholder='Email' />
                                        </View>
                                    </View>

                                    </View>
                                    {/* password */}
                                    <View>
                                    <Text style={{color:'black', }}></Text>
                                    <View style={{flexDirection:'row',
                                                    borderBottomColor:'grey',
                                                    borderBottomWidth: 1,
                                                }}>
                                        <View style={{justifyContent:'center', 
                                                        alignItems:'center',
                                                        padding: 10,
                                                    }}>
                                            
                                        </View>
                                        <View style={{flex:1}}>
                                            <TextInput secureTextEntry
                                                        value={password}
                                                        onChangeText={text => setPassWord(text)}
                                            placeholder='password' 
                                            />
                                        </View>
                                    </View>
                                    </View>
                                    <TouchableOpacity onPress={formSignIn}>
                                    <View style={{justifyContent:'center', 
                                                    alignItems:'center',
                                                    marginVertical: 20,
                                                    backgroundColor:'#000fff',
                                                    padding:10,
                                                    borderRadius:20,
                                                    width: 150,
                                                    marginLeft: 70                       
                                                }}>
                                            <TouchableHighlight > 
                                                <View>
                                                    <Text style={{color: 'white'}}>Login</Text>
                                                </View>
                                            </TouchableHighlight>
                                    </View>
                                    
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{color: 'black', textDecorationLine: 'underline'}}
                                            onPress={navigateToSignupScreen}>
                                            Tạo tài khoản?
                                        </Text>
                                    </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>          
                    </View>
       


        );
    };

    export default Login;