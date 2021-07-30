mapboxgl.accessToken =
  "pk.eyJ1IjoicmV2b3Zpc2lvbnMiLCJhIjoiY2ttM3VicWVzMGo2czJwbzJvczdoamsybyJ9.reVWjshg2xDsk7zBYHpiaA";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/revovisions/ckm2hlo8e0vlt18qtn53ulawp", // style URL
  center: [-71.104081, 42.365554], // starting position [lng, lat]
  zoom: 17, // starting zoom
  pitch: 20,
});

async function run() {
  // get bus data
  const locations = await getBusLocations();

  for (let i = 0; i < locations.length; i++) {
    const marker = new mapboxgl.Marker();
    const longitude = locations[i].attributes.longitude;
    const latitude = locations[i].attributes.latitude;
    marker.setLngLat([longitude, latitude]);
    marker.addTo(map);
    marker.setPopup(new mapboxgl.Popup().setHTML(locations[i].id));
  }
}

setTimeout(() => {
  run();
}, 15000);

// Request bus data from MBTA

async function getBusLocations() {
  const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";
  const response = await fetch(url);
  const json = await response.json();

  return json.data;
}

run();
