import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Header from "./header.js"
import Menu from "./menu";
import SortBlock from "./sort";
import MapBlock from "./map";
import "./index.css";

// пример реального объекта с бекэнда

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
