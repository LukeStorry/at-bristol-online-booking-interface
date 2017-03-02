# SPE Booking

Interface to add new bookings into Firebase

## Usage

```bash
$ git clone https://github.com/begly/spe-booking.git
$ cd spe-booking
$ npm install
$ npm start
```

Now open [http://localhost:5000](http://localhost:5000).



## Document TODO

writes to the [spe-bookings firebase project](https://console.firebase.google.com/project/spe-booking)






## TODO:

* Start a Node.js project, working with the build tools I've mentioned
* write the logic, you can use some of the code I've written but some needs to change
* Also the code I've written doesn't use features from ECMAScript which we might want to use, and I think we should use
* Write an interface for the server, use bootstrap, I think its a good idea
* Write tests for the code
* switch to spe firebase project database
* Verification needs to be done server side, client side introduces security issues


* `".write": "auth.uid === 'booking-service' && !data.exists()",`



* maybe use bootstrap package - for server
* Write a package for easy install
* Use react to keep consistent, it is overkill but it makes the project more uniform
* ECMAScript is used on exhibitions API so maybe we should use here, makes OO easier
however requires compilation
