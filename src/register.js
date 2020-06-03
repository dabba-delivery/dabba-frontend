import React from "react";
import InputMask from "react-input-mask";
import "./style/register.css";
import { Input, Button, Loader } from "./components/library.js";

const required = false;

function NumberInput(props) {
    return (
        <InputMask
            name="contactPhone"
            mask="+7(999)999-99-99"
            placeholder="phone number"
            required={required}
            {...props}
        />
    );
}

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false };
    }

    componentDidMount = () => {
        this.setState({ loaded: true });
    };

    render() {
        return this.state.loaded ? (
            <div className="register">
                <div className="register__wall"></div>
                <form
                    className="register__form"
                    method="post"
                    action="https://85.192.35.203:8080/restaurant"
                    encType="application/json"
                    onSubmit={() => alert("ok")}
                >
                    <h1>Регистрация</h1>
                    <Input
                        style="blue"
                        classNamesBox="register__onerow"
                        name="Название"
                    />
                    <Input
                        style="blue"
                        classNamesBox="register__onerow"
                        name="Адрес"
                    />
                    <Input
                        style="blue"
                        classNamesBox="register__onerow"
                        name="Тип кухни"
                    />
                    <Input style="blue" name="Время открытия" type="time"/>
                    <Input style="blue" name="Время закрытия" type="time" />
                    <Input
                        style="blue"
                        classNamesBox="register__onerow"
                        name="Email"
                    />

                    <Button
                        classNames="register__button register__onerow"
                        style="blue"
                    >
                        Отправить
                    </Button>
                </form>
            </div>
        ) : (
            <Loader />
        );
    }
}
