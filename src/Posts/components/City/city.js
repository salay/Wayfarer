import React, {Component} from 'react'
import "./city.css"


//if you click the button you want only the posts with that city name to populate.

class City extends Component {
  constructor(){
    super()
    this.state = {
  newCity: "Oakland"
    }
  }
  

  
  aCity = (e) => {
    e.preventDefault()
    console.log(e)
    this.setState({
      newCity: this.props.city
    })
    console.log(this.state.newCity)
    let aNewCity = this.state.newCity
   this.props.changeCity(aNewCity)
  }



  render(){
    console.log(this.props.city)
    return(
      <div class="city" data-cities-index={this.props.city.id}>
        
          <div class="cityName">
          <button onClick = {this.aCity}
           //changeCity = {this.props.changeCity} 
          className = "cityBtn">
          <span>{this.props.city }, </span>
          <span> { this.props.country} </span>
          </button>
          </div>
          <img src = {this.props.image} />
         
      </div> 
    )
  }
}

export default City