import axios from 'axios'

class UserModel {
  static allEndpoints(){
    let request = axios.get(`http://localhost:3001/users`)
    return request
  }
  static signUp(data){
    //promises is how you handle things asynchronously 
    //axios uses a promise.... when axios comes back, then it'll 
    //so .then won't run until the promise is fulfilled by axios
    //and you get the data
    let request = axios.post(`http://localhost:3001/users/signup`, data) 
    return request;
  }
  static signIn(data){
    let request = axios.post(`http://localhost:3001/users/login`, data) 
    return request;
  }
}


export default UserModel