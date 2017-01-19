import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


// The Google Maps Higher order component. MapController is a function that
// returns the GoogleMap component. The GoogleMap component is responsible
// for providing a Map with unique properties. A callback is used to load the
// map.
const MapController = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={props.questionZoom}
        center={props.center}
        onClick={props.onMapClick}
        onZoomChanged={props.onMapZoom}>
        <Marker
            position={props.position}
            visible={props.visible}>
        </Marker>
    </GoogleMap>
));

export default MapController;
