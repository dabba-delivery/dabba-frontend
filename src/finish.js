import React from "react";
import "./style/finish.css";

import { Input } from "./components/library.js";

export default class Finish extends React.Component {
    render() {
        return (
            <div className="finish">
                <div className="finish__box">
                    <div>
                        <h5>Личные данные</h5>
                        <Input inputName={"Имя и фамилия"} />
                        <Input inputName={"Электронная почта"} />
                    </div>
                    <div>
                        <h5>Адрес</h5>
                        <Input inputName={"Улица и номер дома"} />
                        <div>
                            <Input inputName={"Квартира"} />
                            <Input inputName={"Домофон"} />
                            <Input inputName={"Подъезд"} />
                            <Input inputName={"Этаж"} />
                        </div>
                    </div>
                </div>
                <div className="finish__layer"></div>
            </div>
        );
    }
}
