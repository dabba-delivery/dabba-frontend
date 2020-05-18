import React from "react";
import InputMask from "react-input-mask";
import "./registration.css";

import "fetch-polyfill";

const required = false;

function NumberInput(props) {
    return (
        <InputMask
            name="contactPhone"
            mask="+7(999)999-99-99"
            placeholder="phone number"
            required={required}
            {...props}
        />
    );
}

function Handle(e) {
    e.preventDefault();
    const formData = {};
    const form = e.target,
        elems = form.elements;
    for (let i = 0, l = elems.length; i < l; ++i) {
        const el = elems[i];
        if (el.name) {
            formData[el.name] = el.value;
        }
    }
    console.log(formData);
    fetch(form.action, {
        method: form.method,
        data: JSON.stringify(formData),
    });
}

export default function Register(props) {
    return (
        <div className="RegisterForm">
            <form
                className="form"
                method="post"
                action="https://85.192.35.203:8080/restaurant"
                encType="application/json"
                onSubmit={Handle}
            >
                <h2>Регистрация</h2>
                <input
                    name="address"
                    type="text"
                    placeholder="address"
                    required={required}
                />
                <input
                    name="openTime"
                    type="time"
                    placeholder="open time"
                    required={required}
                />
                <input
                    name="closeTime"
                    type="time"
                    placeholder="close time"
                    required={required}
                />
                <NumberInput />
                <input
                    name="email"
                    type="email"
                    placeholder="email"
                    required={required}
                />
                <input
                    name="kitchenType"
                    type="text"
                    placeholder="kitchen type"
                    required={required}
                />
                <input
                    name="url"
                    type="url"
                    placeholder="logo URL"
                    pattern="https://.*"
                    required={required}
                />
                <input
                    name="name"
                    type="text"
                    placeholder="name"
                    required={required}
                />
                <input
                    name="serviceRadius"
                    type="number"
                    placeholder="radius"
                    required={required}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
