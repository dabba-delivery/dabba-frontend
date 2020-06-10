/* eslint-disable require-jsdoc */
import React from "react";
import "./style/bin.css";

import { CartItem, Button, svg } from "./components";

import { BinContext } from "./context";

export const Bin = (props) => {
    const { finishFunc = () => alert("No handler") } = props;

    const {
        bin: { bin },
    } = svg;

    return (
        <BinContext.Consumer>
            {({ items, removePosition, countPositions }) => (
                <div className="bin">
                    <div className="bin__header">
                        {bin}
                        <h5 className="bin__text">
                            Корзина {countPositions()}р.
                        </h5>
                    </div>
                    <div className="bin__list">{}</div>
                    <div className="bin__footer">
                        <Button
                            style="blue"
                            classNames="bin__button"
                            onClick={
                                countPositions() > 0
                                    ? () => finishFunc(this.showSum())
                                    : () =>
                                          alert("Корзина пуста, купи че нить!")
                            }
                        >
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            )}
        </BinContext.Consumer>
    );
};
