import React, { useState } from "react";
import { Button, svg } from "../index";
import { ICounter } from "../types";
import "./--small.css";
import "./--orange.css";

/**
 * Class Counter represents two buttons and numbers between them which shows amount of items
 *
 * logic
 * @constuctor
 * @param {props} props - includes:
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
 * @return {HTMLElement}
 */
export const Counter: React.FC<ICounter> = (props) => {
    const {
        style = "orange",
        classNames = "",
        classNamesBox = "",
        classNamesText = "",
        size = "small",
        initialValue = 0,
        step = 1,
        limit = 10,
        func = () => console.log("it works"),
    } = props;

    const styles = {
        orange: "counter--orange",
        blue: "counter--blue",
    };

    const sizes = {
        small: "counter--small",
        medium: "counter--medium",
        big: "counter--big",
    };

    const { value, handleDecrease, handleIncrease } = useCounter(
        initialValue,
        step,
        limit,
        func
    );

    const {
        __counter: { buttonLeft, buttonRight },
    } = svg;

    return (
        <div className={styles[style] + " " + classNamesBox}>
            <Button
                classNames={classNames + " " + sizes[size]}
                style={style}
                onClick={handleDecrease}
            >
                {buttonLeft}
            </Button>
            <p className={"counter__text " + classNamesText}>{value}</p>
            <Button
                classNames={
                    classNames +
                    " " +
                    (sizes[size] ? sizes[size] : "counter--small")
                }
                style={style}
                onClick={handleIncrease}
            >
                {buttonRight}
            </Button>
        </div>
    );
};

/**
 * Represents outside custom hooks for work with counter logic of the component
 *
 * @param {number} initialValue  - start value for this counter
 * @param {number} step - step for inrementor and decrementor
 * @param {number} limit - limit for counter // sometimes you need a maximum :)
 * @param {Function} handlerFunc - handle function which invoke and use actual value as argument
 *
 * @return {Object}
 */
const useCounter = (
    initialValue: number = 1,
    step: number = 1,
    limit: number = 10,
    handlerFunc: Function = () => console.log("click")
) => {
    const [value, setCount] = useState(initialValue);
    /**
     * Increase value
     * @return {Function}
     */
    const handleDecrease = () =>
        value - step < 0 || value === 0
            ? setCount(value)
            : setCount(value - step);
    /**
     * Decrease value
     * @return {Function}
     */
    const handleIncrease = () =>
        value + step > limit || value === limit
            ? setCount(value)
            : setCount(value + step);

    handlerFunc(value);

    return {
        value,
        handleIncrease,
        handleDecrease,
    };
};
