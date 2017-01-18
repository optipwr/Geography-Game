// Dependencies
import React, { Component } from 'react';
import './css/App.css';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import _ from "lodash";

// Custom Modules
import MapController from './MapController.js';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                markers: [{
                    position: {
                    lat: 25.0112183,
                    lng: 121.52067570000001,
                    },
                    key: `Taiwan`,
                    defaultAnimation: 2,
                }]
            }
        this.handleMapLoad = this.handleMapLoad.bind(this);
        this.handleMapClick = this.handleMapClick.bind(this);
        this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);                

    }

      handleMapLoad(map) {
        this._mapComponent = map;
        if (map) {
          console.log(map.getZoom());
        }
      }

      handleMapClick(event) {
        const nextMarkers = [
          ...this.state.markers,
          {
            position: event.latLng,
            defaultAnimation: 2,
            key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
          },
        ];
        this.setState({
          markers: nextMarkers,
        });

        if (nextMarkers.length === 3) {
          this.props.toast(
            `Right click on the marker to remove it`,
            `Also check the code!`
          );
        }
      }

      handleMarkerRightClick(targetMarker) {
        /*
         * All you modify is data, and the view is driven by data.
         * This is so called data-driven-development. (And yes, it's now in
         * web front end and even with google maps API.)
         */
        const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
        this.setState({
          markers: nextMarkers,
        });
      }

    render() {
        return (
            <div className="app-wrapper">
                <nav className="navbar navbar-default" id="navbar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <h1>Geography Game</h1>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <MapController
                          containerElement={
                            <div style={{ height: `100vh` }} />
                          }
                          mapElement={
                            <div style={{ height: `100vh` }} />
                          }
                          onMapLoad={this.handleMapLoad}
                          onMapClick={this.handleMapClick}
                          markers={this.state.markers}
                          onMarkerRightClick={this.handleMarkerRightClick}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
