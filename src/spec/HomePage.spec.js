import React from 'react';
import { Provider } from 'react-redux';
import matches from './test-utils';
import store from '../redux/configStore';
import HomePage from '../components/Pages/HomePage';

describe('HomePage', () => {
  it('Homepage matched snapshot', () => {
    matches(<Provider store={store}><HomePage /></Provider>);
  });
});
