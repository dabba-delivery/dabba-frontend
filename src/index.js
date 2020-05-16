import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Menu from "./menu";
import SortBlock from "./sort";
import MapBlock from "./map";
import "./index.css";

const positions = [
    {
        name: "Пицца Маргарита",
        pictureUrl: "string",
        weigh: 200,
        price: 3400,
        description:
            "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
        comments: "string",
    },
    {
        name: "Пицца Маргарита",
        pictureUrl: "string",
        weigh: 1000,
        price: 800,
        description:
            "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
        comments: "string",
    },
    {
        name: "Пицца Маргарита",
        pictureUrl: "string",
        weigh: 1000,
        price: 50,
        description:
            "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
        comments: "string",
    },
    {
        name: "Пицца Маргарита",
        pictureUrl: "string",
        weigh: 1400,
        price: 1500,
        description:
            "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
        comments: "string",
    },
    {
        name: "Пицца Маргарита",
        pictureUrl: "string",
        weigh: 200,
        price: 3400,
        description:
            "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
        comments: "string",
    },
    {
        name: "Пицца Маргарита",
        pictureUrl: "string",
        weigh: 1000,
        price: 800,
        description:
            "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
        comments: "string",
    },
    {
        name: "Пицца Маргарита",
        pictureUrl: "string",
        weigh: 1000,
        price: 50,
        description:
            "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
        comments: "string",
    },
    {
        name: "Пицца Маргарита",
        pictureUrl: "string",
        weigh: 1400,
        price: 1500,
        description:
            "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
        comments: "string",
    },
];

class MainPart extends React.Component {
    render() {
        return (
            <div
                style={{
                    backgroundColor: "#f7f7f7",
                }}
            >
                <MapBlock />
                <SortBlock />
                <Menu dishes={positions} />
            </div>
        );
    }
}

ReactDOM.render(<MainPart />, document.getElementById("root"));

serviceWorker.unregister();
