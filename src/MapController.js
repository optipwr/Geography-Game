import React, { Component } from 'react';

class MapController extends Component{
	constructor(props) {
		super(props);
		this.state = {
			mapOptions: {
				center: {lat: 39.8282, lng: -98.5795},
				zoom: 4
			}
		}
	}
	render(){
		return(
			<div>Sanity check</div>
		)
	}
}

export default MapController;