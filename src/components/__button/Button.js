import React from "react";
import "./--orange.css";
import "./--blue.css";

/**
 * This component represents a Button
 * 
 * @constuctor
 * @param {string} elementStyle - sets the color palette for this element. You can choose one of availables
 * @param {string} addClasses - adds new classes to the element, usually it's used for positioning, but sometimes custom is needed
 * @param {Function} handleFunction - onClick handler for a copmonent
 * {this.props.children} - name of this button
 */

export class Button extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            orange: "button--orange",
            blue: "button--blue",
            greyToggle: "button--grey",
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.handleFunction();
    }

    render() {
        return (
            <button
                className={
                    this.styles[
                        this.props.elementStyle
                            ? this.props.elementStyle
                            : "orange"
                    ] +
                    " " +
                    this.props.addClasses
                }
                onClick={this.handleClick}
            >
                {this.props.children}
            </button>
        );
    }
}
