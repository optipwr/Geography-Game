import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


// RIGHT NOW THIS IS NOT A CLASS!! IT'S A (PURE) RENDER FUNCTION
const MapController = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={props.data.questionZoom}
    center={props.data.center}
    onClick={props.onMapClick}
  >
    <Marker position={props.data.position} visible={props.data.visible} />
  </GoogleMap>
));

export default MapController;
