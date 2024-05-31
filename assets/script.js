let map;

const APIKEY = "AIzaSyDiGQQfGOQhaN__gJWQzYbepqVG05NmqTI"

const url = "https://cors-anywhere-jung-48d4feb9d097.herokuapp.com/" + "https://maps.googleapis.com/maps/api/js?key=AIzaSyCHs1VhqYAn40Laryj8LL-DD7mZ-RiS0qI&loading=async&libraries=places&callback=initMap";



async function initMap() {

  var options = {
    zoom: 16,
    center: { lat: 28.601850034893445, lng: -81.19759825701948 },
    
  }

  //new map
  var map = new
  google.maps.Map(document.getElementById('map'), options);
  
  
  const { Map } = await google.maps.importLibrary("maps");

  
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
  var markers = [
    {
      coords:{lat: 28.602023173142335, lng: -81.20025877273342,},
      content:'<h1>bork bork</h1>'
    },
    {coords:{lat:42.4668, lng: -70.9495},
    content: '<h1>morp</h1>'}


  ];

  //Loop through markers

  addMarker({coords:{lat:42.4668, lng: -70.9495}});
  addMarker({
    coords:{lat: 28.602023173142335, lng: -81.20025877273342,},
    content:'<h1>bork bork</h1>'
  });
  
  const p1 = addMarker({lat: 28.59931385, lng: -81.19764343879355,});
  const p2 = addMarker({lat: 28.5989923, lng: -81.19753491921549,});
  const p3 = addMarker({lat: 28.59965215, lng: -81.1977661889483,});
  const p4 = addMarker({lat: 28.59753485, lng: -81.19666027674731,});
  const p5 = addMarker({lat: 28.59726535, lng: -81.1974185836448,});
  const p6 = addMarker({lat: 28.5972515, lng: -81.19732777976934,});
  const p7 = addMarker({lat: 28.59729765, lng: -81.19658849689151,});
  const p8 = addMarker({lat: 28.596887000000002, lng: -81.196147443348,});
  const p9 = addMarker({lat: 28.601376700000003, lng: -81.19602257741718,});
  const p10 = addMarker({lat: 28.59702355, lng: -81.1989022761598,});
  const p11 = addMarker({lat: 28.596522, lng: -81.19800161744283,});
  const p12 = addMarker({lat: 28.5964478, lng: -81.19591531228271,});
  const p13 = addMarker({lat: 28.5961117, lng: -81.19668386523279,});
  const p14 = addMarker({lat: 28.5964679, lng: -81.1967058,});
  const p15 = addMarker({lat: 28.5963482, lng: -81.1969695,});
  const p16 = addMarker({lat: 28.60256305, lng: -81.19571185092033,});
  const p17 = addMarker({lat: 28.6017295, lng: -81.1963112,});
  const p18 = addMarker({lat: 28.6017437, lng: -81.1963215,});
  const p19 = addMarker({lat: 28.59690265, lng: -81.20040525132633,});
  const p20 = addMarker({lat: 28.601756, lng: -81.1958105,});
  

    //Add Marker Function
    //in order to add a custom image 
    //icon: props.iconImage
    //needs to be added under map:map inside of this function
  function addMarker(props){
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map
      //icon:props.iconImage
    });


    //If you guys implement custom icons uncomment this

    // //Check for customicon
    // if(props.iconImage){
    //   //Set icon image
    //   marker.secIcon(props.iconImage);
    // }

    //Check Content
    if(props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });

    }

  }

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


  