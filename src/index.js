import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import MainPart from "./mainPart";
import Bin from "./bin.js";
import Finish from "./finish";

import "./style/index.css";


// пример реального объекта с бекэнда

const restaurant = {
    address: "Красногвардейская 16",
    closeTime: "20:00",
    contactPhone: "8(999) 420 11 11",
    dishes: [
        {
            name: "Деревенская",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/04dff3cf16144112aabdd5f79182f663_584x584.jpeg",
            weigh: 200,
            price: 600,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Аррива",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/85782ebdab0143248ecd82feaf23cb1b_584x584.jpeg",
            weigh: 300,
            price: 300,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пепперони Фреш",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
            weigh: 200,
            price: 400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пепперони с томатами",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/f57b939a4455453daade38016f61d766_584x584.jpeg",
            weigh: 200,
            price: 250,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Испанские колбаски",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/750065aab4ea45268fac2f17d4c56183_584x584.jpeg",
            weigh: 200,
            price: 500,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Сырная",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
            weigh: 400,
            price: 400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Ветчина и сыры",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/814ad4a5-44bd-4b65-86e2-e6c04e622fda.jpg",
            weigh: 200,
            price: 3400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Кисло сладкая",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg",
            weigh: 400,
            price: 500,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Чизбургер пицца",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",
            weigh: 200,
            price: 700,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Крейзи пепперони",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/1e1a6e80-b3ba-4a44-b6b9-beae5b1fbf27.jpg",
            weigh: 400,
            price: 600,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Креветки по азиатски",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/00b04168-2c13-4971-ac77-e81a29807f2e.jpg",
            weigh: 200,
            price: 400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Пепперони",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/d2e337e9-e07a-4199-9cc1-501cc44cb8f8.jpg",
            weigh: 200,
            price: 3400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Додо",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/22199f5c-9011-4e93-9805-e6335ba67b39.jpg",
            weigh: 200,
            price: 800,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Деревенская",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/04dff3cf16144112aabdd5f79182f663_584x584.jpeg",
            weigh: 200,
            price: 600,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Аррива",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/85782ebdab0143248ecd82feaf23cb1b_584x584.jpeg",
            weigh: 300,
            price: 300,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пепперони Фреш",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
            weigh: 200,
            price: 400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пепперони с томатами",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/f57b939a4455453daade38016f61d766_584x584.jpeg",
            weigh: 200,
            price: 250,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Испанские колбаски",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/750065aab4ea45268fac2f17d4c56183_584x584.jpeg",
            weigh: 200,
            price: 500,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Деревенская",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/04dff3cf16144112aabdd5f79182f663_584x584.jpeg",
            weigh: 200,
            price: 600,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пицца Аррива",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/85782ebdab0143248ecd82feaf23cb1b_584x584.jpeg",
            weigh: 300,
            price: 300,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пепперони Фреш",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
            weigh: 200,
            price: 400,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Пепперони с томатами",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/f57b939a4455453daade38016f61d766_584x584.jpeg",
            weigh: 200,
            price: 250,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
        {
            name: "Испанские колбаски",
            pictureUrl:
                "https://cdn.dodostatic.net/static/Img/Products/750065aab4ea45268fac2f17d4c56183_584x584.jpeg",
            weigh: 200,
            price: 500,
            description:
                "Картофель из печи, соленые огурчики, цыпленок, соус ранч, томаты, красный лук, чеснок, моцарелла, томатный соус",
            comments: "string",
        },
    ],
    email: "info@test.ru",
    id: 0,
    kitchenType: "Итальянская кухня",
    logoUrl:
        "https://github.com/rudensergey/dabba/blob/master/src/style/media/logo.jpeg?raw=true",
    name: "Моя пицца",
    openTime: "8:00",
    serviceRadius: 1000,
    coords: "55.739933,37.652859",
};

// function Success() {
//     const success = document.createElement("div");
//     success.className = "success";
//     success.innerText = "Success";
//     success.onclick = function () {
//         document.body.removeChild(this);
//     };
//     document.body.append(success);

//     const location = new URL(window.location);
//     setTimeout(() => {
//         window.location = location.host + "/addDishes";
//     }, 1000);
// }

// window.restaurant = restaurant;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { finishOrder: false, cost: 0 };
    }

    makeOrder = (finalCost) => {
        this.setState({
            finishOrder: !this.state.finishOrder,
            cost: finalCost,
        });
    };

    render() {
		const {data} = this.props

        return (
            <div className="page">
                {this.state.finishOrder ? (
                    <Finish
                        finalCost={this.state.cost}
                        closeFunction={this.makeOrder}
                    />
                ) : (
                    ""
                )}
                <MainPart data={data} />
                <Bin finishFunc={this.makeOrder} />
            </div>
        );
    }
}

ReactDOM.render(<App data={restaurant} />, document.getElementById("root"));

serviceWorker.unregister();
