import React, {Component} from 'react'
// import CitiesModel from '/Users/default/Desktop/WDI-51/GA Projects/Wayfarer/wayfarer-frontend/src/models/CitiesModel.js'
 import PostsRenderBox from '../../components/PostsRenderBox/PostsRenderBox';
import "./PostsContainer.css"
import PostsModel from '../../../models/PostsModel.js'
import CitiesModel from '../../../models/CitiesModel.js'
import AddPostModal from "./addPostModal/addPostModal.js"
// AddPostModal HAS TO BE capitalized. CANNOT be addPostModal. react will not allow this. 

class PostsContainer extends Component {
  constructor(){
    super()
    this.state = {
      posts: [],
      cities: []
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData() {
    PostsModel.allEndpoints().then( (res) =>  
    { console.log(res.data)
      this.setState ({
        posts: res.data,  
        post: ''
      })
    })

    CitiesModel.allEndpoints().then( (res) =>  
     { console.log(res.data)
       this.setState ({
         cities: res.data,  
         city: ''
       })
     })
  } 

  render(){
      console.log(this.state.posts)
    return (
     
      <div id="postsContainer">
        <PostsRenderBox
          posts={this.state.posts} 
          /> 
        <div id="addPostButton">
        <AddPostModal 
          cities={this.state.cities} />
        </div>
      </div>
    )
  }
}


export default PostsContainer



