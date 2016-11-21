var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var admin = require("firebase-admin");

var Hello = require('./app/hello');

require('./index.css');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Hello}/>
  </Router>,
  document.getElementById('root')
);

//TODO: change database to media app
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "spe-booking",
    clientEmail: "booking-service@spe-booking.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\n<KEY>\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://spe-booking.firebaseio.com"
});

//NOTE: maybe set-up differently here as if a client with no access rights?
  // - database would then have to be more open
