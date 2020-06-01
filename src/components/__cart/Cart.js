import React from "react";
import "./--default.css";

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

        return (
            <div className="cart">
                <div className="cart__block">
                    <h5 className="cart__name">{name}</h5>
                    <p className="cart__amount">{amount}шт.</p>
                    <p className="cart__weight">{weigh}гр.</p>
                    <p className="cart__price">{price}р.</p>
                </div>
                <div className="cart__option">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M0 14V16H6V14H0ZM0 2V4H10V2H0ZM10 18V16H18V14H10V12H8V18H10ZM4 6V8H0V10H4V12H6V6H4ZM18 10V8H8V10H18ZM12 6H14V4H18V2H14V0H12V6Z"
                            fill="black"
                            fillOpacity="0.5"
                        />
                    </svg>

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
