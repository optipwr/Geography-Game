import React from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import {Button} from 'react-bootstrap';


// The Google Maps Higher order component. MapController is a function that
// returns the GoogleMap component. The GoogleMap component is responsible
// for providing a Map with unique properties. A callback is used to load the
// map.

// The Map component. When rendered, the map will contain a specific Marker
// object with an InfoWindow that corresponds with a particular location
// in the Data.js module.

// The control flow is as follows:
// 1. When this component is called to render, it is passed several prop objects
//    and callback methods.
// 2. The options props align with the MapOptions and MarkerOptions objects for
//    each location in Data.js.
// 3. The marker's visibility will toggle based on a zoom level property within
//    the Data module. This was achieved by using the Map's on zoom changed
//    event listener and setting just the state of the marker's visibility based
//    on a condtional within.
// 4. The marker also has a click listener so when it becomes visible and is
//    clicked, an info window will pop up with congratulatory text, the location,
//    and a button that prompts the user to advance to the next clue.
// 5. When the info window button is clicked, state will be set to the next
//    question in the Data module and the map and marker will render with new
//    location props.
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
