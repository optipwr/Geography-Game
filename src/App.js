// Dependencies
import React, { Component } from 'react';
import './css/index.css';
import _ from "lodash";
import Questions from './Questions';
import Data from './Data';
import Navbar1 from './Navbar'


// Custom Modules
import MapController from './MapController.js';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

var num = 0;
class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                data: {},
                visibility: false,
                showInfo: false
            }
        this.handleMapLoad = this.handleMapLoad.bind(this);
        this.handleMarkerClick = this.handleMarkerClick.bind(this);
        this.handleZoomChange = this.handleZoomChange.bind(this);
        this.handldeInfoBtnClick = this.handldeInfoBtnClick.bind(this);
        this.handleInfoCloseClick = this.handleInfoCloseClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            data: Data[0]
        });
    }

    handleMapLoad(map) {
        this._mapComponent = map;

    }

    handleInfoCloseClick() {
        this.setState({
            showInfo: false
        })
    }

    handldeInfoBtnClick(event) {
          if (num < (Data.length - 1)) {
            num++;
            this.setState({
                data: Data[num],
                visibility: false,
                showInfo: false
            })
          } else {
             alert("You win")
        }
    }

    handleMarkerClick(event) {
        if (this.state.showInfo === false) {
            this.setState({
                showInfo: true
            })
        } else {
            this.setState({
                showInfo: false
            })
        }
    }

      handleZoomChange() {
          const zoomLevel = this._mapComponent.getZoom();
          if (zoomLevel >= this.state.data.revealMarkerZoom) {
              this.setState({
                  visibility: true,
              })
          } else {
              this.setState({
                  visibility: false
              })
          }
      }

    render() {
        return (
            <div className="app-wrapper">
                <Navbar1 />
                <div className="container">
                    <div className="row col-sm-12">
                        <MapController
                            containerElement={
                              <div style={{
                                      height: `50vh`,
                                      margin: `20px`,
                                      boxShadow: `0 0 4px rgba(0,0,0,.14), 0 4px 8px rgba(0,0,0,.28)`,
                                  }} />
                            }
                            mapElement={
                              <div style={{
                                      height: `50vh`,
                                  }} />
                            }
                          onMapLoad={this.handleMapLoad}
                          onMarkerClick={this.handleMarkerClick}
                          onMapZoom={this.handleZoomChange}
                          mapProps={this.state.data.mapOptions}
                          markerProps={this.state.data.markerOptions}
                          markerVisibility={this.state.visibility}
                          infowVisibility={this.state.showInfo}
                          infoText={this.state.data.answer}
                          onInfoBtnClick={this.handldeInfoBtnClick}
                          onInfoCloseClick={this.handleInfoCloseClick}
                        />
                    </div>

                </div>
                <Questions greeting={this.state.data.greeting} question={this.state.data.question} />
                {this.props.children}

            </div>
        );
    }
}


export default App;
