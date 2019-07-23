import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { LoginForm } from '../../Shared';

import styles from './styles';

interface LoginProps {
  navigation: any;
}

class LoginScreen extends React.Component<LoginProps> {
  state = {};

  goToRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('Register');
  };

  render() {
    return (
      <View style={styles.container}>
        <LoginForm />
        <TouchableOpacity onPress={this.goToRegister}>
          <Text style={styles.registerText}>or create an account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default LoginScreen;
