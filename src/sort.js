import React from "react";
import "./sort.css";

import { Button } from "./components/library.js";

// внутри каждой кнопки сортировки есть func - сюда нужно
// вставлять функцию сортировки от компонентов выше
// позде можно сделать возможноть получения массива названий и функций

export default class SortBlock extends React.Component {
    render() {
        return (
            <div className="sort">
                <h5 className="sort__text">Показать</h5>
                <Button
                    
                    elementStyle={"blue"}
                    addClasses={"sort__button"}
                    handleFunction={()=>console.log("sort works")}
                >Наборы</Button>
                <Button
                    
                    elementStyle={"blue"}
                    addClasses={"sort__button"}
                    handleFunction={()=>console.log("sort works")}
                >Популярное</Button>
            </div>
        );
    }
}