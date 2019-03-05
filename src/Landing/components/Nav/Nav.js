import React, { Component } from 'react';
import Modalform from './modal/modal'

class Nav extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Modalform />
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;
