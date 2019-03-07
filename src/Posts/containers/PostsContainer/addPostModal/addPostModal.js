import React, {Component} from 'react';
import Modal from 'react-modal';
import '../../../../Nav/modal/modal.css'
import CitySelector from './CitySelector'

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

class addPostModal extends Component {

  constructor() {
    super();
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


  render(){
   let Cities = this.props.cities.map( (theCity) => { 
        return (                                   
        <CitySelector
          key={theCity._id}
          city={theCity.city} />
      )
    })


    console.log("modal for posts is working")
    console.log(this.state)
    return (
      <div>
        <button id="addPostButton" onClick={this.openModal}>+</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Add a Post!</h2>
          <form id="formwrap">
            <select   placeholder="City" name="city">
                {Cities}
            </select>
            <input placeholder="Title" type="text" name="title"
             onChange={this.props.handleInput}/>
            <input placeholder="Description" type="text" name="text"
             onChange={this.props.handleInput}/>

            <button id="modalButton" onClick={ this.props.onSignIn }>Create Post</button>

            <button id="modalButton" onClick={this.closeModal}>Cancel</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default addPostModal;