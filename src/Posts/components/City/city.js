import React, {Component} from 'react'

class City extends Component {
  render(){
    return(
      <li data-cities-index={this.props.city.id}>
        <span>{this.props.city.body}</span>
      </li> 
    )
  }
}

export default City