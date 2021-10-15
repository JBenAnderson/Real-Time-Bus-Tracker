# Real-Time-Bus-Tracker

Using geo-location data from MIT bus routing and api from Mapbox you can create an application that updates bus location data and displays the data in a 3-D map for the user.

## Installation

1.  Download all files to a folder.
2.  You must add your own mapbox api key to the top of mapanimation.js file. This can easily be done for free at mapbox.com and creating a developer profile and generating a new key.
3.  Open index.html with your favorite browser.
4.  Note: This is for cloning project only.  If you want to view and use the application navigate to: https://jben-andersonbustracker.s3.amazonaws.com/Real-Time-Bus-Tracker/index.html

## Usage

App updates every 7 seconds to display bus location data. Users can pinch and zoom map to their liking.  To start navigate to: https://jben-andersonbustracker.s3.amazonaws.com/Real-Time-Bus-Tracker/index.html

If looking to load project: run http-server then navigate to: http://localhost:8080

## Roadmap

  **Updated 7/30**
  -fullscreen fluid window for better viewing and resizing.
  -zoom defaults fixed.
  -added popup returning the name of each bus enroute.
  -increased accuracy with lower fixed interval. 
  
  
Future versions: 
  -customized markers with improved popup information
  -ui label displaying more bus data and number of buses active.
  

## Notes

This project will only work with your own generated API key through completing a free mapbox account.  You may view a working demo at https://jben-andersonbustracker.s3.amazonaws.com/Real-Time-Bus-Tracker/index.html. 

## License

This project is licensed under the terms of the MIT license.
