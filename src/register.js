// React
import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Main commmponents

// Components from library
import { Input, Button, Loader, Navigation } from "./components";

// Context

// CSS
import "./style/register.css";

/**
 * Register - represents Registration window
 * @return {HTMLElement}
 */
export const Register = () => {
    const [loaded, setLoaded] = useState(false);
    const [section, setSection] = useState("sign in");

    // Just for development
    setTimeout(() => setLoaded(true), 1000);

    return loaded ? (
        <div className="app-appear">
            <Navigation />
            <div className="register">
                <form className="register__form">
                    {section === "sign up" ? (
                        <div className="register__sign-in component-appear">
                            <h1 classNamesBox="register__onerow component-appear">
                                Регистрация
                            </h1>

                            <Input
                                style="blue"
                                classNamesBox="register__onerow"
                                name="Email"
                            />
                            <Input
                                style="blue"
                                classNamesBox="register__onerow"
                                name="Пароль"
                            />
                            <Input
                                style="blue"
                                classNamesBox="register__onerow register__bottom"
                                name="Подтверждение пароля"
                            />

                            <Button>Отправить</Button>
                            <p
                                className="register__changesection"
                                onClick={() =>
                                    section === "sign in"
                                        ? setSection("sign up")
                                        : setSection("sign in")
                                }
                            >
                                Уже есть аккаунт? Войдите в него
                            </p>
                        </div>
                    ) : (
                        <div className="register__sign-in">
                            <h1 className="register__onerow component-appear">
                                Войти в систему
                            </h1>
                            <Input
                                style="blue"
                                classNamesBox="register__onerow component-appear"
                                name="Email"
                            />
                            <Input
                                style="blue"
                                classNamesBox="register__onerow register__bottom component-appear"
                                name="Пароль"
                            />

                            <Button classNames="component-appear">
                                Отправить
                            </Button>
                            <p
                                className="register__changesection component-appear"
                                onClick={() =>
                                    section === "sign in"
                                        ? setSection("sign up")
                                        : setSection("sign in")
                                }
                            >
                                Нет аккаунта? Создайте
                            </p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    ) : (
        <Loader />
    );
};
