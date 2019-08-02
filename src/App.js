import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import env from 'react-native-config'
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: env.apiKey,
      authDomain: 'authentication-c6904.firebaseapp.com',
      databaseURL: 'https://authentication-c6904.firebaseio.com',
      projectId: env.projectId,
      storageBucket: '',
      messagingSenderId: env.messagingSenderId,
      appId: env.appId
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" /> 
        <LoginForm />
      </View>
    );
  }
}

export default App;
