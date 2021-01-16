import React, { Component } from "react";

class Props extends Component {
  render() {
    console.log(this.props);
    let bangs = "!".repeat(this.props.bangs);
    const { to, from } = this.props; // Destructuring props, so in the markup we can use the variables name
    return (
      <div>
        <h2>
          {this.props.from} says: Hi big head. ({this.props.to}){bangs}
        </h2>
        <img src={this.props.img} alt="" />
      </div>
    );
  }
}

export default Props;

// Props is properties passed from the parent component, in this case App.js
// to the child, Props
// props is inserted like html attributes
// we can access props in the child component using the props obj.
// this.props

// Props are immutable!
// They are READ ONLY
