import React from "react";
import "./style/finish.css";

import { Input, Button } from "./components";

export default (props) => {
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
