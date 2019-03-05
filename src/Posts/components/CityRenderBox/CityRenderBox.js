import React, {Component} from 'react'
import City from '../City/City'

class CityRenderBox extends Component {
  render(){

    let cities = this.props.cities.map( (city) => {
      return (
        <City
          key={city._id}
          city={city}/>
      )
    })
    console.log({cities})
    return(
      <ul>
        {cities}
      </ul>
    )
    
  }
}

export default CityRenderBox