import React from 'react';
import { shallow } from 'enzyme';
import ContentList from '../../src/components/ContentList';
import listingsData from '../../src/data/listings.js'

let handleChange, changeView, wrapper;
beforeEach(() => {
  const globalState = {
    city: 'All',
    rooms: 0,
    listingsData,
    homeType: 'All',
    min_price: 0,
    max_price: 10000000,
    min_floor_space: 0,
    max_floor_space: 4000,
    elevator: false,
    basement: false,
    swimming_pool: false,
    gym: false,
    filteredData: listingsData,
    populateDropDown: '',
    sortby: 'price-dsc',
    search: '',
    view: 'long'
  };
  handleChange = jest.fn();
  changeView = jest.fn();
  wrapper = shallow(
    <ContentList
      handleChange={handleChange}
      changeView={changeView}
      globalState={globalState}
    />
  );
});

test('should render ContentList', () => {
  expect(wrapper).toMatchSnapshot();
});


test('should handle search text when input changes', () => {
  const value = 'ooo';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(handleChange).toHaveBeenCalled();
});

test('should handle view change', () => {
  const value = 'box';
  wrapper.find('i').at(1).simulate('click');
  expect(changeView).toHaveBeenLastCalledWith(value);
});
