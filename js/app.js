let map;
initMap = () => {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 29.698598, lng: -95.386554 }, 
        zoom: 13
    });
}

// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: 29.698475, lng: -95.386518},
//       zoom: 15
//     });
//   }