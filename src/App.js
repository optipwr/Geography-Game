// Dependencies
import React, { Component } from 'react';
import './css/App.css';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import _ from "lodash";
import Questions from './Questions';
import Data from './Data';

// Custom Modules
import MapController from './MapController.js';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                questionsArray: [
                    {
                        questionText: "What is the western most city..",
                        markers: [{
                            position: {
                                lat: 48.1647572,
                                lng: -124.7331501
                            },
                            key: `Cape Alava`,
                            defaultAnimation: 2,
                        }]
                    },
                    {
                        questionText: "What is the eastern most city..",
                        markers: [{
                            position: {
                                lat: 50.1647572,
                                lng: -105.7331501
                            },
                            key: `I dont know`,
                            defaultAnimation: 2,
                        }]
                    }
                ]  
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
        var x = document.getElementById('questionOne');
        x.style.color = 'blue';
        };

      //   if (nextMarkers.length === 3) {
      //     this.props.toast(
      //       `Right click on the marker to remove it`,
      //       `Also check the code!`
      //     );
      //   }
      // }

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
        console.log(this.state.markers)
      }

    render() {
        return (
            <div className="app-wrapper">
                <nav className="navbar navbar-default" id="navbar">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <h1 className="title">Geography Game</h1>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="row col-sm-12">
                        <MapController
                          containerElement={
                            <div style={{ height: `50vh` }} />
                          }
                          mapElement={
                            <div style={{ height: `50vh` }} />
                          }
                          onMapLoad={this.handleMapLoad}
                          onMapClick={this.handleMapClick}
                          questions={this.state.questionsArray}
                          onMarkerRightClick={this.handleMarkerRightClick}
                        />
                    </div>

                </div>
                {this.props.children}

            </div>
        );
    }
}

export default App;

