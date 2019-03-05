import axios from 'axios';

// const express = require('express');
// //const bodyParser = require('body-parser');
// //const db = require('./models');

// var app = express();
// //app.use(express.static('public'));

// //app.use(bodyParser.urlencoded({ extended: true }));

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
//  });

class CitiesModel {
  static allEndpoints(){
    // let request = axios.get(`https://wayfarer-db.herokuapp.com/api/cities`)
    let request = axios.get('http://localhost:3001/api/cities')
    return request
  }
}


export default CitiesModel