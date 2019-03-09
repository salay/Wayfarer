import React, {Component} from 'react'
// import CitiesModel from '/Users/default/Desktop/WDI-51/GA Projects/Wayfarer/wayfarer-frontend/src/models/CitiesModel.js'
 
// AddPostModal HAS TO BE capitalized. CANNOT be addPostModal. react will not allow this. 
import UserModel from "../../../models/UserModel"
import Modal from 'react-modal';
import axios from 'axios';
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

  render(){
      
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
        <button onClick={this.openModal}>Edit</button>
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



