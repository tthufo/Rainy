import React, {Component} from 'react';
import {TouchableOpacity, View, Platform, StyleSheet, StatusBar, ActivityIndicator, AsyncStorage} from 'react-native';
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

  render() {
    const content = this.state.loading ?
      <View style={styles.body}>
        <ActivityIndicator size="large"/>
      </View> : 
        <Content>  
            <View style={styles.inner}>
               <List>
                 <ListItem>
                   <InputGroup>
                     <Input
                      onChangeText={(text) => this.setState({email: text})}
                      value={this.state.email}
                      placeholder={"Email"} />
                    </InputGroup>
                </ListItem>
                <ListItem>
                  <InputGroup>
                    <Input
                      onChangeText={(text) => this.setState({password: text})}
                      value={this.state.password}
                      secureTextEntry={true}
                      placeholder={"Mật khẩu"} />
                  </InputGroup>
               </ListItem>
              </List>
            </View>
            <View style={styles.primaryButton}>
            <Text> Quên mât khẩu ? </Text>
            </View>
          <View style={styles.social}>
            <Button style={styles.button} onPress={this.didGoToRegister.bind(this)}>
              <Text>Đăng ký</Text>
            </Button>
            <Button style={styles.button} onPress={this.didGoToPassword.bind(this)}>
              <Text>Đăng nhập</Text>
            </Button>
          </View>
          {/* <View style={styles.social}>
            <TouchableOpacity onPress={this.didGoToPassword.bind(this)}>
              <Text style={styles.button}> Quên mật khẩu ? </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.didGoToRegister.bind(this)}>
              <Text style={styles.button}> Đăng ký tài khoản </Text>
            </TouchableOpacity>
          </View> */}
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
    margin: 0,
    padding: 15,
    alignSelf:'flex-end'
  },
  heading: {
    marginTop: 20,
    padding: 10,
    alignSelf:'center',
  },
  inner: {
    margin: 10,
    padding: 15,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d6d7da',
    backgroundColor: 'white'
  },
  social: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',
  },
  button: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    margin:10
  }
});

