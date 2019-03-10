# Pathfinder-frontend

## Nicolette, Siri, Leo, Alom

## Overview
Pathfinder is a website that allows users to share travel tips for places they have visited. Users may also look up posts by selected 
cities.

## Technologies Used
* React
* Bcrypt
* Express
* Axios

## Contributions

### Alom
* React Carousel and modal

`class Hero extends Component {
  render() {
      return (
          <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={false} showIndicators={false}>
              <div>
                  <img src={SanFrancisco} />
              </div>
              <div>
                  <img src={NewYork} />
              </div>
              <div>
                  <img src={Fuji} />
              </div>
              <div>
                  <img src={Toronto} />
              </div>
              <div>
                  <img src={Paris} />
              </div>
          </Carousel>`

* Pair programmed with Leo on backend routes and crud functions
* Pair programmed with Siri on trying to connect part of the backend to the frontend


## Challenges

### Alom
* Figuring out how to reference data correctly
* Create a post function        
  * capturing the input in the console
  * associating it with a user
  * sending it to the database
  * sending blank posts
  
         `newUserPost: (req, res) => {
        db.Post.create({
          title: req.body.title,
          location: req.body.location,
          text: req.body.text
        }, (err, newPost) => {
          if (err) { throw err }
          // This line will need to change to match the token
          // userID is refering to a particular user ID which is defined in the post routes. if that ID matches a user ID in the 
          database, user is found
          let userId = req.params.userId;
          
          db.User.findById({ _id: userId }, (err, foundUser) => {
            console.log("///// Before")
            console.log(newPost)
            foundUser.posts.push(newPost); // pushing the new post into the unique user's posts array
            
            console.log("///// After")
            console.log(foundUser);
            
            foundUser.save((err, savedUser) => { // saving to the USER DB
              if (err) { throw err }
              res.json(savedUser);
            })
          })
        });`
