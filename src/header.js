import React from "react";
import "./style/header.css";

import { Button, Status, svg } from "./components";

/**
 * Time component represents schedule for organisation
 *
 * @param {string} closeTime - close time for resstaurant or organization
 * @param {string} opneTime - close time for resstaurant or organization
 */

const Time = (props) => (
    <p className="line__time">
        Время доставки: Пн - Вс с {props.openTime} до {props.closeTime}
    </p>
);

/**
 * Info represents all information about organisation
 *
 * @param {number} rating - set this value to Rating component to get rating start of organizstion
 * @param {string} phone - display phone number
 * @param {string} kitchenType - display kitchen type of organization
 * @param {string} email - display email
 */

const Info = ({ rating, contactPhone, kitchenType, email }) => (
    <div className="wall__info">
        <Rating rating={rating} />
        <p>{contactPhone}</p>
        <p>{kitchenType}</p>
        <p>
            <a href={"mailto:" + email + "?subject=Доставка"}>{email}</a>
        </p>
    </div>
);

/**
 * Reting only returns star element nothing more
 *
 * @param {number} rating - display rating
 */

function Rating({ rating }) {
    const start = [];

    const {
        header: { ratingStar },
    } = svg;

    for (let counter = 0; counter < rating; counter++) {
        start.push(ratingStar);
    }
    return start;
}

export default (props) => {
    const {
        data: {
            name,
            address,
            logoUrl,
            contactPhone,
            kitchenType,
            email,
            openTime,
            closeTime,
        },
    } = props;

    return (
        <div className="header">
            <div className="wall">
                <img src={logoUrl} className="wall__logo" alt="logo" />
                <h2 className="wall__name">{name + " " + address}</h2>
                <Info
                    rating={5}
                    phone={contactPhone}
                    kitchenType={kitchenType}
                    email={email}
                />
            </div>
            <div className="line">
                <Time openTime={openTime} closeTime={closeTime} />

                <Status
                    classNames="line__status"
                    trueMessage="Вы в зоне доставки"
                    falseMessage="Вы вне зоны доставки"
                    current
                />
                <Button
                    style="blue"
                    classNames="line__button"
                    onClick={() => console.log("You press share button")}
                >
                    Поделиться
                </Button>
            </div>
        </div>
    );
};
