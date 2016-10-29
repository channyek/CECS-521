 function geocodeAddress(i) {
            geocoder.geocode(
                            {
                                'address' : locations[i]
                            },
                            function(results, status) {
                                if (status == google.maps.GeocoderStatus.OK) {
                                    createMarker(results[0].geometry.location, i);
				    myplace[i] = new google.maps.LatLng(results[0].geometry.location);
                                } else {
                                    alert('Geocode was not successful for the following reason: '
                                            + status);
                                }
                            } );
	}	

  
    function createMarker(latlng,i) {

          var marker = new google.maps.Marker({
                                        map : map,
                                        position : latlng,
 label: labels[labelIndex++ % labels.length],
});
	  marker.setMap(map);
	  bounds.extend(latlng);
          map.fitBounds(bounds); 
	  
	  //add info window
          google.maps.event.addListener(marker, 'mouseover', function() {  //event to trigger the infowindow
               infowindow.setContent(locations[i]);
               infowindow.open(map, marker);
           });

          //end of adding info window
           return marker;
        }

function readfile(){
var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "https://raw.githubusercontent.com/channyek/CECS-521/master/sample.txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);

}