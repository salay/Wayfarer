import React, {Component} from 'react'
// import CitiesModel from '/Users/default/Desktop/WDI-51/GA Projects/Wayfarer/wayfarer-frontend/src/models/CitiesModel.js'
 
// AddPostModal HAS TO BE capitalized. CANNOT be addPostModal. react will not allow this. 
import UserModel from "../../../models/UserModel"
class PostsContainer extends Component {
  
    constructor(){
    super()
    this.state = {
        username: "bob",
        email: "bob@bob.com",
        fullName: "Bobby Bob",
        currentCity: "Oaklander",
        // IMAGE
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  
  fetchData() {
    UserModel.oneUser(localStorage.id).then( (res) =>  
    { console.log(res.data)
      this.setState ({
        username: res.data.username,
        email: res.data.email,
        fullName:  res.data.fullname,
        currentCity:  res.data.currentcity,
      })
    })
  } 

  render(){
      console.log(this.state.username)

      console.log(localStorage.id)
    return (
     
      <div id="userProfile">
        <span>
            Username: {this.state.username}
        </span>
        <br/>
        <span>
            Full Name: {this.state.fullName}
        </span>
        <br/>
        <span>
            Email: {this.state.email}
        </span>
        <br/>
        <span>
            Current City: {this.state.currentCity}
        </span>
        <br/>
       <button>Edit</button>
       
        {/* <input> </input>
        <input> </input>
        <input> </input>
        <input> </input> */}
     </div>
    )
  }
}


export default PostsContainer



