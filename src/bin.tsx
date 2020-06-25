// React
import React from "react";

// Main commmponents

// Components from library
import { CartItem, Button, svg } from "./components";

// Types and Interfaces
import { IDish } from "./components/types";

// Context
import { BinContext } from "./context";

// CSS
import "./style/bin.css";

/**
 * Bin - represent basket for all user orders
 *
 * @param {props} props
 * @param {Function} finishFunc - handler which calls the last page to make an order
 * @return {HTMLElement}
 */
export const Bin: React.FC<{ finishFunc: Function }> = (props) => {
    const { finishFunc = () => alert("No handler") } = props;

    const {
        bin: { bin },
    } = svg;

    return (
        <BinContext.Consumer>
            {({
                items,
                removePosition = () => alert("Something went wrong"),
                countPositions = () => 0,
            }) => (
                <div className="bin">
                    <div className="bin__header">
                        {bin}
                        <h5 className="bin__text">
                            Корзина {countPositions!()}р.
                        </h5>
                    </div>
                    <div className="bin__list">
                        {mapUnpack(items, removePosition)}
                    </div>
                    <div className="bin__footer">
                        <Button
                            style="blue"
                            classNames="bin__button"
                            onClick={
                                countPositions() > 0
                                    ? () => finishFunc()
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

/**
 * mapUnpack - handler function for unpacking the map array and implementing all information inside components
 *
 * @param {Map} map - takes the Map Array as argument
 * @param {Function} deleteHandler - function which will be inplemented inside component
 * @return {HTMLElement}
 */
function mapUnpack(map: any, deleteHandler: Function) {
    const result: JSX.Element[] = [];
    map.forEach((amount: any, dishInfo: IDish) => {
        result.push(
            <CartItem
                position={dishInfo}
                amount={amount.val}
                key={dishInfo.name}
                handleDelete={deleteHandler}
            />
        );
    });

    return result;
}
