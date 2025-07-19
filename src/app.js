var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var imageUrl = 'assets/chart-placeholder.png';
var errorOverlayUrl = 'https://cdn-icons-png.flaticon.com/512/114/114886.png';
var altText = 'Image of Newark Liberty International Airport, Main Terminal';
var latLngBounds = L.latLngBounds([[40.799311, -74.118464], [40.68202047785919, -74.33]]);

var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
    opacity: 0.8,
    errorOverlayUrl: errorOverlayUrl,
    alt: altText,
    interactive: true
});

var chartVisible = false;

document.getElementById('toggle-chart').addEventListener('click', function() {
  if (chartVisible) {
    map.removeLayer(imageOverlay);
    chartVisible = false;
  } else {
    imageOverlay.addTo(map);
    map.fitBounds(latLngBounds);
    chartVisible = true;
  }
});

document.getElementById('fetch-flight-plan').addEventListener('click', function() {
  var username = document.getElementById('simbrief-username').value;
  if (!username) {
    alert('Please enter a Simbrief username.');
    return;
  }

  var url = `https://www.simbrief.com/api/xml.fetcher.php?username=${username}&json=1`;

  // Note: This is a simplified example. In a real application, you would need to handle potential CORS issues
  // by using a server-side proxy to fetch the data from the Simbrief API.
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data); // For now, just log the data to the console
      // In the next step, we'll parse this data and display it on the map.
    })
    .catch(error => {
      console.error('Error fetching flight plan:', error);
      alert('Error fetching flight plan. See console for details.');
    });
});
