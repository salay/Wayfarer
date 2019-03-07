import React, { Component } from 'react';

class CitySelector extends Component {
    render() {
        console.log(this.props.city)
      return (
        
        <option value={this.props.city }>{this.props.city }</option>
       

      );
    }
  }
  
  export default CitySelector;
  
  
  