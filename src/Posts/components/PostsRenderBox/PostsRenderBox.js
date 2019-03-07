import React, {Component} from 'react'
import Post from '../Post/Post'

class CityRenderBox extends Component {
  render(){
    let Posts = this.props.posts.map( (thePost) => {
    return (
      <Post
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