import axios from 'axios'

class UserModel {
  static allEndpoints(){
    let request = axios.get(`https://wayfarer-db.herokuapp.com/api/user`)
    return request
  }
}


export default UserModel