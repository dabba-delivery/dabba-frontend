// React
import React from "react";
import { Link } from "react-router-dom";

// Main commmponents

// Components from library

// Types and Interfaces

// Context
import { svg } from "../index";

// CSS
import "./--default.css";

/**
 * Component navigation - represents navigation for every page inside application
 * @return {HTMLElement}
 */
export const Navigation = ({ classNamesBox = "", classNames = "" }) => {
    const {
        __navigation: { burger, registration, about },
    } = svg;

    return (
        <div className={"navigation " + classNamesBox}>
            <Link to="/restaurants/dodo">
                <div className={"navigation__logo " + classNames}>
                    {burger}
                    DABBA
                </div>
            </Link>
            <Link to="/register">
                <a href="https://dabba.com" className="navigation__link">
                    {registration}
                    Регистрация / Войти
                </a>
            </Link>
            <Link to="/">
                <a href="https://dabba.com" className="navigation__link">
                    {about}О нас
                </a>
            </Link>
        </div>
    );
};
