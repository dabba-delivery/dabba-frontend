import React from "react";
import "./--orange.css";

/**
 * This component represents a Button
 * 
 * @constuctor
 * @param {string} elementStyle - sets the color palette for this element. You can choose one of availables
 * @param {Function} handleFunction - onClick handler for a copmonent
 * {this.props.children} - name of this button
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
            <input
                className={
                    this.styles[
                        this.props.elementStyle
                            ? this.props.elementStyle
                            : "orange"
                    ] +
                    " " +
                    (this.props.addClasses ? this.props.addClasses : "")
                }
                onChange={this.handleChange}
            >
                {this.props.children}
            </input>
        );
    }
}
