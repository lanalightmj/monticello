function initMap() {
  var uluru = {lat: 40.6971494, lng: -74.2598661};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  var marker = new google.maps.Marker({position: uluru, map: map});
}