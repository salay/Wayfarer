import React, { Component } from 'react';
import './Nav.css'
import ModalSignUp from './modal/modal'


class Nav extends Component {
   render() {
       return (
           
           
           <header id="headWrap">
           <h1>App Name</h1>
            <nav id="navwrap">
                 {/* <ul>
                    <li>
                        <a href="#Sign In">Sign In</a>
                        <a href="#Sign Up">Sign Up</a>
                    </li>
                 </ul> */}
                 <button id="signUpButton">Sign In</button>
                 <ModalSignUp />
            </nav>
            
           </header>
       );
   }
}

export default Nav;

