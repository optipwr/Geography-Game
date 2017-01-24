// Dependencies
import React, { Component } from 'react';
import './css/index.css';
import _ from "lodash";
import Questions from './Questions';
import Data from './Data';
import Navbar1 from './Navbar'
import { Modal, Button } from 'react-bootstrap'


// Custom Modules
import MapController from './MapController.js';

// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// Gobal var used to iterate through the Data.js array of objects. These objects
// represent the propeties for each clue.
var num = 0;
class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                data: {},
                visibility: false, // Marker visibility initialzed as false
                showInfo: false, // Info window initialzed as false
                showModal: false

            }
        this.handleMapLoad = this.handleMapLoad.bind(this);
        this.handleMarkerClick = this.handleMarkerClick.bind(this);
        this.handleZoomChange = this.handleZoomChange.bind(this);
        this.handleInfoBtnClick = this.handleInfoBtnClick.bind(this);
        this.handleInfoCloseClick = this.handleInfoCloseClick.bind(this);
        this.handleModalButtonClick = this.handleModalButtonClick.bind(this);
    }

    // State is set after component is mounted. data represents the main state
    // object, an object with a clue, answer, and map and marker properties. After
    // state is initialized in the constructor, we set it here to the first
    // object in the Data.js module. We could have done this in the constructor,
    // but setting state here would allow us to set state to a random object in
    // Data.js if we choose to.
    componentDidMount() {
        this.setState({
            data: Data[0]
        });
    }

    // Establishes the map. This call gives us a Google Map with properties and
    // that can be called by passing in options or methods.
    handleMapLoad(map) {
        this._mapComponent = map;
    }

    // Closes the info window. This method sets the state of the info window
    // visibility so we can refire it by clicking on the the marker again if the
    // the user had closed it without advancing the game.
    handleInfoCloseClick() {
        this.setState({
            showInfo: false
        })
    }

    // Changes the clue and map location on button click. This is the main hook
    // for us to advance the game to the next clue object in Data.js.
    handleInfoBtnClick(event) {
          if (num < (Data.length - 1)) {
            num++;
            this.setState({
                data: Data[num],
                visibility: false,
                showInfo: false
            })
          } else {
              this.setState({
                  showModal: true
              })
        }
    }

    // Enables the info window on marker click. This event set the state of the
    // info window's visibility boolean.
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

    handleModalButtonClick(event){
      this.setState({
        data: Data[0],
        visibility: false,
        showInfo: false,
        showModal: false
      })

    }

    // Changes the visibility of the marker at desired zoom level. A condtional
    // is set based on the user's zoom level. If the zoom level
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

    // Renders the app
    render() {
        return (
            <div className="app-wrapper">
                <Navbar1 />

                    <Modal show={this.state.showModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Congratulations! You've won the game!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div><img alt="" src="http://i.imgur.com/s9bPVaK.gif"/></div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleModalButtonClick}>Reset Game</Button>
                        </Modal.Footer>
                    </Modal>

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
                          infoVisibility={this.state.showInfo}
                          infoText={this.state.data.answer}
                          onInfoBtnClick={this.handleInfoBtnClick}
                          onInfoCloseClick={this.handleInfoCloseClick}
                        />
                    </div>
                </div>
                <Questions greeting={this.state.data.greeting} question={this.state.data.question} />
            </div>
        );
    }
}

export default App;
