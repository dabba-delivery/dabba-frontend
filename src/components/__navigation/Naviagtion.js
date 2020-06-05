import React from "react";
import "./--default.css";
import { Link } from "react-router-dom";

export class Navigation extends React.Component {
    render() {
        return (
            <div className="statusbar">
                <Link to="/restaurants/dodo">
                    <a href="#" className="statusbar__logo">Da</a>
                </Link>
                <Link  to="/register">
                    <a href="#">Регистрация / Войти</a>
                </Link>

                <a href="#">О нас</a>
            </div>
        );
    }
}
