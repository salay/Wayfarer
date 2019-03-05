import React, {Component} from 'react'
import CitiesModel from '/Users/default/Desktop/WDI-51/GA Projects/Wayfarer/wayfarer-frontend/src/models/CitiesModel.js'
import CityRenderBox from '../../components/CityRenderBox/CityRenderBox';

class CityContainer extends Component {

  constructor(){
    super()
    this.state = {
      cities: []
    }
  }
  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    CitiesModel.allEndpoints().then( (res) => {
      this.setState ({
        cities: res.data.cities,
        city: ''
      })
    })
  }

  render(){
      console.log(this.state.cities)
    return (
      <div>
        <CityRenderBox
          cities={this.state.cities} />
      </div>
    )
  }
}


export default CityContainer



