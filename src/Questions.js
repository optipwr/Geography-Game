import React, { Component } from 'react';

class Questions extends Component {
  render(){
    return (
                <div className="container">
                  <div className="row col-sm-12">
                    <nav className="navbar navbar-default">
                      <div className="container">
                          <ul className="nav navbar-nav">
                              <li>
                                  <p className="navbar-btn">
                                      <a href="#" id="questionOne" className="btn btn-danger">Question 1</a>
                                      <a href="#" id="questionTwo" className="btn btn-danger">Question 2</a>
                                      <a href="#" id="questionThree" className="btn btn-danger">Question 3</a>
                                      <a href="#" id="questionFour" className="btn btn-danger">Question 4</a>
                                      <a href="#" id="questionFive" className="btn btn-danger">Question 5</a>
                                      <a href="#" id="questionSix" className="btn btn-danger">Question 6</a>
                                      <a href="#" id="questionSeven" className="btn btn-danger">Question 7</a>
                                      <a href="#" id="questionEight" className="btn btn-danger">Question 8</a>
                                      <a href="#" id="questionNine" className="btn btn-danger">Question 9</a>
                                      <a href="#" id="questionTen" className="btn btn-danger">Question 10</a>

                                  </p>
                              </li>
                          </ul>
                      </div>
                    </nav>
                  </div>
                </div>
    )
  }

}
        export default Questions
