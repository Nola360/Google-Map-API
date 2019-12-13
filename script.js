

function initMap() {
  //Map feature options
  var options = {
    zoom: 8,
    center: { lat: 41.825226, lng: -71.418884 }
  }

  //Loads New Map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // Listen for click on map
  google.maps.event.addListener(map, 'click', function (event) {
    //Add Markers
    addMarker({ coordinates: event.latLng });
  });



  //Array of markers
  var markers = [{
    coordinates: { lat: 41.825226, lng: -71.418884 },
    iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png', content: '<h1>Providence, RI</h1>'
  },
  { coordinates: { lat: 42.361145, lng: -71.057083 }, content: '<h1>Boston, MA</h1>' },
  { coordinates: { lat: 41.519813, lng: -72.661742 }, content: '<h1>Hartford,CT</h1>' }];

  //Loop through Static Markers 
  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  //Add marker function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coordinates, map: map,
      // Custom marker Icon
      // icon: props.iconImage

    });


    //Check for custom icon
    if (props.iconImage) {
      //Set icon image
      marker.setIcon(props.iconImage);
    }
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({ content: props.content });

      marker.addListener('click', function () {
        infoWindow.open(map, marker);
      });
    }
  }
}


