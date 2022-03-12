import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import matches from './test-utils';
import Back from '../components/Pages/Back';

describe('Details page', () => {
  it('DeailsPage matched snapshot', () => {
    matches(<MemoryRouter><Back /></MemoryRouter>);
  });
});
