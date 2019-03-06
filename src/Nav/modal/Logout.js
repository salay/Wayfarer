import React, {Component} from 'react';



  
class Logout extends Component {
    
    render() {
    return (
    <form>
    <button onClick = { this.props.handleLogOut } id="logout">Logout</button>
    </form>
    )
    }
}
export default Logout 