function loadJS(src) {
   var ref = window.document.getElementsByTagName("script")[0];
   var script = window.document.createElement("script");
   script.src = src;
   script.async = true;
   ref.parentNode.insertBefore(script, ref);
}

[8:58]  
class Map extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           mapOptions: {
               center: {lat: 39.8282, lng: -98.5795},
               zoom: 4,
               styles: mapStyle
           }
       }
       this.initMap = this.initMap.bind(this);
   }

   componentDidMount() {
       window.initMap = this.initMap;
       loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAaEp9QYcNt6cq0NUJOk0UI8hhrfWTUfDY&libraries=places&callback=initMap');
   }

   initMap() {
       var options = this.state.mapOptions
       var directionsService = new google.maps.DirectionsService();
       var geocoder = new google.maps.Geocoder();
       var directionsDisplay = new google.maps.DirectionsRenderer();

       this.map = new google.maps.Map(this.refs.map, options);
   }



   render() {
       return(
           <div className='map-container'>
               <div id="map" ref="map">Map should be here</div>
           </div>

       )
   }
}