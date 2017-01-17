// Testing trying to create a map call outside of our main component MapController

function initMap(){
	map = new google.maps.Map(
		document.getElementById('map'),
		{
			center:{lat: 39.8282, lng: -98.5795},
			zoom: 4
		}
	);
}

console.log(initMap());
