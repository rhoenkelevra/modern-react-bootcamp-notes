import React, { Component } from "react";

const getNum = () => {
  return Math.floor(Math.random() * 10) + 1;
};

class NumPicker extends Component {
  render() {
    const num = getNum();
    return (
      <div>
        <h2>Your number is ... {num}</h2>
        <p>
          {num === 7
            ? "You got the lucky number"
            : "You didn't get the lucky number"}
        </p>
      </div>
    );
  }
}

export default NumPicker;
