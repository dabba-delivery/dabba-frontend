import React from "react";
import "./--default.css";

/**
 * Class Cart represents one position card in the cart
 *
 * @param {object} position - dish object which will supply all information and will be deleted with method "func"
 * @param {amount} amout - represents quantity of this position on the cart
 * @param {number} key - just id for correct work of React
 * @param {function} func - handle click function. This func invokes and takes position as agrument
 */

export class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.func(this.props.position);
    }

    render() {
        return (
            <div className="cart">
                <div className="cart__block" key={this.props.key}>
                    <h5 className="cart__name">{this.props.position.name}</h5>
                    <p className="cart__amount">{this.props.amount}шт.</p>
                    <p className="cart__weight">
                        {this.props.position.weigh}гр.
                    </p>
                    <p className="cart__price">{this.props.position.price}р.</p>
                </div>
                <div className="cart__option">
                    <p className="cart__delete" onClick={this.handleClick}>
                        Удалить
                    </p>
                </div>
            </div>
        );
    }
}
