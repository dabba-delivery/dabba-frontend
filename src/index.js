import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Menu from "./menu";
import "./index.css";
import "./sort.css";

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

class SortBlock extends React.Component {
    render() {
        return (
            <div className="sort">
                <h5 className="sort__text">Показать</h5>
                <SortButton name="Новинки" func={() => alert("It works")} />
                <SortButton name="Популярное" func={() => alert("It works")} />
            </div>
        );
    }
}

class SortButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.func();
    }

    render() {
        return (
            <button onClick={this.handleClick} className="sort__button">
                {this.props.name}
            </button>
        );
    }
}

class MainPart extends React.Component {
    render() {
        return (
            <div
                style={{
                    backgroundColor: "#f7f7f7",
                    padding: "10px 0px 0px 0px",
                }}
            >
                <SortBlock />
                <Menu dishes={positions} />
            </div>
        );
    }
}

ReactDOM.render(<MainPart />, document.getElementById("root"));

serviceWorker.unregister();
