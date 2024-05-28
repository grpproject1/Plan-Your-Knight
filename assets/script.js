let map;

// 28.601850034893445, -81.19759825701948

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 28.601850034893445, lng: -81.19759825701948 },
    zoom: 16,
  });
}

const input = document.getElementById("")


//most_relevant

initMap();


