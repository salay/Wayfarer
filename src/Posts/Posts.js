import React, { Component } from 'react';
import CityContainer from "./containers/CityContainer/CityContainer";
import PostsContainer from "./containers/CityContainer/PostsContainer/PostsContainer";
import 'bootstrap/dist/css/bootstrap.css';
import "./Posts.css"
class Posts extends Component {
  constructor(){
    super()
    this.state = {
      cityName: "San Francisco"
    }
  }

  changeCity = (newCity) => {
    console.log(newCity)
    this.setState({
      cityName: newCity
    })
    console.log(this.state.cityName)
  }
  

    render() {
      console.log(this.state.cityName)
      return (
        <div id="allPosts">
        <h1 id="postsHeader">Posts Page</h1>
        
        <div id="postsContainer">
          <div class="col-sm-3">
            <CityContainer
            changeCity = {this.changeCity}/>
            </div>
            <div class="col-sm-9">
            <PostsContainer handleInput = {this.props.handleInput}
            cityName = {this.state.cityName}/>
            </div>
        </div>
        </div>
      );
    }
  }
  
  export default Posts;
  