import React from "react";
import "./--orange.css";
import "./--blue.css";

/**
 * This component represents a Button
 *
 * logic
 * @constuctor
 * @param {Function} func - onClick handler for a copmonent 
 * 
 * style
 * @param {string} style - sets the color palette for this element. You can choose one of availables
 * @param {string} class - adds new classes to the element, usually it's used for positioning, but sometimes custom is needed
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
        this.props.func();
    }

    render() {
        return (
            <button
                className={
                    this.styles[
                        this.props.style ? this.props.style : "orange"
                    ] +
                    " " +
                    this.props.class
                }
                onClick={this.handleClick}
            >
                {this.props.children}
            </button>
        );
    }
}
