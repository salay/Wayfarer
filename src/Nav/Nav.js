import React, { Component } from 'react';
import './Nav.css'
import ModalSignUp from './modal/ModalSignUp'
import ModalSignIn from './modal/ModalSignIn'
import Logout from './modal/Logout'
import {Link} from 'react-router-dom';


class Nav extends Component {
   render() {
       if (this.props.isLoggedIn){
        return (
            <header id="headWrap">
            <h1>App Name</h1>
             <nav id="navwrap">

             Signed in as {this.props.name}
             <Logout handleLogOut={this.props.handleLogOut}/>
             <Link to={'/'}>Home</Link>
             <Link to={'/posts'}>Posts</Link>
             <Link to={'/profile'}>Profile</Link>
             </nav>
             
            </header>
        );
       } else {
        return (
            <header id="headWrap">
            <h1>App Name</h1>
             <nav id="navwrap">
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

