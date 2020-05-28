import React from "react";
import "./--orange.css";

/**
 * This component represents a Button
 * 
 * logic
 * @constuctor
 * @param {string} inputName - hint near the input which tell to the user what it shoud write inside thas input
 * @param {Function} handleFunction - onChange handler for this copmonent. It puts value of input in this handler
 * 
 * style
 * @param {string} elementStyle - sets the color palette for this element. You can choose one of availables / default - orange
 * @param {string} classBox - adds new classes to the element's div (box), usually it's used for positioning
 * @param {string} classInput - adds new classes to the element, usually it's used for positioning, but sometimes custom is needed
 */

export class Input extends React.Component {
    constructor(props) {
        super(props);
        this.styles = {
            orange: "input--orange",
            blue: "input--blue",
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleFunction(e.target.value);
    }

    render() {
        return (
            <div
                className={
                    "input__box " + this.props.classBox
                        ? this.props.classBox
                        : ""
                }
            >
                {this.props.inputName ? <p className="input__tip">{this.props.inputName}</p> : ""}
                <input
                    className={
                        this.styles[
                            this.props.elementStyle
                                ? this.props.elementStyle
                                : "orange"
                        ] + (this.props.classInput ? this.props.classInput : "")
                    }
                    onChange={this.handleChange}
                >
                    {this.props.children}
                </input>
            </div>
        );
    }
}
