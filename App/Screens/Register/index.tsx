import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { RegisterForm } from '../../Shared';
// import { makeRegister } from '../../store/register/actions';

class RegisterScreen extends React.Component {
  state = {};

  handleRegister = values => {
    // const { register } = this.props;
    // register(values);
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

export default connect(
  null,
  null
)(RegisterScreen);
