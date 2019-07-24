import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';

export default class SplashScreen extends Component<{}, {}> {
  render() {
    return (
      <TouchableWithoutFeedback>
        <View>
          <Text>Splash</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
