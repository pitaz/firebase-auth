import React, {Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCgmKs60eyTJ5-NSq32tcMeRT7HjoaAd3M',
      authDomain: 'authentication-c6904.firebaseapp.com',
      databaseURL: 'https://authentication-c6904.firebaseio.com',
      projectId: 'authentication-c6904',
      storageBucket: '',
      messagingSenderId: '1040918185841',
      appId: '1:1040918185841:web:1a981e1ac8f9000d'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" /> 
        <Text>An app!</Text>
      </View>
    );
  }
}

export default App;
