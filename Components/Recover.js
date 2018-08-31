import React, {Component} from 'react';
import {TouchableOpacity, View, Platform, StyleSheet, StatusBar, ActivityIndicator} from 'react-native';
import { Header, Container, Title, Content, List, ListItem, InputGroup, Input, Icon, Text, Button } from 'native-base';

export default class Recover extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: ''
    }
  }

  didRequestRecovery() {
   this.setState({
      loading: true
   })
  }

  render() {
    const content = this.state.loading ?
      <View style={styles.body}>
        <ActivityIndicator size="large"/>
      </View> : 
        <Content>  
          <Text style={styles.heading}>
            Lấy lại mật khẩu qua Email
          </Text>
            <View style={styles.inner}>
               <List>
                 <ListItem>
                   <InputGroup>
                     <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                     <Input
                      onChangeText={(text) => this.setState({email: text})}
                      value={this.state.email}
                      placeholder={"Email"} />
                    </InputGroup>
                </ListItem>
              </List>
            </View>
          <Button style={styles.primaryButton} onPress={this.didRequestRecovery.bind(this)}>
            <Text> Lấy mật khẩu </Text>
          </Button>
        </Content>
      return (
        <Container style={styles.base}>
          <Header>
            <Button transparent style={styles.back} onPress={()=>this.props.navigation.pop()}><Text>Trở về</Text></Button>
            <Title style={{alignSelf: "center"}}>Quên mật khẩu</Title>
          </Header>
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
    margin: 15,
    padding: 15,
    alignSelf:'center'
  },
  heading: {
    marginTop: 10,
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
  back: {
    position:'absolute',
    left:0,
    alignSelf: "flex-end"
  }
});

