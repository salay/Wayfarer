import React, {Component} from 'react'
import Post from '../Post/Post'
import "./PostsRenderBox.css"
class CityRenderBox extends Component {
  render(){
    let Posts = this.props.posts.map( (thePost) => {
    return (
      <Post
            cityName={this.props.cityName}
            key={thePost._id}
            city={thePost.location}
            title={thePost.title}
            text = {thePost.text } />
        )
      }
   )

    return(
      <div id="postsRenderBox">
      here is an array of posts
      {Posts}
      </div>
    )
  }
}

export default CityRenderBox