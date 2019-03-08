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
       post: 'bubblesWatermelon',
       title: 'title of the post',
       location: 'the place',
       text: 'body of the post',
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


handleInput = (e) => 
{ this.setState ({
 text: e.target.value,
})
}


handleInput2 = (e) => 
{ this.setState ({
  title: e.target.value,
})
}



// onFormSubmit = (event) => {
//   event.preventDefault()
//   let post = this.state.post
//   this.props.create(localStorage.id, post)
//   this.setState({
//     post: ""
//   })
//   console.log(post)
//   console.log(event.target)
// }



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

          <form id="formwrap" >

            <select   placeholder="City" name="location" style={{color:"black"}}>
                {Cities}
            </select>


            <input placeholder="Title" type="text" name="title" title = "title"
             onChange={this.handleInput2}/>

            <input placeholder="Description" type="text" name="text" text = "text"
             onChange={this.handleInput}/>



            <button 
            onClick={this.props.onFormSubmit}
            id="modalButton" type="submit" >Create Post</button>

            <button id="modalButton" onClick={this.closeModal}>Cancel</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default addPostModal;