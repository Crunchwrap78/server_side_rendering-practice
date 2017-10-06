import React, { Component } from 'react';

export default class Sidebar extends Component {
    constructor() {
      super()
      this.cities = this.cities.bind(this)
      this.homeTypes = this.homeTypes.bind(this)
      this.bedrooms = this.bedrooms.bind(this)
    }
    componentWillMount() {
      this.props.populateOption();
    }

    cities() {
      if(this.props.globalState.populateDropDown.cities != undefined) {
        var { cities } = this.props.globalState.populateDropDown
        return cities.map(item => <option key={item} value={item}>{item}</option>)
      }
    }

    homeTypes() {
      if(this.props.globalState.populateDropDown.homeTypes != undefined) {
        var { homeTypes } = this.props.globalState.populateDropDown
        return homeTypes.map(item => <option key={item} value={item}>{item}</option>)
      }
    }

    bedrooms() {
      if(this.props.globalState.populateDropDown.numOfRooms != undefined) {
        var { numOfRooms } = this.props.globalState.populateDropDown
        return numOfRooms.map(item => <option key={item} value={item}>{item} bedrooms </option>)
      }
    }
    render() {
      return (
        <section id="sidebar">
          <div className="inside">
            <h4>Filter</h4>
            <select name="city" className="filters neighborhood" onChange={this.props.handleChange}>
              <option>All</option>
              {this.cities()}
            </select>
            <select name="homeType" className="filters housetype" onChange={this.props.handleChange}>
              <option>All</option>
              {this.homeTypes()}
            </select>
            <select name="rooms" className="filters bedrooms" onChange={this.props.handleChange}>
              {this.bedrooms()}
            </select>
            <div className="filters price">
              <span className="title">Price</span>
              <input type="text" name="min_price" className="min-price" onChange={this.props.handleChange} value={this.props.globalState.min_price}/>
              <input type="text" name="max_price" className="max-price" onChange={this.props.handleChange} value={this.props.globalState.max_price}/>
            </div>
            <div className="filters floor-space">
              <span className="title">Floor Space </span>
              <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.handleChange} value={this.props.globalState.min_floor_space}/>
              <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.handleChange} value={this.props.globalState.max_floor_space}/>
            </div>
            <div className="filters extras">
              <span className="title">Extras</span>
              <label htmlFor="extras">
                <span>Elevators</span>
                <input name="elevator" value="elevator" type="checkbox" onChange={this.props.handleChange}/>
              </label>
              <label htmlFor="extras">
                <span>Swimming Pool</span>
                <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.handleChange}/>
              </label>
              <label htmlFor="extras">
                <span>Basement</span>
                <input name="basement" value="basement" type="checkbox" onChange={this.props.handleChange}/>
              </label>
              <label htmlFor="extras">
                <span>Gym</span>
                <input name="gym" value="gym" type="checkbox" onChange={this.props.handleChange}/>
              </label>
            </div>
          </div>
        </section>
      );
   }
}
