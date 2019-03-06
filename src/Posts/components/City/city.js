import React, {Component} from 'react'

class City extends Component {
  render(){
    return(
      <li data-cities-index={this.props.city.id}>
        <span>{this.props.city}</span>
        <span>{this.props.country}</span>
        <img src = {this.props.image} />
      </li> 
    )
  }
}

export default City