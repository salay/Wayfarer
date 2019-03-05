import React, { Component } from 'react';
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
}

export default Nav;
