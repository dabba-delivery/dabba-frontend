import React from "react";
import "./bin.css";

export default class Bin extends React.Component {
    constructor(props) {
        super(props);

        const cart = new Map();
        this.state = { cart: cart };
    }

    componentDidMount() {
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
            } else {
                console.log("there is no key: ", id);
            }
            this.setState({
                cart: cart,
            });
        };
    }

    componentWillUnmount() {
        delete window.cart;
    }

    render() {
        return (
            <div className="bin">
                <div className="bin__header">
                    <svg
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M24.5417 6.45833V24.5417H6.45833V6.45833H24.5417ZM25.9625 3.875H5.0375C4.39167 3.875 3.875 4.39167 3.875 5.0375V25.9625C3.875 26.4792 4.39167 27.125 5.0375 27.125H25.9625C26.4792 27.125 27.125 26.4792 27.125 25.9625V5.0375C27.125 4.39167 26.4792 3.875 25.9625 3.875ZM14.2083 9.04167H21.9583V11.625H14.2083V9.04167ZM14.2083 14.2083H21.9583V16.7917H14.2083V14.2083ZM14.2083 19.375H21.9583V21.9583H14.2083V19.375ZM9.04167 9.04167H11.625V11.625H9.04167V9.04167ZM9.04167 14.2083H11.625V16.7917H9.04167V14.2083ZM9.04167 19.375H11.625V21.9583H9.04167V19.375Z"
                            fill="#FA7921"
                        />
                    </svg>
                    <h5 className="bin__text">
                        Корзина ({this.state.cart.size})
                    </h5>
                </div>
                <div className="bin__list">
                    {[...this.state.cart].map(([el, { val }], i) => (
                        <div className="bin__element" key={i}>
                            <h5 className="element__name">{el.name}</h5>
                            <h5 className="element__amount">{val}</h5>
                        </div>
                    ))}
                </div>
                <div className="bin__footer">
                    <p className="bin__summary">Итоговая сумма</p>
                    <p className="bin__summary__order">Включая заказ</p>
                    <button className="bin__button">Оформить заказ</button>
                </div>
            </div>
        );
    }
}
