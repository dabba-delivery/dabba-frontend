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
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

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
                                ref={register({
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
                                })}
                                style="blue"
                                classNamesBox="register__onerow"
                                name="Email"
                            />
                            <Input
                                ref={register({ required: true })}
                                style="blue"
                                classNamesBox="register__onerow"
                                name="Пароль"
                            />
                            <Input
                                ref={register({ required: true })}
                                style="blue"
                                classNamesBox="register__onerow register__bottom"
                                name="Подтверждение пароля"
                            />

                            <Button onClick={handleSubmit(onSubmit)}>
                                Отправить
                            </Button>

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
                                ref={register({
                                    required: true,
                                    maxLength: 20,
                                    pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
                                })}
                                style="blue"
                                classNamesBox="register__onerow"
                                name="Email"
                            />
                            <Input
                                ref={register({ required: true })}
                                style="blue"
                                classNamesBox="register__onerow"
                                name="Пароль"
                            />

                            <Button
                                classNames="component-appear"
                                onClick={handleSubmit(onSubmit)}
                            >
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
