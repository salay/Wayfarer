import React, { Component } from 'react';

class Nav extends Component {
   render() {
       return (
           <div>
               <nav>
                   <ul class="Nav">
                       <li class="column">Sign Up</li>
                       <li class="column">Sign In</li>
                   </ul>
               </nav>
           </div>
       );
   }
}

export default Nav;