/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react';
import AppNavigation from './Navigation';
import { Provider } from 'react-redux';
import Store from './Store';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={Store}>
        <AppNavigation />
      </Provider>
    );
  }
}
