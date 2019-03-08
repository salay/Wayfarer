import React, {Component} from 'react'
import "./city.css"


//if you click the button you want only the posts with that city name to populate. 

class City extends Component {
  render(){
    console.log(this.props.city)
    return(
      <div class="city" data-cities-index={this.props.city.id}>
        <button onClick = {this.props.getCityName} >
          <div class="cityName">
          <span>{this.props.city }, </span>
          <span> { this.props.country}</span>
          </div>
          <img src = {this.props.image} />
       </button>
      </div> 
    )
  }
}

export default City