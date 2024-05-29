let map;

// 28.601850034893445, -81.19759825701948

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 28.601850034893445, lng: -81.19759825701948 },
    zoom: 16,
  });
}




initMap();

// function searchBar
// currentData = {
//     query 


// }


const input = document.getElementById("searchBar");
const searchBox = new google.maps.places.SearchBox(input);

findPlaceFromQuery(request, function(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for ( var i= 0; i <results.length; i++) {
      createMarker(results[i]);
    }
    map.setCenter(results[0].geometry.location);
  }
})

//nearby search data?
console.log(currentData);