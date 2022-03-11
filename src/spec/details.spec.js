import React from 'react';
import { Provider } from 'react-redux';
import matches from './test-utils';
import store from '../redux/configStore';
import details from '../redux/details';

describe('details redux', () => {
  it('details matched snapshot', () => {
    matches(<Provider store={store}><details /></Provider>);
  });
});
