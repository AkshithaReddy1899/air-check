import React from 'react';
import matches from './test-utils';
import Back from '../components/Pages/Back';
import { MemoryRouter } from 'react-router-dom';

describe('Details page', () => {
  it('DeailsPage matched snapshot', () => {
    matches(<MemoryRouter><Back /></MemoryRouter>)
  });
});
