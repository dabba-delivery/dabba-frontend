import React from "react";
import "./--default.css";
import { svg } from "../index";

/**
 * Class Cart represents one position card in the cart
 *
 * logic
 * @param {object} position - dish object which will supply all information and will be deleted with method "func"
 * @param {amount} amount - represents quantity of this position on the cart
 * @param {number} key - just id for correct work of React
 *
 * style
 * @param {function} handleDelete - handle click function. This func invokes and takes position as agrument
 */

export class CartItem extends React.Component {
    render() {
        const {
            position,
            position: { name, weigh, price },
            amount,
            handleDelete,
        } = this.props;

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
    }
}
