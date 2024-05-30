let map;

const APIKEY = "AIzaSyDiGQQfGOQhaN__gJWQzYbepqVG05NmqTI"

const url = "https://cors-anywhere-jung-48d4feb9d097.herokuapp.com/" + "https://maps.googleapis.com/maps/api/js?key=AIzaSyDiGQQfGOQhaN__gJWQzYbepqVG05NmqTI&loading=async&libraries=places&callback=initMap";


async function initMap() {

  var options = {
    zoom: 16,
    center: { lat: 28.601850034893445, lng: -81.19759825701948 },
    
  }

  var map = new
  google.maps.Map(document.getElementById('map'), options);
  
  
  const { Map } = await google.maps.importLibrary("maps");

  

  var marker = new google.maps.Marker({
    position:{lat:42.4668, lng: -70.9495},
    map: map
  });

  var infoWindow = new google.maps.InfoWindow({
    content:'<h1>woof</h1>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });


}

initMap();



// addMarker({
//   coords:{lat:42.8584, lng: -70.9300}
// })

// function addMarker(props){
//   var marker = new google.maps.marker({
//     positon:coords,
//     map:map,
//     icon:props.iconImage
//   })
// }




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

