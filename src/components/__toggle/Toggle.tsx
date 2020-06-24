import React, { useState } from "react";
import { IToggle } from "../types";
import "./--orange.css";
import "./--orange-active.css";
import "./--blue.css";
import "./--blue-active.css";

/**
 * This component represents a Toggle
 *
 * logic
 * @constuctor
 * @param {props} props includes:
 * @param {Function} onChange - onClick handler for a toggle
 * {this.props.children} - name of a toggle
 *
 * style
 * @param {string} classNames - adds new classes to the element, usually it's used for positioning, but sometimes custom is needed
 * @param {string} style - sets the color palette for this element. You can choose one of availables
 *
 * @return {HTMLElement} - which is toogle
 */
export const Toggle: React.FC<IToggle> = (props) => {
    const {
        onClick = () => console.log("sort works"),
        classNames = "",
        style = "orange",
        children,
    } = props;

    const [active, setActive] = useState(false);

    const styles = {
        orange: ["toggle--orange", "toggle--orange toggle--orange-active"],
        blue: ["toggle--blue", "toggle--blue toggle--blue-active"],
    };

    /**
     * Click handler
     * @param {DOMEvent} event
     */
    const handleClick = () => {
        setActive(!active);
        onClick();
    };

    return (
        <button
            className={
                (active ? styles[style][1] : styles[style][0]) +
                " " +
                classNames
            }
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
