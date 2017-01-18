import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

// RIGHT NOW THIS IS NOT A CLASS!! IT'S A (PURE) RENDER FUNCTION
const MapController = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={4}
    defaultCenter={{ lat: 39.8282, lng: -98.5795 }}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

export default MapController;

