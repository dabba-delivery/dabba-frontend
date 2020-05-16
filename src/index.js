import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Position from "./position";
import "./index.css";
import "./menu.css";

const positions = [
    {
        name: "Пицца Маргарита",
        ingridients:
            "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
        weight: "500гр",
        cost: "500р",
    },
    {
        name: "Пицца Аррива",
        ingridients:
            "Привет! Это картофельный компонент и перманентный соус",
        weight: "100гр",
        cost: "1000р",
    },
    {
        name: "Пицца Деревенская",
        ingridients:
            "What's up?",
        weight: "500гр",
        cost: "500р",
    },
];

function UnpackPositions(props) {
    const positionsArr = props.arr;
    let listPositions = positionsArr.map((position) => {
        return (
            <Position
                id={position}
                name={position.name}
                ingridients={position.ingridients}
                weight={position.weight}
                cost={position.cost}
            />
        );
    });

    return listPositions;
}

class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <UnpackPositions arr={positions} />
            </div>
        );
    }
}

ReactDOM.render(<Menu />, document.getElementById("root"));

serviceWorker.unregister();
