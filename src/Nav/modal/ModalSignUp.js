import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './modal.css'
import Axios from 'axios';

import {Link} from 'react-router-dom';

const customStyles = {
  content : {    
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement')

class ModalSignUp extends Component {

  constructor() {
    super();
    //state is a variable container with all the variables that react wants to access on the frontend
    this.state = {
      modalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  render() {
    console.log(this.state)
    return (
      <div>
        <button id="signUpButton" onClick={this.openModal}>Sign Up!</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Sign Up!</h2>
          <form id="formwrap">
            <input placeholder="Full Name" type="text" 
            //this.props.{functionName} would be the function that is accessed
            //to nav or on app

            // you want to put the login functions on app so that it changes the isloggedin state of app

            // 

            //onchange means whenever the input box detects a change (ex. type something in)
            //then it calls a function called handleInput
            //look above the render function for handleInput function
            //need to add 2 field: username and currentcity
            onChange={this.props.handleInput} name="fullname"/>
            <input placeholder="Email" type="email" email="email" name="email"
              onChange={this.props.handleInput}/>
            <input placeholder="Current City" type="text" name="currentcity" onChange={this.props.handleInput}/>

            <input placeholder="User Name" type="text" name="username" onChange={this.props.handleInput}/>
            <input placeholder="Password" type="password" password="password" name="password"
             onChange={this.props.handleInput}/>
            <button id="modalButton" onClick={ this.props.onSignUp }>Submit</button>
            <button id="modalButton" onClick={this.closeModal}>Cancel</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default ModalSignUp;