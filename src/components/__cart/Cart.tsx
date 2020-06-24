// React
import React from "react";

// Main commmponents

// Components from library

// Types and Interfaces
import { ICartItem } from "../types";

// Context
import { svg } from "../index";

// CSS
import "./--default.css";

/**
 * Class Cart represents one position card in the cart
 *
 * logic
 * @param {props} props - includes:
 * @param {object} position - dish object which will supply all information and will be deleted with method "func"
 * @param {amount} amount - represents quantity of this position on the cart
 * @param {number} key - just id for correct work of React
 *
 * style
 * @param {function} handleDelete - handle click function. This func invokes and takes position as agrument
 *
 * @return {HTMLElement} - cart with information about
 */
export const CartItem: React.FC<ICartItem> = (props) => {
    const {
        position = {},
        position: { name = "no value", weigh = "no value", price = "no value" },
        amount = "no value",
        handleDelete = () => alert("it doesent work"),
    } = props;

    const {
        __cart: { cartOptions },
    } = svg;

    return (
        <div className="cart">
            <div className="cart__block">
                <h5 className="cart__name">{name}</h5>
                <p className="cart__amount">{amount}шт.</p>
                <p className="cart__weight">{weigh}гр.</p>
                <p className="cart__price">{price}р.</p>
            </div>
            <div className="cart__option">
                {cartOptions}
                <p
                    className="cart__delete"
                    onClick={() => handleDelete(position)}
                >
                    Удалить
                </p>
            </div>
        </div>
    );
};
