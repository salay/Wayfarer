import axios from 'axios';

class CitiesModel {
  static allEndpoints(){
    // let request = axios.get(`https://wayfarer-db.herokuapp.com/api/cities`)
    let request = axios.get('http://localhost:3001/api/cities/')
    return request
  }

  static cityPosts(locationName){
    let request = axios.get(`http://localhost:3001/api/cities/${locationName}`)
    return request
  }
}


export default CitiesModel