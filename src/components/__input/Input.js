import React from "react";
import "./--orange.css";
import "./--blue.css";

/**
 * This component represents a Button
 *
 * logic
 * @constuctor
 * @param {props} props - includes:
 * @param {string} name - hint near the input which tell to the user what it shoud write inside thas input
 * @param {Function} onChange - onChange handler for this copmonent. It puts value of input in this handler
 * @param {string} type - input type
 *
 * implicit logic
 * @param {func} ref - connects ref to this input component // used with react-hook-forms
 * @param {string} inputName - // used with react-hook-forms
 *
 * style
 * @param {string} style - sets the color palette for this element. You can choose one of availables / default - orange
 * @param {string} classNamesBox - adds new classes to the element's div (box), usually it's used for positioning
 * @param {string} classNames - adds new classes to the element, usually it's used for positioning, but sometimes custom is needed
 *
 * @return {HTMLElement}
 */
export const Input = React.forwardRef((props, ref) => {
    const {
        name,
        style = "orange",
        classNames = "",
        classNamesBox = "",
        onChange = (val) => console.log(val),
        children,
        type = "text",
        inputName = "default",
    } = props;

    const styles = {
        orange: "input--orange",
        blue: "input--blue",
    };

    return (
        <div className={"input__box " + classNamesBox}>
            {name ? <p className="input__tip">{name}</p> : ""}
            <input
                type={type}
                className={styles[style] + classNames}
                onChange={onChange}
                ref={ref}
                name={inputName}
            >
                {children}
            </input>
        </div>
    );
});
