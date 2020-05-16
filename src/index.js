import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import "./position.css";
import FoodImage from "./media/food.png";

class Position extends React.Component {
    render() {
        return (
            <div className="position">
                <div className="position__image"></div>
                <h5 className="position__name">Пицца Маргарита</h5>
                <p className="position__ingridients">
                    Картофель из печи, соленые огурчики, цыпленок, соус ранч,
                    томаты, красный лук, чеснок, моцарелла, томатный соус
                </p>
                <div className="position__wc">
                    <p className="postion__weight">500гр</p>
                    <p className="position__cost">650гр</p>
                </div>
                <button className="position__button">Выбрать</button>
            </div>
        );
    }
}

ReactDOM.render(<Position />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
