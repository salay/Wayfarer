import React, {Component} from 'react'
// import CitiesModel from '/Users/default/Desktop/WDI-51/GA Projects/Wayfarer/wayfarer-frontend/src/models/CitiesModel.js'
 import PostsRenderBox from '../../components/PostsRenderBox/PostsRenderBox';
import "./PostsContainer.css"
import PostsModel from '../../../models/PostsModel.js'
class PostsContainer extends Component {
  constructor(){
    super()
    this.state = {
      posts: []
    }
  }


  componentDidMount(){
    this.fetchData()
  }

  fetchData() {
    PostsModel.allEndpoints().then( (res) =>  
    { console.log(res.data)
      this.setState ({
        posts: res.data,  // {/* setting the state of the empty cities array equal to the cities data from the API defined in the city models*/}
        post: ''
      })
    })
  } 

  render(){
      console.log(this.state.posts)
    return (
      <div>
        <PostsRenderBox
          posts={this.state.posts} 
          /> 
      </div>
    )
  }
}


export default PostsContainer



