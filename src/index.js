import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Menu from "./menu";
import SortBlock from "./sort";
import "./index.css";
import "./map.css";

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

class MapBlock extends React.Component {
    render() {
        return (
            <div className="map">
                <div className="map__map"></div>
                <div className="map__form">
                    <p className="map__text-zone">
                        У этого заведения есть зона доставки, для заказа вы
                        должны находиться в ней
                    </p>
                    <button className="map__button-allow">Разрешите доступ к вашему местоположению</button>
                    <p className="map__text-adress">или введите адрес доставки (улица и дом)</p>
                    <input className="map__input-adress"></input>
                    <button className="map__button-ready">Готово</button>
                </div>
            </div>
        );
    }
}

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
