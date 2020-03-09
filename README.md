# Meal Mapper Restaurant Recommender
Hello Capital One Software Engineers and anyone else who finds this project; Welcome to Meal Mapper! This is my project for my application to Capital One's Software Engineering Summit application. It incorporates the Yelp API, the Google Maps API. HTML Geolocation, and many other tools to bring users a restaurant recommending experience! 

# Preface

Prior to this project, I had little to no experience working extensively with HTML, CSS, JavaScript, or React. This is my first attempt at a full web app and I am proud of the amount of work I have put into learning these different web based tools.

I designed this web application on a 15" Microsoft SurfaceBook 2 using Visual Studio Code and Google Chrome. Since I know that I am no expert on responsive web pages, I apologize if my project looks off-center or if dimensions are not as I designed them to be.

In the default branch, gh-pages, you will find the build for my React application. A more readable documentation for my code can be found in the master branch, with comments to guide readers through my code.

# Functionality

The application itself consists of multiple pieces, the first being the Yelp API interaction through the text entry field. The submit button on this text entry box has a magnifying class that turns into a fork when a user hovers over it. The user types what they are hungry for or a specific restaurant name into this field, and then either can hit enter on their keyboard or click on the animated submit button. After this button is hit, the Google Maps component will zoom in on the user's location, add markers on the map for up to the first five restaurants that are returned through axios's API call, and displays information for at least 20 restaurants in the user's area that are related to the user's text input. 

The Google Maps API component is initially zoomed out to show the continental United States. As stated before, the map zooms in on the user once they enter a string into the text box. The markers have titles, so if a user were to hover over them with their cursor the name of that restaurant would appear. The blue marker indicates the location of the user, while the pink markers indicate the restaurant locations. 

Users have three different options for sorting these results- best match, rating and distance. These sorts are done within the Yelp API during the axios get method in the RestData class React Component. The user may choose between them by selecting them from the dropdown menu titled "Sort Results By" after they make their request.

Once the results have actually loaded below the map, users will be able to see an image, name, address, rating, and link to Yelp page for each of the 20 loaded locations. The rating is accompanied by a Font Awesome API star icon. These locations are not loaded onto the page until the user submits a request, before this they are hidden completely. 

# For Fun

At the top of the page is the mascot for Meal Mapper, a piece of broccoli with a magnifying glass that helps people find the quality food they are hungry for. It's name is Brock Lee, and I wanted to mention this in case anyone was curios as to what it's name was. I also had fun working on the magnifying class to fork animation in the search bar, as that idea allowed me to expand my CSS knowledge into animations.
