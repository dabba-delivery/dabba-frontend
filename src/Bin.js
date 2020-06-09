import React from "react";
import "./style/bin.css";

import { CartItem, Button, svg } from "./components";

/**
 * Class Bin represents the bin for product carts
 */
export default class Bin extends React.Component {
    constructor(props) {
        super(props);

        const cart = new Map();
        this.state = { cart: cart };
    }
    /**
     * This function creates cart
     */
    componentDidMount = () => {
        const cart = this.state.cart;
        window.cart = cart;

        cart.addPos = (id) => {
            if (cart.has(id)) {
                ++cart.get(id).val;
            } else {
                cart.set(id, { val: 1 });
            }
            this.setState({
                cart: cart,
            });
        };

        cart.removePos = (id) => {
            if (cart.has(id)) {
                if (--cart.get(id).val <= 0) {
                    cart.delete(id);
                }
            }
            this.setState({
                cart: cart,
            });
        };
    };
    /**
     * This function reset cart when this component unmounts
     */
    componentWillUnmount = () => {
        delete window.cart;
    };
    /**
     * Return the final amount of money for the current order
     * @return {sefw}
     */
    showSum = () => {
        let result = 0;
        for (const dish of this.state.cart.entries()) {
            result += dish[0].price * dish[1].val;
        }
        return result;
    };
    /**
     * Finally, return bin with product carts
     * @return {HTMLElement}
     */
    render() {
        const { finishFunc } = this.props;

        const {
            bin: { bin },
        } = svg;

        return (
            <div className="bin">
                <div className="bin__header">
                    {bin}
                    <h5 className="bin__text">Корзина {this.showSum()}р.</h5>
                </div>
                <div className="bin__list">
                    {[...this.state.cart].map(([el, { val }], i) => (
                        <CartItem
                            position={el}
                            amount={val}
                            key={i}
                            handleDelete={window.cart.removePos}
                        />
                    ))}
                </div>
                <div className="bin__footer">
                    <Button
                        style="blue"
                        classNames="bin__button"
                        onClick={
                            this.showSum()
                                ? () => finishFunc(this.showSum())
                                : () => alert("Корзина пуста, купи че нить!")
                        }
                    >
                        Оформить заказ
                    </Button>
                </div>
            </div>
        );
    }
}
