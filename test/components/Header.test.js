import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../src/components/Header';

let wrapper;

test('should render Header correctly', () => {
  wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
