
// The purpose of this JavaScript file is to create a uniform design for the display of each businesses' information and image.

import React from 'react'
import "./SingleRest.css"
import "./star.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

// The SingleRest constant contains an arrow function which contains much HTML code that will be used in the RestData.js file and therefore in the DOM. 

// The HTML below displays each location's name, rating along with a star from FontAwesome, as well as their printed address and a link to their Yelp page.
// An image of each location provided by the YELP API is also provided to the left of all of this information.
const SingleRest = ({item}) => (

    <div>
        <div className="restContainer">
            <h2 className="locInfo" id="name">{item.name}</h2>
            <h3 className="locInfo" id="rat">{item.rating} <FontAwesomeIcon name="star" className="star" icon={faStar} size="lg" color="#ffbc30"/></h3>
            <h4 className="locInfo" id="loc">{"  " + item.location.address1 + ", " + item.location.city + ", " + item.location.state}</h4>
            <a href={item.url} target="_blank"> Find out more here!</a>
        </div>
        <div className="picContainer">
            <img className="restPic" src={item.image_url} alt={item.alias}></img>
            </div>
    </div>
)

export default SingleRest;