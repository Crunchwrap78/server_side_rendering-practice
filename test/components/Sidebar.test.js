import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../../src/components/Sidebar';
import listingsData from '../../src/data/listings.js'

let handleChange, filterData, populateOption, wrapper;

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
  filterData = jest.fn();
  populateOption = jest.fn();
  wrapper = shallow(
    <Sidebar
      handleChange={handleChange}
      filterData={filterData}
      populateOption={populateOption}
      globalState={globalState}
    />
  );
});

test('should render Sidebar correctly', () => {
  expect(wrapper).toMatchSnapshot();
  expect(populateOption).toHaveBeenCalled();
});
test('should handle sort cities', () => {
  const value = 'Condo';
  wrapper.find('select').at(0).simulate('change', {
    target: { value }
  });
  expect(handleChange).toHaveBeenCalled();
});
test('should handle sort homeType', () => {
  const value = 'Miami';
  wrapper.find('select').at(1).simulate('change', {
    target: { value }
  });
  expect(handleChange).toHaveBeenCalled();
});
test('should handle sort price', () => {
  const value = 'price-asc';
  wrapper.find('select').at(2).simulate('change', {
    target: { value }
  });
  expect(handleChange).toHaveBeenCalled();
});
