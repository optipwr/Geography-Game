#A Geography Game - That will give you the skills

##About:
---
This is a geography game where you are asked a question and then you have to locate the answer (in the form of a marker) on the map. The catch is that the marker does not appear until you zoom into a specific level of the map. Once you locate the marker you can click on it. An info window will appear letting you know the name of the location you have found. You can then click the button within the info window to progress through the game.

##Technology Used:
---
- HTML5
- CSS3
- JavaScript
- React.js
- Node.js
- NPM packages for React-Google-Maps, React-Router, React-Bootstrap
- Google Maps API

##Challenges:
---
1. Using the Google Maps API with the NPM Package "React-Google-Maps" to successfully get a map rendered onto the screen.
2. Manipulating the Google Maps API to accomplish things like:
	1. Changing visibility of markers based on zoom level.
	2. Targetting markers with JavaScript that only appear based on current render().
    3. Resetting the map zoom after an event.
    4. Using info windows to perform actions on the map.
3. Using React-Router to make our NavBar a have single page links.
4. Styling the map while using React and React-Google-Maps.

##Authors
---
* [Drew Parker](https://github.com/drewcoparker)
* [Michael Irby](https://github.com/optipwr)
* [Kyle Plaugher](https://github.com/Kaplaugher)
* [Sean Bhupathi](https://github.com/seanbhup)

##Future Installments:
---
- Points based system
- Expand to other countries ie. Asia

##Code Examples
---
Snippet of some map zoom logic.

```javascript
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
```

Setting State.

```javascript
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

}
```

An example of an Object in our Data Array.

```javascript
{
    greeting: "Welcome to the Map Game. Your first clue is:",
    question: "This cape in Washington is the westernmost point in the lower 48 states.",
    answer: "Cape Alava, WA",
    mapOptions: {
        center: {lat: 39.8282, lng: -98.5795},
        zoom: 4,
        mapTypeId: 'terrain',
        styles: mapStyle
    },
    markerOptions: {
        position: {lat: 48.1647572, lng: -124.7331501},
        title: "Cape Alava, WA",
    },
    revealMarkerZoom: 9,
    visible: false,
},
```

##Screenshots
---
Homescreen when you first start out
![alt text](https://github.com/optipwr/Geography-Game/blob/master/screenshots/Homescreen.png 'Homescreen.png')

Info window when marker is found
![alt text](https://github.com/optipwr/Geography-Game/blob/master/screenshots/InfoWindow.png 'InfoWindow.png')