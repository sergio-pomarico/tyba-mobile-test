import 'react-native';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import RegisterForm from '../App/Shared/Components/RegisterForm';

configure({adapter: new Adapter()});
const middlewares: Array<any> = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);
const initialState = {};

describe('Testing RegisterForm', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <RegisterForm />,
      { context: { store: mockStore(initialState) } },
    );
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
