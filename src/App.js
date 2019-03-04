import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Landing from './Landing/Landing';
import Profile from './Profile/Profile';
import Posts from './Posts/Posts';
import { Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
            <Route path="/" exact strict component={Landing}/>
            <Route path="/profile"  exact strict component={Profile}/>
            <Route path="/posts"  exact strict component={Posts}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
