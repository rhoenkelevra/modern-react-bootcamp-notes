import React, { Component } from "react";

class SlotMachine extends Component {
    render() {
        const { s1, s2, s3 } = this.props;
        const isWinner = s1 === s2 && s2 === s3;

        return (
            <div>
                <p>
                    {s1} {s2} {s3}
                </p>
                {/* eslint-disable-next-line */}
                <p>{isWinner ? "You Win!!" : "Try again!"}</p> //Conditional
                logic inside JSX
            </div>
        );
    }
}

export default SlotMachine;
