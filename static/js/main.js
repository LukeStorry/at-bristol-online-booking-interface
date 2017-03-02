/* Main booking logic
 *
 * Sign into page anonoymously, giving read access to booking & recent booking
 * collections. Once user has entered booking info, grab from DOM, save to booking
 * collection and use event listener watching bookings to add to recent bookings
 * collection.
 */


var new_items = false;

function App() {
    this.user; // Firebase authenticated user

    // DOM elements
    this.book_button            = document.getElementById('book');
    this.booking_quantity_input = document.getElementById('booking-quantity');
    this.booking_email_input    = document.getElementById('booking-email');

    // Setup event listeners
    this.book_button.addEventListener('click', this.book.bind(this));

    // Init firebase
    this.init_firebase(); 

    // Init firebase listeners
    // NOTE firebase child added returns all children, new_items allows us to
    // only retrive the latest by flushing the old ones and then adding a listener
    new_items = false;
    this.booking_ref.once('child_added', function() {}); // Empty call to flush old children
    this.booking_ref.on('child_added', this.save_recent_booking.bind(this));
    this.booking_ref.once('child_added', function() {
        new_items = true;
    });
}

// Sets up shortcuts to Firebase features
App.prototype.init_firebase = function() {
    this.database = firebase.database();
    this.storage  = firebase.storage();
    this.auth     = firebase.auth()

    this.booking_ref         = this.database.ref('bookings');
    this.recent_bookings_ref = this.database.ref('recent_bookings');
    this.booking_ref.off(); // Turn off any listeners 

    this.auth.onAuthStateChanged(this.on_auth_state_change.bind(this));
};

// Every page signs in anonymously, this gives read access to the user
App.prototype.sign_in = function() {
    firebase.auth().signInAnonymously().catch(function(error) {
        console.error('Sign in failed', error);
    });
}

// Update the user attribute on state change
App.prototype.on_auth_state_change = function(user) {
    this.user = user;
}

// Retrives booking info from DOM
App.prototype.get_booking_input = function() {
    return {
        quantity: this.booking_quantity_input.value,
        email: this.booking_email_input.value
    };
}

// Clear booking info from DOM
App.prototype.clear_booking_input = function() {
    this.booking_quantity_input.value = this.booking_quantity_input.getAttribute('data-default');
    this.booking_email_input.value = this.booking_email_input.getAttribute('data-default');
}

// Take input data, save to database, clear fields
App.prototype.book = function() {
    var booking_data = this.get_booking_input();

    var booking = this.save_booking(booking_data);
    console.log(booking);
    this.booked(booking_data);
    this.clear_booking_input();
}

// Write booking data to DB
App.prototype.save_booking = function(booking_data) {
    booking_data.timestamp = firebase.database.ServerValue.TIMESTAMP;

    return this.booking_ref.push(booking_data).catch(function(error) {
        console.error('Error writing new booking to Firebase Database', error);
    });
}

// Write to recent booking collection 
App.prototype.save_recent_booking = function(snapshot) {
    if (!new_items) return; // We only want to write the new items

    var id = snapshot.key;
    this.database.ref('recent_bookings/' + id).set(id).catch(function(error) {
        console.error('Error writing recent booking: ', error);
    });
}

App.prototype.booked = function(booking) {
    console.log('Booked ' + booking.quantity + ' tickets under ' + booking.email);
}

window.onload = function() {
    window.app = new App();

    app.auth.signInAnonymously()
}
