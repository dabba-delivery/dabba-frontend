import React from "react";
import "./--default.css";

export class Cart extends React.Component {
    render() {
        return (
            <div className="cart" >
                <div className="cart__block" key={this.props.key}>
                    <h5 className="cart__name">{this.props.position.name}</h5>
                    <p className="cart__amount">{this.props.amount}шт.</p>
                    <p className="cart__weight">
                        {this.props.position.weigh}гр.
                    </p>
                    <p className="cart__price">{this.props.position.price}р.</p>
                </div>
                <div className="cart__option">
                    <p className="cart__delete" >Удалить</p>
                </div>
            </div>
        );
    }
}
