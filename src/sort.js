import React from "react";
import "./sort.css";

import { Toggle } from "./components/library.js";

// внутри каждой кнопки сортировки есть func - сюда нужно
// вставлять функцию сортировки от компонентов выше
// позде можно сделать возможноть получения массива названий и функций

export default class SortBlock extends React.Component {
    render() {
        return (
            <div className="sort">
                <h5 className="sort__text">Показать</h5>
                <Toggle
                    elementStyle={"orange"}
                    
                    handleFunction={() => console.log("sort works")}
                >
                    Наборы
                </Toggle>
                <Toggle
                    elementStyle={"blue"}
                    
                    handleFunction={() => console.log("sort works")}
                >
                    Популярное
                </Toggle>
            </div>
        );
    }
}
