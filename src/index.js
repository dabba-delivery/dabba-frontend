import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Menu from "./menu";
import SortBlock from "./sort";
import MapBlock from "./map";
import "./index.css";
import "./header.css";
import Logo from "./media/logo.png";

const restaurant = {
    address: "Красногвардейская 16",
    closeTime: "20:00",
    contactPhone: "8(999) 420 11 11",
    dishes: [
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
    ],
    email: "dodo@fmail.com",
    id: 0,
    kitchenType: "RUSSIAN",
    logoUrl: "string",
    name: "Додо пицца",
    openTime: "8:00",
    serviceRadius: 10,
};

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="wall">
                    <img src={Logo} className="wall__logo" alt="logo" />
                    <h2 className="wall__name">
                        {this.props.data.name + " " + this.props.data.address}
                    </h2>
                    <div className="wall__info">
                        <div></div>
                        <p>{this.props.data.contactPhone}</p>
        <p>{this.props.data.kitchenType}</p>
        <p>{this.props.data.email}</p>
                    </div>
                </div>
                <div className="line">
                    <p className="line__time">
                        Время доставки: Пн - Вс с {this.props.data.openTime} до {this.props.data.closeTime}
                    </p>

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
                <Header data={this.props.data} />
                <MapBlock />
                <SortBlock />
                <Menu dishes={this.props.data.dishes} />
            </div>
        );
    }
}

ReactDOM.render(
    <MainPart data={restaurant} />,
    document.getElementById("root")
);

serviceWorker.unregister();
