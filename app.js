// This script is placed inside of an IIFE which helps protect the scope of variables
(function() {
    // Part One: create hotel object and write out the offer details
   var hotel = {   // hotel object properties / variables we're protecting
        name: 'AllStar Hotel',
        roomRate: 230, // amount in dollar
        discount: 15, // percentage discount
        offerPrice: function() { 
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

    // write out the hotel name, standard rate, and special rate
    var hotelName, roomRate, specialRate; // Declare Variables

    hotelName = document.getElementById('hotelName'); // Get elements
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name; // write hotel name
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2); // write room rate
    specialRate.textContent = '$' + hotel.offerPrice(); // write offer price

// Part Two: Calculate and write out the expiry details for the offer
    var expiryMsg; // The messaged displayed to users
    var today; // Today's date
    var elEnds; // The message that shows the message about the offer ending

    function offerExpires(today) {
        // Declaring Variables within the function for local scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        // Add 7 days time (added in milliseconds)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // This is our expiration date
        // Creates an array of days/ months
        dayNames = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        monthNames = ['January', 'February', 'March', 'April', 'May','June','July', 'August', 'September', 'November', 'December'];
        // Collect the parts of the dates to show on the page
        day = dayNames[weekFromToday.getDay()]; // Gets day of the week
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();
        //Create the message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + '<br/>(' + date + '' + month + '' + year + ')';
        return expiryMsg;
    }

    today = new Date(); // Puts today's date in a variable
    elEnds = document.getElementById('offerEnds'); // Get the offerEnds element
    elEnds.innerHTML = offerExpires(today); // add the expiry msg
// Finish the immediate invoked function expression
}());