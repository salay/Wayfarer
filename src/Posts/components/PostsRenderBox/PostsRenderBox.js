import React, {Component} from 'react'
//import City from '../City/city'

class CityRenderBox extends Component {
  render(){

    // let Cities = this.props.cities.map( (theCity) => { // {/* prop passed down from citycontainer which is the array of cities from the API*/}
    //   return (                                      //  {/* maps over the cities array and passing unique props to the city.js file */}
    //     <City
    //       key={theCity._id}
    //       city={theCity.city}
    //       image={theCity.image}
    //       country= {theCity.country} />
    //   )
    // })
    // console.log({Cities})
    return(
      <div id="postsRenderBox">
      here is an array of posts
        
      {/* {Cities} rendering the array above  */}
      </div>
    )
    
  }
}

export default CityRenderBox