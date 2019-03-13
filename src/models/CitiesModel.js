import axios from 'axios';

class CitiesModel {
  static allEndpoints(){
    // let request = axios.get(`https://wayfarer-db.herokuapp.com/api/cities`)
    let request = axios.get('http://localhost:3001/api/cities/')
    return request
  }

  static cityPosts(locationName){
    console.log("here are the city posts")
    console.log(locationName)
    let request = axios.get(`http://localhost:3001/api/cities/${locationName}`)
    console.log(request)
    return request
  }
}


export default CitiesModel