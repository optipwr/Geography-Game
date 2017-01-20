#A Geography Game - That will give you the skills

##About:
---
This is a geography game where you are asked a question and then you have to locate the answer (in the form of a marker) on the map. The catch is that the marker does not appear until you change the map zoom over the area where the answer is at. Once you locate the marker you can click on it and it will advance you to the next marker.

##Technology Used:
---
- HTML5
- CSS3
- JavaScript
- React.js
- Nodejs
- Google Maps API

##Challenges and Solutions:
---
1. Using the Google Maps API with the NPM Package "React-Google-Maps" to successfully get a map rendered onto the screen.
2. Manipulating the Google Maps API to accomplish things like:
	1. Changing visibility of markers based on zoom level.
	2. Targetting markers with JavaScript that only appear based on current render()
3. Using React-Router to make our NavBar a have single page links.

##Authors
---
* [Drew Parker](https://github.com/drewcoparker)
* [Michael Irby](https://github.com/optipwr)
* [Kyle Plaugher](https://github.com/Kaplaugher)
* [Sean Bhupathi](https://github.com/seanbhup)

##Future Installments:
- Logo
- Points
- Expand to other countries ie. Asia

##Code Examples
---
Our primary Component that handles the map being loaded as well as its position and marker settings.

```javascript
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
```