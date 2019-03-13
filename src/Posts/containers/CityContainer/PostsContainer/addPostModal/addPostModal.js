import React, {Component} from 'react';
import Modal from 'react-modal';
import '../../../../../Nav/modal/modal.css'
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
  state = {
    modalIsOpen: false,
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  render(){
    let Cities = this.props.cities.map( (theCity) => { 
      return (                                   
        <CitySelector
          key={theCity._id}
          city={theCity.city}
        />
      )
    })

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

          <form id="formwrap" onSubmit={ this.props.onSubmit }>
            <select placeholder="City" name="location" style={{color:"black"}} onChange={ this.props.handleInput }
               location={ this.props.location } value={ this.props.location } >
                <option> Select a City</option>
                { Cities }
            </select>

            <input 
              placeholder="Title" 
              type="text" 
              name="title" 
              onChange={ this.props.handleInput }
              value={ this.props.title }
              title={ this.props.title }
            />

            <input 
              placeholder="Description" 
              type="text" 
              name="text" 
              onChange={ this.props.handleInput }
              value={ this.props.text }
              text={ this.props.text }
            />

            <input type="submit" id="modalButton" value="Create Post" style={{color: 'white'}} />
            <button id="modalButton" onClick={this.closeModal}>Cancel</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default addPostModal;