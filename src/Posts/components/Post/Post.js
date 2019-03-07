import React, {Component} from 'react'


class Post extends Component {
  render(){
      console.log(this.props)
    return(

    <div class="posts" data-posts-index={this.props.city.id}>
      hi I'm a post
        <div>
        <span>{this.props.title }, </span>
        <div> { this.props.text}</div>
        </div>
        {/* <img src = {this.props.image} /> */}
      </div> 
    )
  }
}

export default Post 