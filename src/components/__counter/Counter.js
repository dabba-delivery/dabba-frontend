import React from "react";
import { Button } from "../index.js";
import "./--small.css";
import "./--orange.css";

/**
 * Class Counter represents two buttons and numbers between them which shows amount of items
 *
 * logic
 * @constuctor
 * @param {number} initialValue - start value for this counter
 * @param {number} step - step for inrementor and decrementor
 * @param {number} limit - limit for counter // sometimes you need a maximum :)
 * @param {Function} func - handle function which invoke and use actual value as argument
 *
 * style
 * @param {string} style - sets the color palette for this element. You can choose one of availables
 * @param {string} classNamesBox - adds new classes to the element, usually it's used for positioning, but sometimes custom is needed
 * @param {string} classNamesText - apply new classes to a text between buttons
 * @param {string} classNames - adds this classes to the button elements
 * @param {string} size - three options available: small, medium and big
 *
 */

export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: this.props.initialValue || 0,
            step: this.props.step || 1,
            limit: this.props.limit || 10,
        };

        this.styles = {
            orange: "counter--orange",
            blue: "counter--blue",
        };

        this.sizes = {
            small: "counter--small",
            medium: "counter--medium",
            big: "counter--big",
        };
    }

    increase = () => {
        if (this.state.currentValue < this.state.limit) {
            this.setState({
                currentValue: this.state.currentValue + this.state.step,
            });
        }
    };

    decrease = () => {
        if (this.state.currentValue > 1) {
            this.setState({
                currentValue: this.state.currentValue - this.state.step,
            });
        }

        if (this.props.func) {
            this.props.func(this.state.currentValue);
        }
    };

    render() {
        const {
            style = "orange",
            classNames = "",
            classNamesBox = "",
            classNamesText = "",
            size = "small",
        } = this.props;

        return (
            <div className={this.styles[style] + " " + classNamesBox}>
                <Button
                    classNames={classNames + " " + this.sizes[size]}
                    style={style}
                    onClick={this.decrease}
                >
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
                <p className={"counter__text " + classNamesText}>
                    {this.state.currentValue}
                </p>
                <Button
                    classNames={
                        classNames +
                        " " +
                        (this.sizes[size] ? this.sizes[size] : "counter--small")
                    }
                    style={style}
                    onClick={this.increase}
                >
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
