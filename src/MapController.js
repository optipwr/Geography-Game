import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';


// The Google Maps Higher order component. MapController is a function that
// returns the GoogleMap component. The GoogleMap component is responsible
// for providing a Map with unique properties. A callback is used to load the
// map.
const MapController = withGoogleMap(props => (
    <GoogleMap
        ref={props.onMapLoad}
        options={props.mapProps}
        onZoomChanged={props.onMapZoom}>
        <Marker
            visible={props.markerVisibility}
            options={props.markerProps}
            onClick={props.onMarkerClick}>
            {props.infowVisibility && (
                <InfoWindow>
                    <div>
                        <p>Nice job! The answer is {props.infoText}.</p>
                        <button onClick={props.onInfoBtnClick}>Next</button>
                    </div>
                </InfoWindow>
            )}
        </Marker>
    </GoogleMap>
));

export default MapController;
