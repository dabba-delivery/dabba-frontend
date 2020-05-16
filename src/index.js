import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Menu from "./menu";
import SortBlock from "./sort";
import MapBlock from "./map";
import "./index.css";
import "./header.css";
import Logo from "./media/logo.png";

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

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="wall">
                    <img src={Logo} className="wall__logo" />
                    <h2 className="wall__name">
                        Додо Пицца Красногвардейская 16
                    </h2>
                    <div className="wall__info">
                        <div></div>
                        <p>8(924) 765 45 45</p>
                        <p>Пицца, Суши</p>
                        <p>dodopizza@gmail.com</p>
                    </div>
                </div>
                <div className="line">
                    <p className="line__time">Время доставки: Пн - Вс с 10:00 до 21:00</p>
                    
                    <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.00002 11.2L1.80002 6.99998L0.400024 8.39998L6.00002 14L18 1.99998L16.6 0.599976L6.00002 11.2Z"
                            fill="#7CDAA2"
                        />
                    </svg>
                    <p className="line__message">Вы в зоне доставки</p>
                    <button className="wall__share">Поделиться</button>
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
                <Header />
                <MapBlock />
                <SortBlock />
                <Menu dishes={positions} />
            </div>
        );
    }
}

ReactDOM.render(<MainPart />, document.getElementById("root"));

serviceWorker.unregister();
