import React, { Component } from 'react';
import UserProfile from "./components/userProfile/userProfile"


class Profile extends Component {
    render() {
      return (
        <div>
            <p> Profile page </p>
            <UserProfile />
        </div>
      );
    }
  }
  
  export default Profile;
  