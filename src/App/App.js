import React, { Component } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Profile from '../Profile/Profile';
import Posts from '../Posts/Posts';
import { Switch, Route} from 'react-router-dom';
import UserModel from "../models/UserModel.js";
import Nav from "../Nav/Nav"

class App extends Component {
  state = {
    fullname: '',
    username: '',
    email: '',
    currentcity: '',
    // image: '', this is a stretch goal
    isLoggedIn: false
  }

  componentDidMount () {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      })
    } else {
      this.setState({
        isLoggedIn: false
      })
    }
  }
  
  handleLogOut = e => {
    e.preventDefault()
    console.log(e)
    this.setState({
      fullname: '',
      email: '',
      password: '',
      username: '',
      currentcity: '',
      isLoggedIn: false
    })
    localStorage.clear()
  }


  handleInput = event => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  

  //how do you export this function so that it can be accesed by the sign in....


  onSignIn = (event) => {
    event.preventDefault()
    console.log("this is login in the console. button is clicked")
    //let name = this.state.fullName
    let email = this.state.email
    //let username = this.state.username

    let params = {
      //fullName: this.state.fullName,
      email: this.state.email,
      //username: this.state.username,
      password: this.state.password
    };
    UserModel.signIn(params)
      .then(response => {
        console.log(response.data)
        localStorage.token = response.data.signedJwt
        localStorage.id = response.data.user._id
        this.setState({
          fullname: response.data.user.fullname,
          username: response.data.user.username,
          email: response.data.user.email,
          currentcity: response.data.user.currentcity,
          isLoggedIn: true
        })
      })
  }


  onSignUp = (event2) => {
    event2.preventDefault()
    let fullname = this.state.fullname
    let email = this.state.email
    let username = this.state.username
    let currentcity = this.state.currentcity

    let params = {
      fullname: this.state.fullname,
      email: this.state.email,
      username: this.state.username,
      currentcity: this.state.currentcity,
      password: this.state.password
    };
    UserModel.signUp(params)
      .then(response => {
        console.log(response.data)
        localStorage.token = response.data.signedJwt
        localStorage.id = response.data.user._id
        this.setState({

          //set state here!


          isLoggedIn: true
        })
      })
    console.log(params)
  }


  



  //pass props to reactroutertonavbar
  render() {
    if (this.state.isLoggedIn){
      return (
        <div className="App">
      <Nav isLoggedIn={this.state.isLoggedIn} 
       handleLogOut={this.handleLogOut}
       handleInput={this.handleInput}
      onSignUp={this.onSignUp}
      onSignIn={this.onSignIn}
      />

      {/* below- is if true */}
          <Switch> 
            {/* eexact strict  makes sure url parametrs match */}
              <Route 
              fullname={this.state.fullname}
              username={this.state.username}
              email={this.state.email}
              currentcity={this.state.currentcity}
              path="/profile"  
              component={Profile}/>
              <Route path="/posts"  component={Posts}/>
              <Route path="/" exact strict component={Landing}/>
              {/* <Route path="*"   component={<h1>404</h1>}/> */}
          </Switch>
        </div>
      );
    } else {
      return (
        <div className="App">
      <Nav isLoggedIn={this.state.isLoggedIn} 
       handleLogOut={this.handleLogOut}
       handleInput={this.handleInput}
      onSignUp={this.onSignUp}
      onSignIn={this.onSignIn}
      />
      {/* Below -is if false */}
          <Switch>
              <Route path="/" exact strict component={Landing}/>
              {/* <Route path="*"   component={<h1>404</h1>}/> */}
          </Switch>
        </div>
      );
    }
    
  }
}

export default App;
