import React, { Component } from 'react';
import './css/index.css';
// import { Link } from 'react-router'

class Questions extends Component {
    render(){
        return (
        	<div>
	            <div className="greeting-text">
	                {this.props.greeting}
	            </div>
	            <div className="question-text">
	            	{this.props.question}
	            </div>
            </div>
        )
    }

}
export default Questions
