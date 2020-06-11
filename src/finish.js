// React
import React from "react";

// Main commmponents

// Components from library
import { Input, Button } from "./components";

// Context

// CSS
import "./style/finish.css";

/**
 * Finish represents the form where user will put his information to
 *
 * @param {props} props - includes two props inside
 * - finalCost - final cost of the order
 * - closeFunction - close handler for this component
 * @return {HTMLElement}
 */
export const Finish = (props) => {
    const { finalCost, closeFunction } = props;

    return (
        <div className="finish">
            <form className="finish__box">
                <div className="finish__data">
                    <h5>Личные данные</h5>
                    <Input name="Имя и фамилия" />
                    <Input name="Электронная почта" />
                    <Input name="Номер телефона" />
                </div>
                <div className="finish__adress">
                    <h5>Адрес</h5>
                    <Input
                        name="Улица и номер дома"
                        classNamesBox="finish__street"
                    />
                    <Input name="Квартира" />
                    <Input name="Домофон" />
                    <Input name="Подъезд" />
                    <Input name="Этаж" />
                </div>
                <div className="finish__cost">
                    <Button
                        classNames="finish__button"
                        onClick={() => closeFunction()}
                    >
                        Оплатить заказ
                    </Button>
                    <p>{finalCost}р.</p>
                </div>
            </form>
            <div className="finish__layer"></div>
        </div>
    );
};
