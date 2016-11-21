# SPE Booking

first install the firebase CLI tools:
`npm install -g firebase-tools`

Then run `firebase serve` and open [http://localhost:5000](http://localhost:5000), writes to the [spe-bookings firebase project](https://console.firebase.google.com/project/spe-booking)


note: potentially just works from the index.html file, try that first.






#TODO:
* `".write": "auth.uid === 'booking-service' && !data.exists()",`
* switch to spe firebase project database
* I think needs to be node.js cannot be single page application due to security problems with firebase (check Ewan's firebase specification for this)
  * Verification needs to be done server side, client side introduces security issues
* We use ECMAScript for
* Don't use inline CSS, split into a file
* If you want to use bootstrap then package it
* Write a package for easy install
* Use react to keep consistent, it is overkill but it makes the project more uniform
* Run a linter on the code to keep consistency, I think there is already a linter
* ECMAScript is used on exhibitions API so maybe we should use here, makes OO easier
however requires compilation
* Start a Node.js project, working with the build tools I've mentioned
* write the logic, you can use some of the code I've written but some needs to change
* Also the code I've written doesn't use features from ECMAScript which we might want to use, and I think we should use
* Write an interface for the server, use bootstrap, I think its a good idea
* Write tests for the code
