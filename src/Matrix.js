import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()//would pass in props if in parent component were passing in props
    this.state = {
      selectedColor: '#fff'
    }
  }

  changeColor = (color) => {
    this.setState({selectedColor: color})
  }

//   In React, props are used to pass information down the component tree, from parents to children. In order to propagate information in the opposite direction, we can use callback functions that are passed from parent components to children.
//
// This allows the callback to be owned by a different component than the one invoking it. Once invoked, the callback can effect change in the component that owns it, instead of the component that called it.
//use color selector to select color
//pass in function as prop

getColor = () => { //don't want you passing in color as prop, want callback function instead
  return this.state.selectedColor
}

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getColor={this.getColor} />) //no (), dont want to invoke yet
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector changeColor={this.changeColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
