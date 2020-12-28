      function initMap() {
        var uluru = {lat: 20.363, lng: 40.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru,
          scrollwheel:false,
          styles:
[
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
]

        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon : "images/pin.png"  
        });
      }


