import React from "react";
import "./--default.css";
import { Link } from "react-router-dom";

/**
 * Component navigation - represents navigation for every page inside application
 */

const burger = (
    <svg
        className="navigation__svg-margin"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        width="50px"
        height="40px"
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </svg>
);

const registration = (
    <svg
        className="navigation__svg-margin"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#fa7921"
        width="24px"
        height="24x"
    >
        <path d="M0 0h24v24H0z" fill="none" fill-rule="evenodd" />
        <g fill-rule="evenodd">
            <path d="M9 17l3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4" />
            <path d="M15.47 20.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z" />
        </g>
    </svg>
);

const about = (
    <svg
        className="navigation__svg-margin"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#fa7921"
        width="20px"
        height="20px"
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </svg>
);

export const Navigation = ({ classNamesBox = "", classNames = "" }) => (
    <div className={"navigation " + classNamesBox}>
        <Link to="/restaurants/dodo">
            <div href="#" className={"navigation__logo " + classNames}>
                {burger}
                DABBA
            </div>
        </Link>
        <Link to="/register">
            <a href="#" className="navigation__link">
                {registration}
                Регистрация / Войти
            </a>
        </Link>
        <Link>
            <a href="#" className="navigation__link">
                {about}О нас
            </a>
        </Link>
    </div>
);
