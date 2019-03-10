import React, {Component} from 'react'
import City from '../City/city'
import "./CityRenderBox.css"
 
class CityRenderBox extends Component {

  constructor(){
    super()
    this.state = {
  newCity: "San Francisco"
    }
  }

  // changeCity = (newCity) => {
  //   console.log(newCity)
  //   this.setState({
  //     cityName: newCity
  //   })
  //   console.log(this.state.cityName)
  // }

  render(){
    let Cities = this.props.cities.map( (theCity) => 
    { 
       {/* prop passed down from citycontainer which is the array of cities from the API*/}
    return (      
      <div>                                {/* maps over the cities array and passing unique props to the city.js file */}
        <City
        changeCity = {this.props.changeCity}
          key={theCity._id}
          city={theCity.city}
          image={theCity.image}
          country= {theCity.country} />
          </div>
      )
    })

    console.log({Cities})
    return(
      <div id="cityRenderBox">
        {Cities}  {/* rendering the array above */}
      </div>
    )
  }
}

export default CityRenderBox