import React from "react";
import "./--default.css";
import { Link } from "react-router-dom";
import { svg } from "../index";

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
};
