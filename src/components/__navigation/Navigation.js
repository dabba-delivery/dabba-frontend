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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="white"
                            width="50px"
                            height="40px"
                        >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
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
