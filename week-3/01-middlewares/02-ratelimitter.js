const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
app.use(express.json());
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser=0;
setInterval(() => {
    numberOfRequestsForUser = {};
    console.log("Called");
  }, 20000)
app.use((req,res,next)=>{
  numberOfRequestsForUser=numberOfRequestsForUser+1;
  if(numberOfRequestsForUser >4){
    res.json
    ({msg:"Many requests"})
  }
  next();
})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
  numberOfRequestsForUser=numberOfRequestsForUser+1;
  console.log(numberOfRequestsForUser);
});

app.post('/user', function(req, res) {
  console.log("Got hit");
  numberOfRequestsForUser=numberOfRequestsForUser+1
  
  res.status(200).json({ msg: 'created dummy user' });
  console.log(numberOfRequestsForUser);
});

app.listen(3000,()=>{
  console.log("Server started");
  
})
module.exports = app;