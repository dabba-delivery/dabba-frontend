import React from "react";
import "./style/sort.css";

import { Toggle } from "./components";

// внутри каждой кнопки сортировки есть func - сюда нужно
// вставлять функцию сортировки от компонентов выше
// позде можно сделать возможноть получения массива названий и функций

export default (props) => {
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
