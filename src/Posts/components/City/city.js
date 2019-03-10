import React, {Component} from 'react'
import "./city.css"

class City extends Component {
  constructor(){
    super()
    this.state = {
      //hardcode Oakland as the city you want to pass to the great grandparent component
     // newCity: "Oakland"
    }
  }
  

  //if you click the button rendered below you want only the posts with that city name to populate.
  getACity = (e) => {
    e.preventDefault()
    console.log(e)
    this.setState({
      newCity: this.props.city
    })
    console.log(this.props.city)
    console.log(this.props.cityName)
    console.log(this.state.newCity)
   this.props.changeCity(this.props.city)
   //window.location - puts whatever you type here in the browser
   //
  }



  render(){
    console.log(this.props.city)
    //this returns the html structure that I want each city that appears in cityRenderBox to follow
    return(
      <div class="city">
          <div class="cityName">
          <button onClick = {this.getACity}
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