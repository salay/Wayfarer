import React, { Component } from 'react';
<<<<<<< HEAD
import './Nav.css'


class Nav extends Component {
   render() {
       return (
           
           
           <header id="headWrap">
           <h1>App Name</h1>
            <nav>
                 <ul>
                    <li>
                        <a href="#Sign In">Sign In</a>
                        <a href="#Sign Up">Sign Up</a>
                    </li>
                 </ul>
            </nav>
           </header>
       );
   }
=======
import Modalform from './modal/modal'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li>
                            <Modalform />
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
>>>>>>> alom
}

export default Nav;

