import React from 'react';
import { Provider } from 'react-redux';
import matches from './test-utils';
import store from '../redux/configStore';
import DetailsPage from '../components/Pages/DetailsPage';

describe('Details page', () => {
  it('DeailsPage matched snapshot', () => {
    matches(<Provider store={store}><DetailsPage /></Provider>);
  });
});
