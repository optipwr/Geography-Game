import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';


// The Google Maps Higher order component. MapController is a function that
// returns the GoogleMap component. The GoogleMap component is responsible
// for providing a Map with unique properties. A callback is used to load the
// map.
const MapController = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        center={props.center}
        options={props.options}
        onZoomChanged={props.onMapZoom}>
        <Marker
            position={props.position}
            visible={props.visible}
            onClick={props.onMarkerClick}>
        </Marker>
    </GoogleMap>
));

export default MapController;
