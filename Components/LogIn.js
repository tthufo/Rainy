import React, {Component} from 'react';
import {TouchableOpacity, View, Platform, StyleSheet, StatusBar, ActivityIndicator, AsyncStorage, Text} from 'react-native';
import {Container, Header, Content, Accordion, Left, Right, Body , Button, Icon, Title} from "native-base";
import SplashScreen from "react-native-splash-screen";


export default class Login extends Component {

  componentDidMount() {
     SplashScreen.hide()
  }

  constructor(props) {
    super(props)
    this.state = ({
      loading: false,
      email: '',
      password: ''
    });
  }

  componentWillMount() {
    
  }

  render() {

    const base = this.state.loading ? <View style={styles.body}>
    <ActivityIndicator size="large"/>
  </View> : 
    
    <View style={styles.container}>
    <TouchableOpacity>
         <Text style={styles.button}> gaau gaau</Text>
   </TouchableOpacity>

   <TouchableOpacity>
         <Text style={styles.button}> fây fây</Text>
   </TouchableOpacity>

   <TouchableOpacity>
         <Text style={styles.button}> {this.state.genk}</Text>
   </TouchableOpacity>

   <TouchableOpacity>
         <Text style={styles.button}> ope</Text>
   </TouchableOpacity>

 </View>  

    return (
      <View style={styles.container}>
              {base}
              </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    backgroundColor: '#F5FCFF'
  },
  header: {
  },
  body: {
    flex: 1,
    alignItems:'center',
    backgroundColor: '#F5FCFF'
  }
});
