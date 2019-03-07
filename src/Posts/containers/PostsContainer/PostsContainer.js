import React, {Component} from 'react'
// import CitiesModel from '/Users/default/Desktop/WDI-51/GA Projects/Wayfarer/wayfarer-frontend/src/models/CitiesModel.js'
 import PostsRenderBox from '../../components/PostsRenderBox/PostsRenderBox';
import "./PostsContainer.css"
class PostsContainer extends Component {
    state = {
        posts: "a post"
    }

//   componentDidMount(){
//     this.fetchData()
//   }

//   fetchData(){
//     CitiesModel.allEndpoints().then( (res) =>  
//    // {/* pulling the city data from the citiesModel API*/}
//     { console.log(res.data)
//       this.setState ({
//         cities: res.data,  // {/* setting the state of the empty cities array equal to the cities data from the API defined in the city models*/}
//         city: ''
//       })
//     })
//   }

  render(){
      console.log(this.state.posts)
    return (
      <div>
        <PostsRenderBox
        //   cities={this.state.cities} 
          /> {/* passing cities as a prop to the cityrender box. cities is equal to the current state of the cities array which comes from the API */}
      </div>
    )
  }
}


export default PostsContainer



