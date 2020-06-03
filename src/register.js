import React from "react";
import InputMask from "react-input-mask";
import "./style/register.css";
import { Input, Button } from "./components/library.js";

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


export default function Register(props) {
    return (
        <div className="register">
            <form
                className="form"
                method="post"
                action="https://85.192.35.203:8080/restaurant"
                encType="application/json"
                onSubmit={()=>alert("ok")}
            >
				<Button>Отправить</Button>
			</form>
        </div>
    );
}
