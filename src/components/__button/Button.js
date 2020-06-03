import React from "react";
import "./--orange.css";
import "./--blue.css";

/**
 * This component represents a Button
 *
 * logic
 * @constuctor
 * @param {Function} onClick - onClick handler for a copmonent
 *
 * style
 * @param {string} style - sets the color palette for this element. You can choose one of availables
 * @param {string} classNames - adds new classes to the element, usually it's used for positioning, but sometimes custom is needed
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
    }

    handleClick = (event) => {
        const { onClick = () => console.log("it works") } = this.props;

        event.preventDefault();
        onClick();
    };

    render() {
        const { style = "orange", classNames = " ", children } = this.props;

        return (
            <button
                className={this.styles[style] + " " + classNames}
                onClick={this.handleClick}
            >
                {children}
            </button>
        );
    }
}
