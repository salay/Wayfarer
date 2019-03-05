import React, { Component } from 'react';
import './App.css';
import Landing from '../Landing/Landing';
import Profile from '../Profile/Profile';
import Posts from '../Posts/Posts';
import { Switch, Route} from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="App">

<<<<<<< HEAD


=======
>>>>>>> 5aef670a84754c1ba2d1f7aa453bda401e4a5b64
        <Switch>
            <Route path="/" exact strict component={Landing}/>
            <Route path="/profile"  exact strict component={Profile}/>
            <Route path="/posts"  exact strict component={Posts}/>
        </Switch>

<<<<<<< HEAD


=======
>>>>>>> 5aef670a84754c1ba2d1f7aa453bda401e4a5b64
      </div>
    );
  }
}

export default App;
