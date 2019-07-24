
import 'react-native';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import LoginForm from '../App/Shared/Components/LoginForm';

configure({adapter: new Adapter()});
const middlewares: Array<any> = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);
const initialState = {};

describe('Testing LoginForm', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <LoginForm />,
      { context: { store: mockStore(initialState) } },
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
