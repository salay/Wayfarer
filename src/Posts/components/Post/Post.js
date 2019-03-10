import React, {Component} from 'react'
import "./Post.css"


class Post extends Component {
  render(){
      console.log(this.props)
    return(

    <div id="onePost" 
     data-posts-index={this.props.city.id}
    >
    
        <div>
        {/* <span> { this.props.city}</span>
        <br/> */}
        
        <span>{this.props.title }, </span>
        <div> { this.props.text}</div>
        </div>
        <img src = {this.props.image} />
      </div> 
    )
  }
}

export default Post 