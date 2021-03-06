import React, {Component} from 'react'
// AddPostModal HAS TO BE capitalized. CANNOT be addPostModal. react will not allow this. 
import UserModel from "../../../models/UserModel"
import Modal from 'react-modal';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
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
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount(){
    this.fetchData()
  }
  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleInputCurrentCity = (e) => {
    this.setState ({
      currentCity: e.target.value
    })
  }
  handleInputFullName = (e) => {
    this.setState ({
      fullName: e.target.value
    })
  }

    // EDIT USER INFO FUNCTION
  handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      _id: localStorage.id,
      currentcity: this.state.currentCity,
      fullname: this.state.fullName
    }
    axios.put(`http://localhost:3001/users/update`, user)
    .then(response => {
    console.log(response);
    console.log(user);
    
    // })
    })
    .catch(error=> console.log(error))
  }
    // DELETE A USER FROM THE DB
  handleDelete = (e) => {
    e.preventDefault();
    let User = {
      _id: localStorage.id,
      currentcity: this.state.currentCity,
      fullname: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
    }
    axios.delete(`http://localhost:3001/users/deleteUser`, User)
    .then(response => {
    // console.log(response);
    console.log(User);
    
    // })
    })
    .catch(error=> console.log(error))

  }


  
  fetchData = () => {
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
        <button onClick={this.openModal}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
       <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          
          contentLabel="Example Modal"
        >
          <h2 ref={subtitle => this.subtitle = subtitle}>Edit Profile!</h2>
          <form onSubmit={this.handleSubmit} id="formwrap">
            <input placeholder="Full Name" type="text" 
            //this.props.{functionName} would be the function that is accessed
            //to nav or on app
            // you want to put the login functions on app so that it changes the isloggedin state of app
            // 
            //onchange means whenever the input box detects a change (ex. type something in)
            //then it calls a function called handleInput
            //look above the render function for handleInput function
            //need to add 2 field: username and currentcity
            onChange={this.handleInputFullName} name="fullname"/>
            <input placeholder="Current City" type="text" name="currentcity" onChange={this.handleInputCurrentCity}/>
            <button id="modalButton" onClick={ this.fetchData }>Submit</button>
            <button id="modalButton" onClick={this.closeModal}>Cancel</button>
          </form>
        </Modal>

        {/* <input> </input>
        <input> </input>
        <input> </input>
        <input> </input> */}
     </div>
    )
  }
}


export default PostsContainer



