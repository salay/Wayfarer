import axios from 'axios';

class PostsModel {
  static allEndpoints(){
    // let request = axios.get(`https://wayfarer-db.herokuapp.com/api/posts`)
    let request = axios.get('http://localhost:3001/api/posts')
    return request
  }
  static create(userId, createdPost){
    console.log(userId)
    let request = axios.post(`http://localhost:3001/api/posts/${userId}/newPost`, createdPost)
    return request
  }
}


export default PostsModel