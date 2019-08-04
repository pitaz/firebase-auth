import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { API_KEY, PROJECT_ID,MESSAGING_SENDER_ID, APP_ID } from 'react-native-dotenv';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: API_KEY,
      authDomain: 'authentication-c6904.firebaseapp.com',
      databaseURL: 'https://authentication-c6904.firebaseio.com',
      projectId: PROJECT_ID,
      storageBucket: '',
      messagingSenderId: MESSAGING_SENDER_ID,
      appId: APP_ID
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
          )
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" /> 
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
