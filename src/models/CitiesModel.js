import axios from 'axios'

class CitiesModel {
  static allEndpoints(){
    let request = axios.get(`https://wayfarer-db.herokuapp.com/api/cities`)
    return request
  }
}


export default CitiesModel