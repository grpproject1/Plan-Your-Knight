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
  
// Hardcoded parking (nearest 20 within 1 mile)
const p1 = addMarker({
  coords:{lat: 28.59931385, lng: -81.19764343879355,},
  content:'<h1>Parking</h1>'
});
const p2 = addMarker({
  coords:{lat: 28.5989923, lng: -81.19753491921549,},
  content:'<h1>Parking</h1>'
});
const p3 = addMarker({
  coords:{lat: 28.59965215, lng: -81.1977661889483,},
  content:'<h1>Parking</h1>'
});
const p4 = addMarker({
  coords:{lat: 28.59753485, lng: -81.19666027674731,},
  content:'<h1>Parking</h1>'
});
const p5 = addMarker({
  coords:{lat: 28.59726535, lng: -81.1974185836448,},
  content:'<h1>Parking</h1>'
});
const p6 = addMarker({
  coords:{lat: 28.5972515, lng: -81.19732777976934,},
  content:'<h1>Parking</h1>'
});
const p7 = addMarker({
  coords:{lat: 28.59729765, lng: -81.19658849689151,},
  content:'<h1>Parking</h1>'
});
const p8 = addMarker({
  coords:{lat: 28.596887000000002, lng: -81.196147443348,},
  content:'<h1>Parking</h1>'
});
const p9 = addMarker({
  coords:{lat: 28.601376700000003, lng: -81.19602257741718,},
  content:'<h1>Parking</h1>'
});
const p10 = addMarker({
  coords:{lat: 28.59702355, lng: -81.1989022761598,},
  content:'<h1>Parking</h1>'
});
const p11 = addMarker({
  coords:{lat: 28.596522, lng: -81.19800161744283,},
  content:'<h1>Parking</h1>'
});
const p12 = addMarker({
  coords:{lat: 28.5964478, lng: -81.19591531228271,},
  content:'<h1>Parking</h1>'
});
const p13 = addMarker({
  coords:{lat: 28.5961117, lng: -81.19668386523279,},
  content:'<h1>Parking</h1>'
});
const p14 = addMarker({
  coords:{lat: 28.5964679, lng: -81.1967058,},
  content:'<h1>Parking</h1>'
});
const p15 = addMarker({
  coords:{lat: 28.5963482, lng: -81.1969695,},
  content:'<h1>Parking</h1>'
});
const p16 = addMarker({
  coords:{lat: 28.60256305, lng: -81.19571185092033,},
  content:'<h1>Parking</h1>'
});
const p17 = addMarker({
  coords:{lat: 28.6017295, lng: -81.1963112,},
  content:'<h1>Parking</h1>'
});
const p18 = addMarker({
  coords:{lat: 28.6017437, lng: -81.1963215,},
  content:'<h1>Parking</h1>'
});
const p19 = addMarker({
  coords:{lat: 28.59690265, lng: -81.20040525132633,},
  content:'<h1>Parking</h1>'
});
const p20 = addMarker({
  coords:{lat: 28.601756, lng: -81.1958105,},
  content:'<h1>Parking</h1>'
});




// Hardcoded restuarants (nearest 20 within 1 mile)
const r1 = addMarker({
  coords:{lat: 28.5979074, lng: -81.1998033,},
  content:'<h1>63 South</h1>'
});
const r2 = addMarker({
  coords:{lat: 28.5960256, lng: -81.19875738712756,},
  content:'<h1>Chick-fil-A</h1>'
});
const r3 = addMarker({
  coords:{lat: 28.5958111, lng: -81.1991321,},
  content:'<h1>Smoothie King</h1>'
});
const r4 = addMarker({
  coords:{lat: 28.599339049999998, lng: -81.20132644502809,},
  content:'<h1>Toppers</h1>'
});
const r5 = addMarker({
  coords:{lat: 28.6016101, lng: -81.2004312,},
  content:'<h1>Smoothie King</h1>'
});
const r6 = addMarker({
  coords:{lat: 28.6017791, lng: -81.2003765,},
  content:'<h1>Smoke & Donuts BBQ</h1>'
});
const r7 = addMarker({
  coords:{lat: 28.6021284, lng: -81.2003113,},
  content:'<h1>Which Wich?</h1>'
});
const r8 = addMarker({
  coords:{lat: 28.6010937, lng: -81.2012939,},
  content:'<h1>Dominos</h1>'
});
const r9 = addMarker({
  coords:{lat: 28.6020943, lng: -81.2004807,},
  content:'<h1>Bento Sushi</h1>'
});
const r10 = addMarker({
  coords:{lat: 28.6021939, lng: -81.2003916,},
  content:'<h1>Huey Magoos</h1>'
});
const r11 = addMarker({
  coords:{lat: 28.601277, lng: -81.2012624,},
  content:'<h1>Chick-fil-A</h1>'
});
const r12 = addMarker({
  coords:{lat: 28.6022033, lng: -81.2005073,},
  content:'<h1>Panda Express</h1>'
});
const r13 = addMarker({
  coords:{lat: 28.6021041, lng: -81.2006699,},
  content:'<h1>Steak n Shake</h1>'
});
const r14 = addMarker({
  coords:{lat: 28.6021694, lng: -81.2006064,},
  content:'<h1>Qdoba</h1>'
});
const r15 = addMarker({
  coords:{lat: 28.6067927, lng: -81.1970696,},
  content:'<h1>Jimmy Johns</h1>'
});
const r16 = addMarker({
  coords:{lat: 28.6067323, lng: -81.1985877,},
  content:'<h1>Dunkin</h1>'
});
const r17 = addMarker({
  coords:{lat: 28.6068082, lng: -81.1985488,},
  content:'<h1>Subway</h1>'
});
const r18 = addMarker({
  coords:{lat: 28.6070409, lng: -81.1965718,},
  content:'<h1>Burger U</h1>'
});
const r19 = addMarker({
  coords:{lat: 28.6070156, lng: -81.1984234,},
  content:'<h1>Dominoak</h1>'
});
const r20 = addMarker({
  coords:{lat: 28.607229, lng: -81.1982791,},
  content:'<h1>Gringos Locos</h1>'
});   

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


// for parking locations:
const parkingURL = "https://api.geoapify.com/v2/places?categories=parking&filter=circle:-81.197125012,28.59899755,1610&bias=proximity:-81.197125012,28.59899755&limit=20&apiKey=d3720612c9c24768b1672bff3ae0a512";

fetch(parkingURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const parkingObjects = [];

    for (let i = 0; i < data.features.length; i++) {
      const feature = data.features[i];
      const parkingObj = {
        lat: feature.properties.lat,
        long: feature.properties.lon
      };
      parkingObjects.push(parkingObj);
    }

    console.log(parkingObjects);
  })
  .catch(function(error) {
    console.error('Error:', error);
  });



  // for restaurant locations:
  const restaurantsURL = "https://api.geoapify.com/v2/places?categories=catering.restaurant,catering.fast_food&filter=circle:-81.197125012,28.59899755,1610&bias=proximity:-81.197125012,28.59899755&limit=20&apiKey=d3720612c9c24768b1672bff3ae0a512";

  fetch(restaurantsURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const restaurantObjects = [];
  
      for (let i = 0; i < data.features.length; i++) {
        const feature = data.features[i];
        const restaurantObj = {
          name: feature.properties.name,
          lat: feature.properties.lat,
          long: feature.properties.lon
        };
        restaurantObjects.push(restaurantObj);
      }
  
      console.log(restaurantObjects);
    })
    .catch(function(error) {
      console.error('Error:', error);
    });
  

  