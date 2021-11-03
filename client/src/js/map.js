/* eslint-disable */
export function initMap() {
  const mapContainer = document.getElementById('js-map');
  const coordinates = { lat: 50.4547, lng: 30.5238 };
  const correctZoom = 10;
  const map = new google.maps.Map(mapContainer, {
    center: coordinates,
    zoom: correctZoom,
  });
  const marker = new google.maps.Marker({
    position: coordinates,
    map: map,
  });
}

window.initMap = initMap
