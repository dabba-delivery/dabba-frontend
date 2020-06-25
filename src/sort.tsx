// React
import React from "react";

// Main commmponents

// Components from library
import { Toggle } from "./components";

// Types and Interfaces

// Context

// CSS
import "./style/sort.css";

/**
 * SortBlock - shows button for sotring positions
 * @return {HTMLElement} - sort block with buttons which should get a clickHandler
 */
export const SortBlock = () => {
    return (
        <div className="sort">
            <h5 className="sort__text">Показать</h5>
            <div className="sort__box">
                <Toggle
                    style="blue"
                    onClick={() => console.log("Temporary solution")}
                    classNames="sort__toggle"
                >
                    Наборы
                </Toggle>
                <Toggle
                    style="blue"
                    onClick={() => console.log("Temporary solution")}
                    classNames="sort__toggle"
                >
                    Популярное
                </Toggle>
                <Toggle
                    style="blue"
                    onClick={() => console.log("Temporary solution")}
                    classNames="sort__toggle"
                >
                    Наборы
                </Toggle>
                <Toggle
                    style="blue"
                    onClick={() => console.log("Temporary solution")}
                    classNames="sort__toggle"
                >
                    Популярное
                </Toggle>
                <Toggle
                    style="blue"
                    onClick={() => console.log("Temporary solution")}
                    classNames="sort__toggle"
                >
                    Наборы
                </Toggle>
                <Toggle
                    style="blue"
                    onClick={() => console.log("Temporary solution")}
                    classNames="sort__toggle"
                >
                    Популярное
                </Toggle>
                <Toggle
                    style="blue"
                    onClick={() => console.log("Temporary solution")}
                    classNames="sort__toggle"
                >
                    Наборы
                </Toggle>
                <Toggle
                    style="blue"
                    onClick={() => console.log("Temporary solution")}
                    classNames="sort__toggle"
                >
                    Популярное
                </Toggle>
                <Toggle
                    style="blue"
                    onClick={() => console.log("Temporary solution")}
                    classNames="sort__toggle"
                >
                    Популярное
                </Toggle>
                <Toggle
                    style="blue"
                    onClick={() => console.log("Temporary solution")}
                    classNames="sort__toggle"
                >
                    Популярное
                </Toggle>
            </div>
        </div>
    );
};
