import React, { useState } from "react";
import "./header.css";
import Logo from "./media/logo.png";
import Register from "./registration";

export default function Header(props) {
    const [register, setRegister] = useState(false);
    return (
        <div className="header">
            {register && <div style={{
                position: 'absolute', background: 'white', zIndex: 2, height: '100%', width: '100%',
                display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}><Register /></div>}
            <div className="wall">
                <button className="wall__registration" onClick={() => setRegister(true)}>Открыть свою витрину</button>
                <img src={Logo} className="wall__logo" alt="logo" />
                <h2 className="wall__name">
                    {props.data.name + " " + props.data.address}
                </h2>
                <div className="wall__info">
                    <div></div>
                    <p>{props.data.contactPhone}</p>
                    <p>{props.data.kitchenType}</p>
                    <p>{props.data.email}</p>
                </div>
            </div>
            <div className="line">
                <p className="line__time">
                    Время доставки: Пн - Вс с {props.data.openTime} до{" "}
                    {props.data.closeTime}
                </p>

                <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.00002 11.2L1.80002 6.99998L0.400024 8.39998L6.00002 14L18 1.99998L16.6 0.599976L6.00002 11.2Z"
                        fill="#7CDAA2"
                    />
                </svg>
                <p className="line__message">Вы в зоне доставки</p>
                <button className="wall__share">Поделиться</button>
            </div>
        </div>
    );
}