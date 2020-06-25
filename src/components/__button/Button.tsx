// React
import React from "react";

// Main commmponents

// Components from library

// Types and Interfaces
import { IButton } from "../types";

// Context

// CSS
import "./--orange.css";
import "./--blue.css";

/**
 * This component represents a Button
 *
 * logic
 * @constuctor
 * @param {props} props
 * @param {Function} onClick - onClick handler for a copmonent
 * style
 * @param {string} style - sets the color palette for this element. You can choose one of availables
 * @param {string} classNames - adds new classes to the element, usually it's used for positioning, but sometimes custom is needed
 * {this.props.children} - name of this button
 * @return {HTMLElement}
 */
export const Button: React.FC<IButton> = (props) => {
    const { onClick, style = "orange", classNames = "", children } = props;

    const styles = {
        orange: "button--orange",
        blue: "button--blue",
        grey: "button--grey",
    };

    return (
        <button className={styles[style] + " " + classNames} onClick={onClick}>
            {children}
        </button>
    );
};
