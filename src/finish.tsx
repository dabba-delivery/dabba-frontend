// React
import React from "react";
import { useForm } from "react-hook-form";

// Main commmponents

// Components from library
import { Input, Button } from "./components";

// Types and Interfaces

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

interface IFinish {
    finalCost: number;
    closeFunction: Function;
}

export const Finish: React.FC<IFinish> = (props) => {
    const { finalCost, closeFunction } = props;
    const { register, errors, handleSubmit } = useForm();

    /**
     * Template for fetching data and sending PUT reguest to the server
     * @param {data} data - all information represented in the one object
     */
    const onSubmit = (data: object) => {
        closeFunction();
        console.log(data);
    };

    handleSubmit(onSubmit);

    return (
        <div className="finish">
            <form className="finish__box">
                <div className="finish__data">
                    <h5>Личные данные</h5>
                    <Input
                        ref={register({ required: true })}
                        name={
                            "Имя и фамилия " +
                            (errors.name?.type === "required"
                                ? "(Введите значение)"
                                : "")
						}
						onChange={()=>console.log("Temporary solution")}
                        inputName="name"
                    />
                    <Input
                        ref={register({
                            required: true,
                            pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
                        })}
                        name={
                            "Email " +
                            (errors.email?.type === "required"
                                ? "(Введите значение)"
                                : "") +
                            " " +
                            (errors.email?.type === "pattern"
                                ? "(Некорректный адрес эл.почты)"
                                : "")
                        }
						inputName="email"
						onChange={()=>console.log("Temporary solution")}
                    />
                    <Input
                        ref={register({
                            pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
                            required: true,
                        })}
                        name={
                            "Мобильный телефон " +
                            (errors.phonenumber?.type === "required"
                                ? "(Введите значение)"
                                : "") +
                            " " +
                            (errors.phonenumber?.type === "pattern"
                                ? "(Некорректный номер)"
                                : "")
                        }
						inputName="phonenumber"
						onChange={()=>console.log("Temporary solution")}
                    />
                </div>
                <div className="finish__adress">
                    <h5>Адрес</h5>
                    <Input
                        ref={register({ required: true })}
                        name={
                            "Улица и номер дома " +
                            (errors.street?.type === "required"
                                ? "(Введите значение)"
                                : "")
                        }
                        inputName="street"
						classNamesBox="finish__street"
						onChange={()=>console.log("Temporary solution")}
                    />
                    <Input
                        ref={register({ pattern: /\d+/gi, required: true })}
                        name={
                            "Квартира " +
                            (errors.apartment?.type === "required"
                                ? "(Введите значение)"
                                : "") +
                            " " +
                            (errors.apartment?.type === "pattern"
                                ? "(Только цифры)"
                                : "")
                        }
						inputName="apartment"
						onChange={()=>console.log("Temporary solution")}
                    />
                    <Input
                        ref={register({ required: true })}
                        name={
                            "Домофон " +
                            (errors.houselock?.type === "required"
                                ? "(Введите значение)"
                                : "")
                        }
						inputName="houselock"
						onChange={()=>console.log("Temporary solution")}
                    />
                    <Input
                        ref={register({ pattern: /\d+/gi, required: true })}
                        name={
                            "Подъезд " +
                            (errors.entrance?.type === "required"
                                ? "(Введите значение)"
                                : "") +
                            " " +
                            (errors.entrance?.type === "pattern"
                                ? "(Только цифры)"
                                : "")
                        }
						inputName="entrance"
						onChange={()=>console.log("Temporary solution")}
                    />
                    <Input
                        ref={register({ pattern: /\d+/gi, required: true })}
                        name={
                            "Этаж " +
                            (errors.floor?.type === "required"
                                ? "(Введите значение)"
                                : "") +
                            " " +
                            (errors.floor?.type === "pattern"
                                ? "(Только цифры)"
                                : "")
                        }
						inputName="floor"
						onChange={()=>console.log("Temporary solution")}
                    />
                </div>
                <div className="finish__cost">
                    <Button
                        classNames="finish__button"
                        onClick={handleSubmit(onSubmit)}
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
