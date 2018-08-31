import React, {Component} from 'react';
import {TouchableOpacity, Image, View, Platform, StyleSheet, StatusBar, ActivityIndicator, AsyncStorage, KeyboardAvoidingView, TextInput} from 'react-native';
import { Header,Container,Title, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';

export default class LogIn extends Component {

  componentDidMount() {
    
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: '',
      password: ''
    }
  }

  signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('Second');
  };

  didGoTo(scene, data) {
    this.props.navigation.navigate(scene,{'data':data});
  }

  didLogin() {
    this.signInAsync()
  }

  didGoToPassword() {
    this.didGoTo("Recover","")
  }

  didGoToRegister() {
    this.didGoTo("Register","")
  }

  didGoToHome() {
    this.didGoTo("Home","")
  }

  render() {
    const content = this.state.loading ?
      <View style={styles.body}>
        <ActivityIndicator size="large"/>
      </View> : 
        <Content>  
            <View style={styles.heading}>
              <Image
              style={{width: 200, height: 200}}
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
              />
            </View>
            <KeyboardAvoidingView style={styles.inner}>
              <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10}}
              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}
              />
              <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, margin: 10}}
              onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
              />
            </KeyboardAvoidingView>
            <View style={styles.primaryButton}>
              <TouchableOpacity onPress={this.didGoToPassword.bind(this)}>
               <Text style={{textDecorationLine: 'underline'}}> Quên mật khẩu ? </Text>
              </TouchableOpacity>
            </View>
          <View style={styles.social}>
            <Button style={styles.button} onPress={this.didGoToRegister.bind(this)}>
              <Text>Đăng ký</Text>
            </Button>
            <Button style={styles.button} onPress={this.didGoToHome.bind(this)}>
              <Text>Đăng nhập</Text>
            </Button>
          </View>
        </Content>
      return (
        <Container style={styles.base}>
          {content}
        </Container>
      );
    }
  }

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#F5FCFF'
  },
  container: {
    alignItems: 'stretch',
    flex: 1
  },
  body: {
    flex: 9,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#F5FCFF',
  },
  primaryButton: {
    marginRight: 15,
    alignSelf:'flex-end'
  },
  heading: {
    marginTop: 60,
    padding: 10,
    alignSelf:'center',
  },
  inner: {
    margin: 0,
    padding: 15,
  },
  social: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
    padding:15
  },
  button: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    margin:10
  }
});

