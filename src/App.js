// Dependencies
import React, { Component } from 'react';
import './css/App.css';
import _ from "lodash";
import Questions from './Questions';
import Data from './Data';


// Custom Modules
import MapController from './MapController.js';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
var num = 0;
class App extends Component {
    constructor(props) {
        super(props);
            this.state = {
                center: '',
                position: '',
                questionZoom: '',
                answerZoom: '',
                question: '',
                visible: ''
            }
        this.handleMapLoad = this.handleMapLoad.bind(this);
        this.handleMarkerClick = this.handleMarkerClick.bind(this);
        this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
        this.handleZoomChange = this.handleZoomChange.bind(this);

    }

    componentDidMount() {
        // var r = Math.floor(Math.random() * Data.length);
        this.setState({
            center: Data[0].center,
            position: Data[0].position,
            visible: Data[0].visible,
            question: Data[0].question,
            questionZoom: Data[0].questionZoom,
            answerZoom: Data[0].answerZoom
        })
    }

    // If you need to update the state in response to prop changes you may compare
    // this.props and nextProps and perform state transitions using this.setState()
    // in this method.
    componentWillReceiveProps() {

    }

    handleMapLoad(map) {
        this._mapComponent = map;
            if (map) {
          // console.log(map.getZoom());
        }
    }

    handleMarkerClick(event) {
      console.log(event);
      if(num >= 0){
        num+=6;
      }
      else if(num > 9){
        alert("You win...great..")
      }
      this.setState({
        center: Data[num].center,
        position: Data[num].position,
        visible: Data[num].visible,
        question: Data[num].question,
        questionZoom: Data[num].questionZoom,
        answerZoom: Data[num].answerZoom
      })
    }

      handleZoomChange() {
          const zoomLevel = this._mapComponent.getZoom();
          if (zoomLevel >= this.state.answerZoom) {
              this.setState({
                  visible: true
              })
          } else {
              this.setState({
                  visible: false
              })
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
                          onMarkerClick={this.handleMarkerClick}
                          onMapZoom={this.handleZoomChange}
                          center={this.state.center}
                          position={this.state.position}
                          visible={this.state.visible}
                          questionZoom={this.state.questionZoom}
                        />
                    </div>

                </div>
                <Questions question={this.state.question} />
                {this.props.children}

            </div>
        );
    }
}


export default App;
