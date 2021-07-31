mapboxgl.accessToken = "INSERT ACCESS TOKEN";

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
  const busCount = locations.length;

  const factory = function () {
    for (let i = 0; i < busCount; i++) {
      const marker = new mapboxgl.Marker();
      const longitude = locations[i].attributes.longitude;
      const latitude = locations[i].attributes.latitude;

      marker.setLngLat([longitude, latitude]);
      marker.addTo(map);
      console.log("marker(s) added.");
      marker.setPopup(new mapboxgl.Popup().setHTML(locations[i].id));

      for (let j = 0; j < busCount; j++) {
        marker.setLngLat([longitude, latitude]);
        setTimeout(() => marker.remove(), 7000);
      }
    }
  };
  factory();
}
setInterval(() => {
  run();
}, 7000);
// Request bus data from MBTA

async function getBusLocations() {
  const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";
  const response = await fetch(url);
  const json = await response.json();

  return json.data;
}
run();
