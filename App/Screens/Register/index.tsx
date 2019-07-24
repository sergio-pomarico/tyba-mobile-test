import React, { Component, Dispatch } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';

import { RegisterForm } from '../../Shared';
import { signin } from '../../Store/auth/actions';

interface RegisterProps {
  navigation: any;
  dispatch: Dispatch<AnyAction>;
}

class RegisterScreen extends Component<RegisterProps> {
  state = {};

  handleRegister = (email: string, password: string) => {
    this.props.dispatch(signin(email, password));
  };

  render() {
    return (
      <View style={styles.container}>
        <RegisterForm handleRegister={this.handleRegister} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  }
});

export default connect(null)(RegisterScreen);
