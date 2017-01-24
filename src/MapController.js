import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import {Button} from 'react-bootstrap';


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
            {props.infoVisibility && (
                <InfoWindow onCloseClick={props.onInfoCloseClick}>
                    <div style={{textAlign: 'center'}}>
                        <p>Nice job! The answer is {props.infoText}.</p>
                        <Button bsStyle="info" bsSize="small" onClick={props.onInfoBtnClick}>Next Clue</Button>
                    </div>
                </InfoWindow>
            )}
        </Marker>
    </GoogleMap>
));

export default MapController;
