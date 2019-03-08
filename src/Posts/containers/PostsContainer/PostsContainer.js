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
      cities: [],
      title: 'title of the post',
      location: 'the place',
      text: 'body of the post',

    }
  }


  componentDidMount(){
    this.fetchData()
  }


  fetchData() {
    // PostsModel.allEndpoints().then( (res) =>  
    // { console.log(res.data)
    //   this.setState ({
    //     posts: res.data,  
    //     post: ''
    //   })
    // })

    CitiesModel.allEndpoints().then( (res) =>  
     { console.log(res.data)
       this.setState ({
         cities: res.data,  
         city: ''
       })
     })

//find only the posts that belong to the clicked city

CitiesModel.cityPosts(this.props.cityName).then( (res) =>  
{ console.log(res.data)
  this.setState ({
    posts: res.data,  
    post: ''
  })
})
  

  } 


  handleInput = (event) => {
    console.log(event.target.value)
     this.setState({
       [event.target.name]: event.target.value
     })
   }

    // let title = this.state.title
    // let text = this.state.text
    // let location = this.state.location

    // let params = {
    //   text: this.state.text,
    //   location: this.state.location,
    //   title: this.state.title
    // };

//     PostsModel.create(localStorage.id, params)
//       .then(response => {
//         console.log(response.data)
//         let posts = this.state.posts
// //         let newPosts = posts.push(res.data)
// //         this.setState({newPosts})
//         this.setState({
//             // let title = this.state.title
//     // let text = this.state.text
//     // let location = this.state.location
//         })
//       })



  //  onFormSubmit = (event) => {
  //   console.log(event.target)
    
  //   event.preventDefault()
  //   let title = this.state.title
  //   this.props.create(post)
  //   this.setState({
  //     title: this.state.title,
  //     location: this.state.location,
  //     text: this.state.text,
  //   })
  //   console.log(this.state.post)
  // }


  onFormSubmit = (event) => {
    console.log(event.target)
    
    event.preventDefault()
    let title = this.state.title

    let params = {
      title: this.state.title
    }

    PostsModel.create(params) 
    .then(response => {
      console.log(response.data)
      this.setState({
        title: ""
      })
    })
  }


  //   this.props.create(post)
  //   this.setState({
  //     title: this.state.title,
  //     location: this.state.location,
  //     text: this.state.text,
  //   })
  //   console.log(this.state.post)
  // }



  create = (post) => {
    console.log(post)
    let createdPost = {
        body: post,
        //completed: false
    }

    PostsModel.create(localStorage.id, createdPost).then((res) => {
      console.log(res.data)
      console.log(createdPost)
        let posts = this.state.posts
        let newPosts = posts.push(res.data)
        this.setState({newPosts})
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
        {/* addpostmodal component is the form where we add the posts */}
        <AddPostModal handleInput = {this.props.handleInput}
            // the cities are the dropdown selector in the form 
          cities={this.state.cities} 

          onFormSubmit = {this.onFormSubmit}
          
          // I think i'm passsing a function in? look above
          create={ this.create }/>
        </div>
      </div>
    )
  }
}


export default PostsContainer



