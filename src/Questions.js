import React, { Component } from 'react';
// import { Link } from 'react-router'

class Questions extends Component {
    render(){
        return (
            <div className="question-text">
                {this.props.question}
            </div>
        )
    }

}
export default Questions
