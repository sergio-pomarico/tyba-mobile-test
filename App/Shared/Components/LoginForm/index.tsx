import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Field, reduxForm } from 'redux-form';

import Input from '../Input';
import Button from '../Button';

interface LoginFormProps {
  handleSubmit: (values: any) => void;
  handleLogin: (email: string, password: string) => void;
}

interface Values {
  email: string;
  password: string;
}

class LoginForm extends Component<LoginFormProps> {
  render() {
    const { handleSubmit, handleLogin } = this.props;
    return (
      <View style={styles.container}>
        <Field name="email" component={Input} placeholder="email" isEmail />
        <Field
          name="password"
          component={Input}
          placeholder="password"
          isPass
        />
        <Button
          text="Login"
          onPress={handleSubmit(({ email, password }) =>
            handleLogin(email, password)
          )}
        />
      </View>
    );
  }
}

const validate = (values: Values) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = 'email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'invalid email address';
  }

  if (!values.password) {
    errors.password = 'password is required';
  } else if (values.password.length < 6) {
    errors.password = 'password must have at least 6 characters';
  }

  return errors;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }
});

export default reduxForm({ form: 'LoginForm', validate })(LoginForm);
