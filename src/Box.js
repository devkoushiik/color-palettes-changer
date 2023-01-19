import React, { Component } from "react";
import "./Box.css";
import { choice } from "./helpers";

class Box extends Component {
  static defaultProps = {
    allColors: ["aqua", "teal", "navy", "yellow", "olive", "lime","green"],
  };

  constructor(props) {
    super(props);

    this.state = {
      color: choice(this.props.allColors),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  pickColor() {
    let newColor;

    do{
        newColor = choice(this.props.allColors);
    }while(newColor === this.state.color)

    this.setState({color : newColor})
  }

  handleClick() {
    this.pickColor();
  }
  render() {
    return (
      <div>
        <div
          className="Box"
          style={{ backgroundColor: this.state.color }}
          onClick={this.handleClick}
        ></div>
      </div>
    )
  }
}

export default Box;
