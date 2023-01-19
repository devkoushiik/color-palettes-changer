import React, { Component } from "react";
import Box from "./Box";
import "./BoxContainer.css";

export default class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <Box />
    ));

    return (
      <div>
        <h4>Click over boxes to change color 😒</h4>
        <div className="BoxContainer">{boxes}</div>
      </div>
    );
  }
}
