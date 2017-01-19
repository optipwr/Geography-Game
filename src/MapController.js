import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


// The Google Maps Higher order component. MapController is a function that
// returns the GoogleMap component. The GoogleMap component is responsible
// for providing a Map with unique properties. A callback is used to load the
// map.
const MapController = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        defaultZoom={props.data.questionZoom}
        center={props.data.center}
        onClick={props.onMapClick}>
        <Marker
            position={props.data.position}
            visible={props.data.visible}>
        </Marker>
    </GoogleMap>
));

export default MapController;
