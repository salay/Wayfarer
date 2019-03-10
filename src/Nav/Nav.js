import React, { Component } from 'react';
import './Nav.css'
import ModalSignUp from './modal/ModalSignUp'
import ModalSignIn from './modal/ModalSignIn'
import Logout from './modal/Logout'
import {Link} from 'react-router-dom';
import UserModel from "../models/UserModel"

class Nav extends Component {

    constructor(){
        super()
        this.state = {
            fullName: "Bobby Bob",
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
            fullName:  res.data.fullname,
          })
        })
      } 


   render() {
       if (this.props.isLoggedIn){
        return (
            <header id="headWrap">
            <div className="title">
            <h1>Pathfinder</h1>
            <h4>Find your way there...</h4>
            </div>
             <nav id="navwrap">

            <h4 id ="signedInAs">Signed in as {this.state.fullName}</h4> 
             <Logout handleLogOut={this.props.handleLogOut}  className="link"/>
             <Link to={'/'} className="link">Home</Link>
             <Link to={'/posts'} className="link">Posts</Link>
             <Link to={'/profile'} className="link">Profile</Link>
             </nav>
             
            </header>
        );
       } else {
        return (
            <header id="headWrap">
            <div className="title">
            <h1>Pathfinder</h1>
            <h4>Find your way there...</h4>
            </div>
             <nav id="navwrap">
             <Link to={'/'} className="link" id="home">Home</Link>
                <ModalSignIn handleInput = {this.props.handleInput} 
                 onSignIn={this.props.onSignIn}/>
                  <ModalSignUp  handleInput={this.props.handleInput}
                 onSignUp={this.props.onSignUp} />
             </nav>
             
            </header>
        );
       }
       
   }
}

export default Nav;

