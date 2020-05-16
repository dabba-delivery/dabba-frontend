import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Position from "./position";
import "./index.css";
import "./menu.css";

const positions = [
    {
        name: "Пицца Маргарита",
        pictureUrl: "string",
        weigh: 1000,
        price: 1000,
        description:
            "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
        comments: "string",
    },
    {
        name: "Пицца Маргарита",
        pictureUrl: "string",
        weigh: 1000,
        price: 1000,
        description:
            "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
        comments: "string",
    },
    {
        name: "Пицца Маргарита",
        pictureUrl: "string",
        weigh: 1000,
        price: 1000,
        description:
            "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
        comments: "string",
    },
    {
        name: "Пицца Маргарита",
        pictureUrl: "string",
        weigh: 1000,
        price: 1000,
        description:
            "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
        comments: "string",
    },
];

function UnpackPositions(props) {
    const positionsArr = props.arr;
    let listPositions = positionsArr.map((position) => {
        return (
            <Position
                id={position}
                name={position.name}
                ingridients={position.description}
                weight={position.weigh}
                cost={position.price}
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
