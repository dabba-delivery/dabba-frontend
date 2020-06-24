// React
import React from "react";

// Main commmponents

// Components from library
import { Button, Status, svg } from "./components";
import { ITime, IInfo, TypeData } from "./components/types";
// Context

// CSS
import "./style/header.css";

/**
 * Time component represents schedule for organisation
 *
 * @param {string} closeTime - close time for resstaurant or organization
 * @param {string} openTime - close time for resstaurant or organization
 * @return {DOMElement}
 */

const Time: React.FC<ITime> = ({ openTime = "10:00", closeTime = "20:00" }) => (
    <p className="line__time">
        Время доставки: Пн - Вс с {openTime} до {closeTime}
    </p>
);

/**
 * Info represents all information about organisation
 *
 * @param {number} rating - set this value to Rating component to get
 * rating start of organizstion
 * @param {string} phone - display phone number
 * @param {string} kitchenType - display kitchen type of organization
 * @param {string} email - display email
 * @return {Component}
 */

const Info: React.FC<IInfo> = ({
    rating,
    contactPhone,
    kitchenType,
    email,
}) => (
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
 * @return {Array}
 */
function Rating({ rating }: { rating: number | undefined }): any {
    const start = [];

    const {
        header: { ratingStar },
    } = svg;

    for (let counter = 0; counter < rating!; counter++) {
        start.push(ratingStar);
    }
    return start;
}

/**
 * Header represents the header on the main page of the restaurant
 *
 * @param {props} props - includes all information about entity
 * - name
 * - adrees
 * - logoUrl
 * - contactPhone,
 * - kitchenType
 * - email
 * - openTime
 * - closeTime
 * @return {HTMLElement}
 */

export const Header: React.FC<TypeData> = (props) => {
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
                    contactPhone={contactPhone}
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
                    onClick={() => alert("You press share button")}
                >
                    Поделиться
                </Button>
            </div>
        </div>
    );
};
