import React, {Component} from 'react'
// AddPostModal HAS TO BE capitalized. CANNOT be addPostModal. react will not allow this. 
import UserModel from "../../../models/UserModel"
import "./userProfile.css"
class PostsContainer extends Component {
  
    constructor(){
    super()
    this.state = {
        username: "bob",
        email: "bob@bob.com",
        fullName: "Bobby Bob",
        currentCity: "Oakland",
        isEditing: false,
        display: "display: 'block'",
        hide: "display: 'none'"
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


  openEditors = () => {
    console.log("editor is open")
    console.log(this)
    this.setState({
      isEditing: true
    })
  }

  //failing to initialize the value at the point that I'm calling openEditors... maybe componentdidmount



  render(){
      console.log(this.state.username)
      console.log(this.state.isEditing)
      console.log(localStorage.id)

        return ( 

      <div id="displayedProfile" style={{display:"block"}}>
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
       <button id="editProfile" onClick ={this.openEditors}>Edit</button>
        </div>

        )
      
        
     
    
  }
}


export default PostsContainer



