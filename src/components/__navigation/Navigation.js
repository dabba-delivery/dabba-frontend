import React from "react";
import "./--default.css";
import { Link } from "react-router-dom";

export class Navigation extends React.Component {
    render() {
        const { classNamesBox = "", classNames = "" } = this.props;

        return (
            <div className={"navigation " + classNamesBox}>
                <Link to="/restaurants/dodo">
                    <div href="#" className={"navigation__logo " + classNames}>
                        DABBA
                    </div>
                </Link>
                <Link to="/register">
                    <a href="#" className="navigation__link">
                        Регистрация / Войти
                    </a>
                </Link>
                <Link>
                    <a href="#" className="navigation__link">
                        О нас
                    </a>
                </Link>
            </div>
        );
    }
}
