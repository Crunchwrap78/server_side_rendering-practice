import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';
import listingsData from '../../src/data/listings.js';

let wrapper;

test('should render App correctly', () => {
  wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
