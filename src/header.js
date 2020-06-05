import React from "react";
import "./style/header.css";

import { Button, Status } from "./components/library.js";

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
    for (let counter = 0; counter < rating; counter++) {
        start.push(
            <svg
                key={counter}
                className="wall__rating"
                width="17"
                height="17"
                viewBox="0 0 27 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.5 3.23607L15.5799 9.63729L15.8044 10.3283H16.5309H23.2616L17.8164 14.2844L17.2286 14.7115L17.4531 15.4025L19.533 21.8037L14.0878 17.8475L13.5 17.4205L12.9122 17.8475L7.46701 21.8037L9.54689 15.4025L9.77141 14.7115L9.18362 14.2844L3.73842 10.3283H10.4691H11.1956L11.4201 9.63729L13.5 3.23607Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                />
            </svg>
        );
    }
    return start;
}

export default class Header extends React.Component {
    render() {
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
        } = this.props;

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
    }
}
