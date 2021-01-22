import React, { Component } from "react";

class Random extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 1 };
        // calling the method on the constructor is not the best practice
        // but it was done to show how react update state
        this.makeTimer();
    }
    makeTimer() {
        setInterval(() => {
            let rand = Math.floor(Math.random() * this.props.maxNum);
            this.setState({ num: rand });
        }, 1000);
    }
    render() {
        return (
            <>
                <h1>{this.state.num}</h1>
            </>
        );
    }
}

export default Random;
