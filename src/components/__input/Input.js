import React from "react";
import "./--orange.css";
import "./--blue.css";

/**
 * This component represents a Button
 *
 * logic
 * @constuctor
 * @param {string} name - hint near the input which tell to the user what it shoud write inside thas input
 * @param {Function} onChange - onChange handler for this copmonent. It puts value of input in this handler
 *
 * style
 * @param {string} style - sets the color palette for this element. You can choose one of availables / default - orange
 * @param {string} classNamesBox - adds new classes to the element's div (box), usually it's used for positioning
 * @param {string} classNames - adds new classes to the element, usually it's used for positioning, but sometimes custom is needed
 */

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            orange: "input--orange",
            blue: "input--blue",
        };
    }

    handleChange = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div
                className={
                    "input__box " + this.props.classNamesBox
                        ? this.props.classNamesBox
                        : ""
                }
            >
                {this.props.name ? (
                    <p className="input__tip">{this.props.name}</p>
                ) : (
                    ""
                )}
                <input
                    className={
                        this.styles[
                            this.props.style
                                ? this.props.style
                                : "orange"
                        ] + (this.props.classNames ? this.props.classNames : "")
                    }
                    onChange={
                        this.props.onChange ? this.handleChange : ""
                    }
                >
                    {this.props.children}
                </input>
            </div>
        );
    }
}
