mapboxgl.accessToken =
  "pk.eyJ1IjoicmV2b3Zpc2lvbnMiLCJhIjoiY2tycG5rbzF4OHEwZTMxbzg1Nnpkd3R5ZSJ9.6ELY0c9jpUyT21w8qSv1qg";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/revovisions/ckm2hlo8e0vlt18qtn53ulawp", // style URL
  center: [-71.104081, 42.365554], // starting position [lng, lat]
  zoom: 12, // starting zoom
  pitch: 20,
});

async function run() {
  // get bus data

  const locations = await getBusLocations();

  for (let i = 0; i < locations.length; i++) {
    if (locations.length !== undefined) {
      const marker = new mapboxgl.Marker();
      const longitude = locations[i].attributes.longitude;
      const latitude = locations[i].attributes.latitude;
      marker.setLngLat([longitude, latitude]);
      marker.addTo(map);
      marker.setPopup(new mapboxgl.Popup().setHTML(locations[i].id));
    } else {
      setTimeout(() => marker.remove(), 15000);
    }
  }
}

setTimeout(() => {
  getBusLocations();

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
