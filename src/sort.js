import React from "react";
import "./style/sort.css";

import { Toggle } from "./components";

/**
 * SortBlock - shows button for sotring positions
 * @return {HTMLElement} - sort block with buttons which should get a clickHandler
 */
export const SortBlock = () => {
    return (
        <div className="sort">
            <h5 className="sort__text">Показать</h5>
            <div className="sort__box">
                <Toggle style="blue" classNames="sort__toggle">
                    Наборы
                </Toggle>
                <Toggle style="blue" classNames="sort__toggle">
                    Популярное
                </Toggle>
                <Toggle style="blue" classNames="sort__toggle">
                    Наборы
                </Toggle>
                <Toggle style="blue" classNames="sort__toggle">
                    Популярное
                </Toggle>
                <Toggle style="blue" classNames="sort__toggle">
                    Наборы
                </Toggle>
                <Toggle style="blue" classNames="sort__toggle">
                    Популярное
                </Toggle>
                <Toggle style="blue" classNames="sort__toggle">
                    Наборы
                </Toggle>
                <Toggle style="blue" classNames="sort__toggle">
                    Популярное
                </Toggle>
                <Toggle style="blue" classNames="sort__toggle">
                    Популярное
                </Toggle>
                <Toggle style="blue" classNames="sort__toggle">
                    Популярное
                </Toggle>
                s
            </div>
        </div>
    );
};
