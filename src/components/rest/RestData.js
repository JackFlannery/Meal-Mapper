
// The purpose of this JavaScript file is to do most of the necessary operations to make the web app work.

import React, {Component} from 'react';
import axios from 'axios';
import './RestData.css';
import SingleRest from './SingleRest'
import {findLocation} from './Location'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'

// The markers on the map are being initializied to a remote location.

var markOne = [{"id":0, "coordinates":{"latitude":0, "longitude":0}}];

var markTwo = [{"id":1, "coordinates":{"latitude":0, "longitude":0}}];

var markThree = [{"id":2, "coordinates":{"latitude":0, "longitude":0}}];

var markFour = [{"id":3, "coordinates":{"latitude":0, "longitude":0}}];

var markFive = [{"id":4, "coordinates":{"latitude":0, "longitude":0}}];

// The initial center of the map is set to the center of the United States.

var centerMap = {lat: 39.828175, lng: -98.5795}

// The initial zoom of the map is set to 3 as to see the entire country upon loading the website.

var zoomMap = 3;

// Beginning the RestData react component.

class RestData extends Component {

    constructor(props) {

        super(props);
        this.state = {

            // restData will hold the business information gathered from the YELP API.
            restData: [], 

            // result will hold the input from the user from the text entry field.
            result: "",

            // submit will hold the DOM element of the submit button for the text entry field. 
            submit: document.getElementById("submit"), 

            // hidden will decide whether the business data should be revealed to the user or not.
            hidden: true,

            // lat holds the latitude coordinate of the user.
            lat: 38.924110,

            // long holds the longitude coordinate of the user. 
            long: -77.213120,

            // Wrapped Map allows the Google Maps API to work with JavaScript.
            WrappedMap: withScriptjs(withGoogleMap(this.Map)),

            // sorter holds the initial sorting option.
            sorter: "best_match"
    }

}

// The hiddenState method controls whether the business information is displayed through changing the state of the hidden state.
hiddenState = () => {
    
    this.setState(prevState => ({
        hidden: false
    }))
}

// The waitForData method is an asynchronous method that waits for the getData function to execute before continuing.
// This is a helper method that is used to support larger methods in this class.
async waitForData() {

    await this.getData();

}

/* The Map method creates the Google Maps API object. It establishes a zoom and center with the variables initialized outside of this class,
and then it defines multiple markers using the variables initialized outside of this class.*/

Map () {
    
    return (
    
    <div><GoogleMap 

    zoom={zoomMap} 
    center={centerMap}
    >  

    </GoogleMap>

    <Marker
        key={markOne[0]["id"]}
        position ={{
            lat: markOne[0]["coordinates"]["latitude"],
            lng: markOne[0]["coordinates"]["longitude"]
        }}
        title = {markOne[0]["name"]}  
        onClick = {() => {window.open(markOne[0]['url'])}} 
        icon = "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"  
        ></Marker>

        <Marker
        key={markTwo[0]["id"]}
        position ={{
            lat: markTwo[0]["coordinates"]["latitude"],
            lng: markTwo[0]["coordinates"]["longitude"]
        }}
        title = {markTwo[0]["name"]} 
        onClick = {() => {window.open(markTwo[0]['url'])}}  
        icon = "http://maps.google.com/mapfiles/ms/icons/pink-dot.png" 
        ></Marker>

        <Marker
        key={markThree[0]["id"]}
        position ={{
            lat: markThree[0]["coordinates"]["latitude"],
            lng: markThree[0]["coordinates"]["longitude"]
        }}
        title = {markThree[0]["name"]}   
        onClick = {() => {window.open(markThree[0]['url'])}}  
        icon = "http://maps.google.com/mapfiles/ms/icons/pink-dot.png" 
        ></Marker>

        <Marker
        key={markFour[0]["id"]}
        position ={{
            lat: markFour[0]["coordinates"]["latitude"],
            lng: markFour[0]["coordinates"]["longitude"]
        }}
        title = {markFour[0]["name"]}   
        onClick = {() => {window.open(markFour[0]['url'])}}  
        icon = "http://maps.google.com/mapfiles/ms/icons/pink-dot.png" 
        ></Marker>

         <Marker
        key={markFive[0]["id"]}
        position ={{
            lat: markFive[0]["coordinates"]["latitude"],
            lng: markFive[0]["coordinates"]["longitude"]
        }}
        title = {markFive[0]["name"]}  
        onClick = {() => {window.open(markFive[0]['url'])}}  
        icon = "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"  
        ></Marker>

        <Marker
        key={"userLocation"}
        position ={{
            lat: parseFloat(document.getElementById("userLat").getAttribute("text")),
            lng: parseFloat(document.getElementById("userLong").getAttribute("text"))
        }}
        title = "You are here!" 
        icon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        ></Marker>
        </div>)
}

// The setMarkers method takes in the business data from the YELP API and uses the first five restaurants information to alter the Markers on the Google Maps object. 
setMarkers(data) {

    markOne = [data[0]];

    markTwo = [data[1]];

    if (data[2]) {

    markThree = [data[2]];
    }

    if (data[3]) {
    markFour = [data[3]];
    }

    if (data[4]) {
        markFive = [data[4]];
    }

}

// toggleHidden is activated when the submit button is hit.

toggleHidden = e => {

    // This prevents the page from reloading whenever the submit button is hit.
    e.preventDefault()

    // The result state is updated to reflect the user's input into the text entry field.
    this.setState(prevState => ({
        result: document.getElementById("userInput").value
    }))

    // The findLocation method is called in case their location has changed since their last time submitting a request.

    findLocation();

    // The latitude coordinate is updated to reflect what findLocation has changed in the DOM. 

    this.setState(prevState => ({
        lat: document.getElementById("userLat").getAttribute("text")
    }))

    // The longitude coordinate is updated to reflect what findLocation has changed in the DOM. 

    this.setState(prevState => ({
        long: document.getElementById("userLong").getAttribute("text")
    }))

    // A small timeout is established, as to give RestData enough time to accurately update the business information from the defaults.

    setTimeout(this.hiddenState, 2000)

    // waitForData is called to ensure that the correct business data is shown.

    this.waitForData();

    // The center of the map will be changed to the user's location.

    centerMap = {lat: parseFloat(document.getElementById("userLat").getAttribute("text")), lng: parseFloat(document.getElementById("userLong").getAttribute("text"))}

    // The markers will be reset back to zero, so that setMarkers can accurately redefine their locations based on the user's new request.

    markOne = [{"id":0, "coordinates":{"latitude":0, "longitude":0}}];

    markTwo = [{"id":1, "coordinates":{"latitude":0, "longitude":0}}];

    markThree = [{"id":2, "coordinates":{"latitude":0, "longitude":0}}];

    markFour = [{"id":3, "coordinates":{"latitude":0, "longitude":0}}];

    markFive = [{"id":4, "coordinates":{"latitude":0, "longitude":0}}];

    // The zoom value will be increased to 12 as to see where these local restaurants are.

    zoomMap = 12;

}

// The sort method allows the dropdown selection menu to properly sort the data delivered to the user.

sort() {

    // If the user selects best match as their requested sort, this will change the state of sorter to best_match and hit the submit button.

    var bestMatch = document.getElementById("bestMatch")

    bestMatch.onclick = () => {
        this.setState(prevState => ({
            sorter: "best_match"
        }));

        document.getElementById("submit").click();
    }

    // If the user selects rating as their requested sort, this will change the state of sorter to rating and hit the submit button.
    
    var rating = document.getElementById("rating")

    rating.onclick = () => {
        this.setState(prevState => ({
            sorter: 'rating'
        }));

        document.getElementById("submit").click();
    }

    // If the user selects distance as their requested sort, this will change the state of sorter to distance and hit the submit button.

    var distance = document.getElementById("distance")

    distance.onclick = () => {
        this.setState(prevState => ({
            sorter: "distance"
        }));

        document.getElementById("submit").click();
        
    }

}

// The getData method fetches data from the YELP API.

async getData() {

    // This asynchronous method waits for the findLocation method to execute before fetching data. This is to prevent data from the default location being displayed.
    
    await findLocation()

    // The data is sorted based on the user's request before the API call is made.

    this.sort()

    // Anytime the submit button is hit, toggleHidden is called. 
    
    this.state.submit.onclick = this.toggleHidden

    // Axios was used for the API call, with a herokuapp URL to prevent CORS from preventing app functionality.
    
    axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {

    // The API key for YELP is stored in an environment variable.

  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    },

    // The result, latitude, longitude, and sorter states are used to make an accurate API call.

    params: {
        term: this.state.result,
        latitude: this.state.lat,
        longitude: this.state.long,
        sort_by: this.state.sorter,
    }
    
    })

    // After the data is fetched with axios, the business results are then sent to the restData state array. 
    // setMarkers is also called to ensure that the markers are placed in the right locations.
    .then((response) =>  {

        this.setState({
            restData: response.data.businesses
        });

        this.setMarkers(response.data.businesses)

    })
    
    // In case any erros occur, this is meant to catch them and report them to the console for debugging. 

    .catch((error) => console.log(error));
}

// getData is called anytime the component is mounted to the site. 

componentDidMount() {

    this.getData();
    
}

// The renderItems method maps the businesses stored in the restData state array to individual SingleRest objects for displaying on the website.
renderItems() {

    return this.state.restData.map((item) => (
        <SingleRest key={item.url} item={item}/>

    ))
    
}

/* This render method returns the Wrapped Google Map with the Google Maps API key to the #root div. Please do not use my Google Maps API key, as 
it is my personal key and will be deactivated as soon as this project comes to a close. When this API key was placed into an environment variable, 
the site would no longer function as designed. Whether the data is hidden, as well as the rendered data itself, is also placed into the #root div
from this render method.*/

    render() {
        
        return ( 
            <div>
            <div className="map">
            <this.state.WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
                'AIzaSyBarhgnOifKoJbC0xF5srNBmzGp1PsAVcs'
            }`}
            loadingElement={<div style={{height:"100%"}} /> }
            containerElement={<div style={{height:"100%"}} /> }
            mapElement={<div style={{height:"100%"}} /> }
            />
            </div>
            <div style={this.state.hidden ? {display:"none"} : {display:"block"}}> 
            <div className="data">{this.renderItems()}</div>
            </div>
            </div>
            
    
        )
    }

    

}

export default RestData;

