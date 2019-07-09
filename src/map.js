//
// var myLatLng = {lat: 45.5155, lng: -122.6793};
// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: 45.5155, lng: -122.6793},
//     zoom: 10
//   });
//
//   var maker = new google.maps.Marker({
//     position: myLatLng,
//     map: map,
//     title: 'Poison Oak'
//   });
// }
// // src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCbFgi-9P2b1_bLz_pm3FKLDJrEN6rRwac&callback=initMap"
// async defer


// export class MapAPI {
//   findPoisonOak() {
//     return new Promise(function(resolve, reject) {
//       let myLatLng = {lat: 45.5155, lng: -122.6793};
//       let map;
//       function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 45.5155, lng: -122.6793},
//           zoom: 10
//         });
//         let maker = new google.maps.Marker({
//           position: myLatLng,
//           map: map,
//           title: 'Poison Oak'
//       let request = new XMLHttpRequest();
//       let url = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCbFgi-9P2b1_bLz_pm3FKLDJrEN6rRwac&callback=initMap`;
//       request.onload = function () {
//         if (this.status === 200) {
//           resolve(request.responseText);
//         } else {
//           reject(Error(request.statusText));
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//   }
// }
