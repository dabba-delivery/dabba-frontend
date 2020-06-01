import React from "react";
import "./style/sort.css";

import { Toggle } from "./components/library.js";

// внутри каждой кнопки сортировки есть func - сюда нужно
// вставлять функцию сортировки от компонентов выше
// позде можно сделать возможноть получения массива названий и функций

export default class SortBlock extends React.Component {
    render() {
        return (
            <div className="sort">
                <h5 className="sort__text">Показать</h5>
                <div className="sort__box">
                    <Toggle
                        style="blue"
                        classNames="sort__toggle"
                        onChange={() => console.log("sort works")}
                    >
                        Наборы
                    </Toggle>
                    <Toggle
                        style="blue"
                        classNames="sort__toggle"
                        onChange={() => console.log("sort works")}
                    >
                        Популярное
                    </Toggle>
                    <Toggle
                        style="blue"
                        classNames="sort__toggle"
                        onChange={() => console.log("sort works")}
                    >
                        Наборы
                    </Toggle>
                    <Toggle
                        style="blue"
                        classNames="sort__toggle"
                        onChange={() => console.log("sort works")}
                    >
                        Популярное
                    </Toggle>
                    <Toggle
                        style="blue"
                        classNames="sort__toggle"
                        onChange={() => console.log("sort works")}
                    >
                        Наборы
                    </Toggle>
                    <Toggle
                        style="blue"
                        classNames="sort__toggle"
                        onChange={() => console.log("sort works")}
                    >
                        Популярное
                    </Toggle>
                    <Toggle
                        style="blue"
                        classNames="sort__toggle"
                        onChange={() => console.log("sort works")}
                    >
                        Наборы
                    </Toggle>
                    <Toggle
                        style="blue"
                        classNames="sort__toggle"
                        onChange={() => console.log("sort works")}
                    >
                        Популярное
                    </Toggle>
                    <Toggle
                        style="blue"
                        classNames="sort__toggle"
                        onChange={() => console.log("sort works")}
                    >
                        Популярное
                    </Toggle>
                    <Toggle
                        style="blue"
                        classNames="sort__toggle"
                        onChange={() => console.log("sort works")}
                    >
                        Популярное
                    </Toggle>
                    s
                </div>
            </div>
        );
    }
}
