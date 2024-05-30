let map;

const APIKEY = "AIzaSyCHs1VhqYAn40Laryj8LL-DD7mZ-RiS0qI"

const url = "https://cors-anywhere-jung-48d4feb9d097.herokuapp.com/" + "https://maps.googleapis.com/maps/api/js?key=AIzaSyCHs1VhqYAn40Laryj8LL-DD7mZ-RiS0qI&loading=async&libraries=places&callback=initMap";


async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new Map(document.getElementById("map"), {
    center: { lat: 28.601850034893445, lng: -81.19759825701948 },
    zoom: 14,
    mapId: "f3c18e711fa3469e",
  });
  //create a new const marker below to add addtional markers below
  const marker = new AdvancedMarkerElement({
    map,
    position: { lat: 28.601850034893445, lng: -81.19759825701948},
    });

    
}

initMap();














