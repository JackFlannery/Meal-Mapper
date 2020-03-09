
// This JavaScript file is responsible for getting the user's current location with HTML Geolocation.

// The findLocation() function is exported as to be used in larger pieces of JavaScript.

export function findLocation() {

    if (navigator.geolocation) {
        
        /* This function uses a callback function to get a user's location. It then stores this longitude and latitude information in the hidden
        html DOM elements in index.html*/
        navigator.geolocation.getCurrentPosition(function(position) {
            parseInt(document.getElementById("userLat").setAttribute("text", position.coords.latitude));
            parseInt(document.getElementById("userLong").setAttribute("text", position.coords.longitude));
        }
        )}
};

