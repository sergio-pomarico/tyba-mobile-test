# Tyba Mobile Test

## How to run

```
# Run in iPhone 8 simulator
yarn ios
npm run ios
# Run in Android device
yarn android
npm run android
```

## Structure

```
# Run in Android device
---src
    |--Interfaces: Interfaces to validate data structure
    |--Navigation: Navigation configuration.
    |--Screens: Screens components.
    |--Shared: Shared components and utilities
      |--Components: Reusable components for the entire application
      |--Utils
        |--Requester: Class to manage all http requests .
    |--Store: all Redux implementation, are organized by knowledge domain.
    |--Theme: Everything related to styles: colors, global styles, themes, etc.
    App.tsx: App Main File
```

## Third-party libs

- [`axios`](https://github.com/axios/axios)
- [`react-native-gesture-handler`](https://github.com/kmagiera/react-native-gesture-handler)
- [`react-native-vector-icons`](https://github.com/oblador/react-native-vector-icons)
- [`react-navigation`](https://reactnavigation.org/)
- [`redux`](https://github.com/reduxjs/redux)
- [`react-redux`](https://github.com/reduxjs/react-redux)
- [`redux-form`](https://github.com/erikras/redux-form)
- [`redux-saga`](https://redux-saga.js.org/)
- [`react-native-linear-gradient`](https://github.com/react-native-community/react-native-linear-gradient)
- [`react-native-keyboard-aware-scroll-view`](https://github.com/APSL/react-native-keyboard-aware-scroll-view)
