import React, { Component } from 'react';

export default class ColorSelector extends Component {

  //test that lab works by clicking color then clicking cell on chrome boi

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} onClick={() => {this.props.changeColor(str)}} className="color-swatch" style={{backgroundColor: str}}/>
    })
    //issue b/c was calling changecolor every time so getting constantly updating state error
    //when passing any function with an argument to on click, needs to be inside anonymous arrow function
    //otherwise () will cause constant invocation
  )
  //makeColorSwatches is what creates the divs for each color,
  //want event handler in there
  //this.props.changeColor(str) pass in str of color to the callback function


  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
