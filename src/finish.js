import React from "react";
import "./style/finish.css";

import { Input, Button } from "./components/library.js";

export default class Finish extends React.Component {
    render() {
        return (
            <div className="finish">
                <form className="finish__box">
                    <div className="finish__data">
                        <h5>Личные данные</h5>
                        <Input inputName={"Имя и фамилия"} />
                        <Input inputName={"Электронная почта"} />
                    </div>
                    <div className="finish__adress">
                        <h5>Адрес</h5>
                        <Input
                            inputName={"Улица и номер дома"}
                            classBox={"finish__street"}
                        />
                        <Input inputName={"Квартира"} />
                        <Input inputName={"Домофон"} />
                        <Input inputName={"Подъезд"} />
                        <Input inputName={"Этаж"} />
                    </div>
                    <div className="finish__cost">
                        <Button
                            addClasses={"finish__button"}
                            handleFunction={() => {
                                alert("Вы сделали заказ")
                                this.props.closeFunction()
                            }}
                        >
                            Оплатить заказ
                        </Button>
                        <p>{this.props.finalCost}р.</p>
                    </div>
                </form>
                <div className="finish__layer"></div>
            </div>
        );
    }
}
