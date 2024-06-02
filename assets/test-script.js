let map;
let service;
let infowindow;


const APIKEY = "AIzaSyCHs1VhqYAn40Laryj8LL-DD7mZ-RiS0qI"

const url = "https://cors-anywhere-jung-48d4feb9d097.herokuapp.com/" + "https://maps.googleapis.com/maps/api/js?key=AIzaSyCHs1VhqYAn40Laryj8LL-DD7mZ-RiS0qI&loading=async&libraries=places&callback=initMap";


async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    center: { lat: 28.601850034893445, lng: -81.19759825701948 },
    zoom: 14,
    mapId: "f3c18e711fa3469e",
  });
  
    const marker = new AdvancedMarkerElement({
    map,
    position: {lat: 28.601850034893445, lng: -81.19759825701948},//main campus
    position: {lat: 28.608048, lng: -81.19266}, //stadium
    position: {lat: 28.60834, lng: -81.19734}, //arena
    position: {lat: 28.60223, lng: -81.20029},  //student union
    position: {lat: 28.60480, lng: -81.19869} //memory mall tailgate
    });
    //info for marker locations UCF main campus, stadium, arena, student union (student discout pickup)
    //one location for tailgating

    function initialize() {
        let orlando = new google.maps.LatLng(-81.19759825701948,28.601850034893445);
      
        map = new google.maps.Map(document.getElementById('map'), {
            center: orlando,
            zoom: 15
          });
      
        let request = {
          location: orlando,
          radius: '500',
          type: ['restaurant']
        };
      
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
      }
      
      function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }  
      getElementById('map').addeventlistner('enter');
      callback();
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




    // Attempt to find users current location
    // x=navigator.geolocation;

    // x.getCurrentPosition(success, failure);

    // function success(position){
    //   let myLat = position.coords.latitude;
    //   let myLong = position.coords.longitude;

    //   let coords = new google.maps.LatLng(myLat, myLong);

    //   const mapOptions = {
    //     zoom: 14,
    //     center: coords,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   }

    //   const map = new google.maps.Map(document.getElementById("map"),mapOptions)
    //   const marker = new google.maps.Marker({
    //     map:map,
    //     position: coords
    //   });
    // }

    // function failure(){}



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

    //Add Marker
  // var marker = new google.maps.Marker({
  //   position:{lat:42.4668, lng: -70.9495},
  //   map: map
  // });

  // var infoWindow = new google.maps.InfoWindow({
  //   content:'<h1>woof</h1>'
  // });

  // marker.addListener('click', function(){
  //   infoWindow.open(map, marker);
  // });


  //Custom Marker Template
  // addMarker((
  //   {coords:lat:  , lng:    },
  //   iconImage: ''
  //   content: '<h1> Insert Text Here </h1>
  // ));

  //Array of markers
  // var markers = [
  //   {
  //     coords:{lat: 28.602023173142335, lng: -81.20025877273342,},
  //     content:'<h1>bork bork</h1>'
  //   },
  //   {coords:{lat:42.4668, lng: -70.9495},
  //   content: '<h1>morp</h1>'}


  // ];

  // //Loop through markers

  // addMarker({coords:{lat:42.4668, lng: -70.9495}});
  // addMarker({
  //   coords:{lat: 28.602023173142335, lng: -81.20025877273342,},
  //   content:'<h1>bork bork</h1>'
  // });