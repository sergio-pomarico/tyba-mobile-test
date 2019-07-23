import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../../Shared';

import styles from './styles';
export default class HomeScreen extends Component<{}, {}> {
  state = { searchTxt: '' };

  componentDidMount() {}

  render() {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.container}>
          <Text>Home</Text>
          <Button text={'click'} onPress={() => console.log('click')} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
