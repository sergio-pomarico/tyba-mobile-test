import React, { Component, Dispatch } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { LoginForm } from '../../Shared';
import { login } from '../../Store/auth/actions';

import styles from './styles';

interface LoginProps {
  navigation: any;
  dispatch: Dispatch<AnyAction>;
}

class LoginScreen extends Component<LoginProps> {
  state = {};

  goToRegister = () => {
    const { navigation } = this.props;
    navigation.navigate('Register');
  };

  handleSubmit = (email: string, password: string) => {
    this.props.dispatch(login(email, password));
  };

  render() {
    return (
      <View style={styles.container}>
        <LoginForm handleLogin={this.handleSubmit} />
        <TouchableOpacity onPress={this.goToRegister}>
          <Text style={styles.registerText}>or create an account</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null)(LoginScreen);
