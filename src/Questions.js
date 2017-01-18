import React, { Component } from 'react';
import { Link } from 'react-router'

class Questions extends Component {
    render(){
        return (
            <div className="asdf">
                {this.props.data.question}
            </div>
        )
    }

}
export default Questions
