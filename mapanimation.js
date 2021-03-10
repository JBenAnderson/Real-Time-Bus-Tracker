mapboxgl.accessToken =
  "INSERT YOUR PUBLIC ACCESS TOKEN";
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
  // console.log(new Date());
  console.log(locations);

  for (let i = 0; i < locations.length; i++) {
    let longitude = locations[i].attributes.longitude;
    let latitude = locations[i].attributes.latitude;

    var marker = new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);
  }

  // update markers with timer
  setTimeout(run, 15000);
}

// Request bus data from MBTA
async function getBusLocations() {
  const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}

run();
