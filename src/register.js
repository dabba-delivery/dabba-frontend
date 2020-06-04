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
        this.state = { loaded: false, section: "sign in" };
    }

    componentDidMount = () => {
        setTimeout(() => this.setState({ loaded: true }), 1000);
    };

    render() {
        return this.state.loaded ? (
            <div className="register app-appear">
                <form
                    className="register__form"
                    method="post"
                    action="https://85.192.35.203:8080/restaurant"
                    encType="application/json"
                    onSubmit={() => alert("ok")}
                >
                    {this.state.section === "sign up" ? (
                        <div className="register__sign-in component-appear">
                            <h1 classNamesBox="register__onerow">
                                Регистрация
                            </h1>
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
                            <Input
                                style="blue"
                                name="Время открытия"
                                type="time"
                            />
                            <Input
                                style="blue"
                                name="Время закрытия"
                                type="time"
                            />
                            <Input style="blue" name="Телефон" classNamesBox="register__bottom"/>
                            <Input style="blue" name="Email" classNamesBox="register__bottom" />

                            <Button>Отправить</Button>
                            <p
                                className="register__changesection"
                                onClick={() =>
                                    this.setState({
                                        section:
                                            this.state.section === "sign in"
                                                ? "sign up"
                                                : "sign in",
                                    })
                                }
                            >
                                Уже есть аккаунт? Войдите в него
                            </p>
                        </div>
                    ) : (
                        <div className="register__sign-in">
                            <h1 className="register__onerow">
                                Войти в систему
                            </h1>
                            <Input
                                style="blue"
                                classNamesBox="register__onerow"
                                name="Email"
                            />
                            <Input
                                style="blue"
                                classNamesBox="register__onerow register__bottom"
                                name="Пароль"
                            />

                            <Button>Отправить</Button>
                            <p
                                className="register__changesection"
                                onClick={() =>
                                    this.setState({
                                        section:
                                            this.state.section === "sign in"
                                                ? "sign up"
                                                : "sign in",
                                    })
                                }
                            >
                                Нет аккаунта? Создайте
                            </p>
                        </div>
                    )}
                </form>
            </div>
        ) : (
            <Loader />
        );
    }
}
