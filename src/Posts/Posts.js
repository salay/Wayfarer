import React, { Component } from 'react';
import CityContainer from "./containers/CityContainer/CityContainer";
import PostsContainer from "./containers/PostsContainer/PostsContainer";
import 'bootstrap/dist/css/bootstrap.css';
class Posts extends Component {
    render() {
      return (
        <div>
        <h1>Posts Page</h1>
        
        <div id="postsContainer">
          <div class="col-sm-3">
            <CityContainer/>
            </div>
            <div class="col-sm-9">
            <PostsContainer/>
            </div>
        </div>
        </div>
      );
    }
  }
  
  export default Posts;
  