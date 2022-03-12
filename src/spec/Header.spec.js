import React from 'react';
import { Provider } from 'react-redux';
import matches from './test-utils';
import store from '../redux/configStore';
import Header from '../components/Pages/Header';

describe('Header', () => {
  it('Header matched snapshot', () => {
    matches(<Provider store={store}><Header /></Provider>);
  });
});
