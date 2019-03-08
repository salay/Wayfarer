import axios from 'axios';

class PostsModel {
  static allEndpoints(){
    // let request = axios.get(`https://wayfarer-db.herokuapp.com/api/posts`)
    let request = axios.get('http://localhost:3001/api/posts')
    return request
  }
}


export default PostsModel