import React from "react";
import { Button } from "../library.js";

/**
 * Class Counter represents two buttons and numbers between them which shows amount of items
 *
 * logic
 * * @constuctor
 *
 * style
 * @param {string} style - sets the color palette for this element. You can choose one of availables
 * @param {string} classBox - adds new classes to the element, usually it's used for positioning, but sometimes custom is needed
 *
 */

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: this.props.initialValue,
            step: this.props.step,
        };

        this.styles = {
            orange: "counter--orange",
            blue: "counter--blue",
        };
    }

    render() {
        return (
            <div
                className={
                    (this.props.style
                        ? this.styles[this.props.style]
                        : this.styles["orange"]) +
                    " " +
                    (this.props.classBox ? this.props.classBox : "")
                }
            >
                <Button style={this.props.style}>
                    <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
                            fill="black"
                        />
                    </svg>
                </Button>
                <p>1</p>
                <Button style={this.props.style}>
                    <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                            fill="black"
                        />
                    </svg>
                </Button>
            </div>
        );
    }
}
