import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ContentList from './ContentList';
import listingsData from '../data/listings.js'

class App extends Component {
  constructor(props){
  	super(props);
  	this.state = {
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

    this.handleChange = this.handleChange.bind(this);
    this.filterData = this.filterData.bind(this);
    this.populateOptions = this.populateOptions.bind(this);
    this.changeView = this.changeView.bind(this)
  }

  componentWillMount(){
    const listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    });
    this.setState({
      listingsData
    });
  }

  changeView(viewName){
    this.setState({
      view: viewName
    })
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    this.setState({
      [ name ]: value
    }, ()=> {
      this.filterData()
    })

  }

  filterData() {
    let newData = this.state.listingsData.filter(item =>
      item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.rooms
    );

    if(this.state.city !== 'All') {
      newData = newData.filter(item => item.city === this.state.city)
    }

    if(this.state.homeType !== 'All') {
      newData = newData.filter(item => item.homeType === this.state.homeType)
    }

    if(this.state.sortby == 'price-dsc') {
      newData.sort((a, b) => b.price - a.price);
    }

    if(this.state.sortby == 'price-asc') {
      newData.sort((a, b) => a.price - b.price);
    }

    if(this.state.search != ''){
      newData = newData.filter((item) => {
        const city = item.city.toLowerCase()
        const searchText = this.state.search.toLowerCase()
        const n = city.match(searchText)

        if(n != null) {
          return true
        }
      })
    }

    this.setState({filteredData: newData});
  }

  populateOptions() {
    let cities = this.state.listingsData.map(item => item.city );
    cities = new Set(cities);
    cities = [...cities];

    let homeTypes = this.state.listingsData.map(item => item.homeType);
    homeTypes = new Set(homeTypes);
    homeTypes = [...homeTypes];

    let numOfRooms = this.state.listingsData.map(item => item.rooms);
    numOfRooms = new Set(numOfRooms);
    numOfRooms = [...numOfRooms];
    numOfRooms.sort();

    this.setState({
      populateDropDown: {
        homeTypes,
        numOfRooms,
        cities
      }
    });
  }

  render() {
    return (
      <div>
        <Header />
        <section id="content-area">
          <Sidebar
            handleChange={this.handleChange}
            globalState={this.state}
            populateOption={this.populateOptions}
          />
          <ContentList
            handleChange={this.handleChange}
            listingsData={this.state.filteredData}
            globalState={this.state}
            changeView={this.changeView}
          />
        </section>
      </div>
    )
  }
}

export default App;
