function init(){
	var el = document.getElementById('canvas');

  // feature 1: added controls for zoom, map, scale, street, fullscreen, rotate
  var myMap = new google.maps.Map(el, {
    center: { lat: 41.8356, lng: -87.6259 },
    zoom: 14,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true
  });
  
  // feature 2: markers for 3 locations
  const locations = [
    { lat: 41.835117, lng: -87.627130, title: "IIT Perlstein Hall", about: "roqueyroqiue" },
    { lat: 41.838015, lng: -87.627960, title: "MTCC", about: "adlhfkjahdslfjahsdlf" },
    { lat: 41.833200, lng: -87.626800, title: "S.R. Crown Hall", about: "cxznmbv,znxbc,v" }
  ];

  locations.forEach(function(location) {
    var marker = new google.maps.Marker({
      position: { lat: location.lat, lng: location.lng },
      map: myMap,
      title: location.title,
      animation: google.maps.Animation.DROP
    });
  
    // feature 3: clicking the marker display a temporary description
    var infowindow = new google.maps.InfoWindow({
      content: `<h2>${location.title}</h2><p>${location.about}</p>`
    });
  
    marker.addListener('click', function() {
      infowindow.open(myMap, marker);
    });
  });
  
}

window.addEventListener('load', init);
