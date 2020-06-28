// React
import React from "react";

// Main commmponents
import { Button } from "./components";
import { BinContext } from "./context";
import { IPosition } from "./components/types";

// Components from library

// Types and Interfaces

// Context

// CSS
import "./style/position.css";

export default (props: IPosition) => {
    const {
        name = "empty value",
        link,
        ingridients = "empty value",
        cost = "empty value",
        id,
        weight = "empty value",
    } = props;

    return (
        <BinContext.Consumer>
            {({ addPosition }) => (
                <div className="position">
                    <div
                        className="position__image"
                        style={{
                            backgroundImage: link
                                ? `url(${link})`
                                : "url(https://oop2.pizzahut.ru/product_pics/small//4/c5d0fc7bf98649d9400b6cbb2589f59e.png)",
                        }}
                    ></div>
                    <h5 className="position__name">{name}</h5>
                    <p className="position__ingridients">{ingridients}</p>
                    <div className="position__wc">
                        <p className="position__weight">{weight + "гр."}</p>
                        <p className="position__cost">{cost + "р."}</p>
                    </div>

                    <Button
                        styl="orange"
                        classNames="position__button"
                        onClick={() => {
                            addPosition!(id);
                        }}
                    >
                        Выбрать
                    </Button>
                </div>
            )}
        </BinContext.Consumer>
    );
};
