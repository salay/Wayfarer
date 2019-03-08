import React, {Component} from 'react'
import "./city.css"

class City extends Component {
  render(){
    console.log(this.props.city)
    return(
      <div class="city" data-cities-index={this.props.city.id}>
        <div class="cityName">
        <span>{this.props.city }, </span>
        <span> { this.props.country}</span>
        </div>
        <img src = {this.props.image} />
      </div> 
    )
  }
}

export default City