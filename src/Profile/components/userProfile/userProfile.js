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
        currentCity: "Oakland",
        isEditing: false,
        display: "display: 'block'",
        hide: "display: 'none'"
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

      if (!this.props.isEditing){
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

       <button onClick ={this.openEditors}>Edit</button>
        </div>

        )
      }
        else {
      return(
        <div id="editingProfile" style={{display: "block"}}>
        <input placeholder={this.state.username}/>
        <br/>
        <input placeholder = {this.state.fullName}/>
        <br/>
        <input placeholder ={this.state.email}/>
        <br/>
        <input placeholder ={this.state.currentCity} />
        <br/>

       <button onClick ={this.saveUpdatedProfile}>Save</button>
        </div>
      )
     }
        
    
  }
}


export default PostsContainer



