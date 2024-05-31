let map;

const APIKEY = "AIzaSyDiGQQfGOQhaN__gJWQzYbepqVG05NmqTI"

const url = "https://cors-anywhere-jung-48d4feb9d097.herokuapp.com/" + "https://maps.googleapis.com/maps/api/js?key=AIzaSyCHs1VhqYAn40Laryj8LL-DD7mZ-RiS0qI&loading=async&libraries=places&callback=initMap";


async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

map = new Map(document.getElementById("map"), {
    center: { lat: 28.601850034893445, lng: -81.19759825701948 },
    zoom: 14
  });
}

initMap();
















//Name
//Latitude, Longitude
//Image URL
// ScaledSize width, height

// const markers = [
//   [
//     "Knightstop",
//     28.601882536369722,
//     -81.20066893398244,
//     "marker-icon.png",
//     38,
//     31
//   ],
//   [
//     "Steak 'n Shake",
//     28.601904608458174,
//     -81.20074108245133,
//     "marker-icon.png",
//     38,
//     31
//   ],
//   [
//     "Smoothie King",
//     28.601727991474807,
//     -81.2004205584811,
//     "marker-icon.png",
//     38,
//     31
//   ],
//   [
//     "Purple Ocean",
//     28.60181806617204,
//     -81.2009459361654,
//     "marker-icon.png",
//     38,
//     31
//   ],
//   [
//     "Which Wich",
//     28.602295519660316,
//     -81.20028704211859,
//     "marker-icon.png",
//     38,
//     31
//   ],
//   [
//     "Huey Magoo's Chicken Tenders",
//     28.60193226247241,
//     -81.20012126154299,
//     "marker-icon.png",
//     38,
//     31
//   ],
//   [
//     "Starbucks",
//     28.602023173142335,
//     -81.20025877273342,
//     "marker-icon.png",
//     38,
//     31
//   ],
//   [
//     "Panda Express",
//     28.601914047996697,
//     -81.20072470188155,
//     "marker-icon.png",
//     38,
//     31
//   ]
// ];

// for (let i = 0; i<markers.length; i++){
//   const currMarker = markers[i];
//   const marker = new google.maps.Marker({
//     position: {lat: currMarker[1], lng: currMarker[2]},
//     map,
//     title:currMarker[0],
//     icon: {
//       url:currMarker[3],
//       scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
//     },
//     animation: google.maps.Animation.DROP
// });
// }




// const restaurants = [
//   ["Knightstop", 28.601882536369722, -81.20066893398244],
//   ["Steak 'n Shake", 28.601904608458174, -81.20074108245133],
//   ["Smoothie King", 28.601727991474807, -81.2004205584811],
//   ["Purple Ocean", 28.60181806617204, -81.2009459361654],
//   ["Which Wich",28.602044135665917, -81.20035316796755],
//   ["Huey Magoo's Chicken Tenders", 28.60193226247241, -81.20012126154299],
//   ["Starbucks",28.602023173142335, -81.20025877273342],
//   ["Panda Express",28.601914047996697, -81.20072470188155],
// ];





// fetch(url).then(response => {
//   return response.json()
// }).then(data => {
//   console.log(data);
// });

// function searchBar
// currentData = {
//     query 


// }


// const input = document.getElementById("searchBar");
// const searchBox = new google.maps.places.SearchBox(input);

// findPlaceFromQuery(request, function(results, status) {
//   if (status === google.maps.places.PlacesServiceStatus.OK) {
//     for ( var i= 0; i <results.length; i++) {
//       createMarker(results[i]);
//     }
//     map.setCenter(results[0].geometry.location);
//   }
// })



// map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
// // Bias the SearchBox results towards current map's viewport.
// map.addListener("bounds_changed", () => {
//   searchBox.setBounds(map.getBounds());
// });

// let markers = [];

// // Listen for the event fired when the user selects a prediction and retrieve
// // more details for that place.
// searchBox.addListener("places_changed", () => {
//   const places = searchBox.getPlaces();

//   if (places.length == 0) {
//     return;
//   }

//   // Clear out the old markers.
//   markers.forEach((marker) => {
//     marker.setMap(null);
//   });
//   markers = [];

//nearby search data?
//console.Log(currentData)


// ////////////////////////////////////////////////////////////////////////// (SECOND API: geoapify)

// API Key for GeoApify: d3720612c9c24768b1672bff3ae0a512
// The below data is all pulled via the geoapify API to populate the closest restaurant and parking locations (up to 20 each) within 1 mile radius of UCF

// Fetch data for restaurants:
const restaurantsURL = "https://api.geoapify.com/v2/places?categories=catering.restaurant&filter=circle:-81.197125012,28.59899755,1610&bias=proximity:-81.197125012,28.59899755&limit=20&apiKey=d3720612c9c24768b1672bff3ae0a512";

fetch(restaurantsURL)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.features.length; i++) {
      console.log(data.features[i].properties.name);
      console.log(data.features[i].properties.lon);
      console.log(data.features[i].properties.lat);
    }
  })
  .catch(error => console.error('Error:', error));


// Fetch data for parking:
const parkingURL= "https://api.geoapify.com/v2/places?categories=parking&filter=circle:-81.197125012,28.59899755,1610&bias=proximity:-81.197125012,28.59899755&limit=20&apiKey=d3720612c9c24768b1672bff3ae0a512";

fetch(parkingURL)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.features.length; i++) {
      console.log(data.features[i].properties.name);
      console.log(data.features[i].properties.lon);
      console.log(data.features[i].properties.lat);
    }
  })
  .catch(error => console.error('Error:', error));


  