import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './modal.css'
import Axios from 'axios';

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

class ModalSignIn extends Component {

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
  
  // handleInput = event => {
  //   console.log(event)
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

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
        <button id="signUpButton" onClick={this.openModal}>Sign In!</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Sign In!</h2>
          <form id="formwrap">
      
            <input placeholder="Email" type="text" email="email" name="email"
              onChange={this.props.handleInput}/>

{/* 
            <input placeholder="User Name" type="text" name="username" onChange={this.props.handleInput}/>     */}

            <input placeholder="Password" type="password" password="password" name="password"
             onChange={this.props.handleInput}/>

            <button id="modalButton" onClick={ this.props.onSignIn }>Sign In</button>

            <button id="modalButton" onClick={this.closeModal}>Cancel</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default ModalSignIn;