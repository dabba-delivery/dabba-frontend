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

export const Button = (props) => {
    const {
        onClick = () => console.log("it works"),
        style = "orange",
        classNames = "",
        children,
    } = props;

    const styles = {
        orange: "button--orange",
        blue: "button--blue",
        greyToggle: "button--grey",
    };

    const handleClick = (event) => {
        event.preventDefault();
        onClick();
    };

    return (
        <button
            className={styles[style] + " " + classNames}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
