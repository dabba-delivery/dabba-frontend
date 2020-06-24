import React from "react";
import { IButton } from "../types";
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
    const {
        onClick = () => console.log("it works"),
        style = "orange",
        classNames = "",
        children,
    } = props;

    const styles = {
        orange: "button--orange",
        blue: "button--blue",
        grey: "button--grey",
    };
    /**
     * @param {event} event - returns button click to make prevent default and invoke handler from props
     */
    const handleClick = (event: React.MouseEvent) => {
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
