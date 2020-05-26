import React from "react";
import "./--orange.css";
import "./--orange-active.css";
import "./--blue.css";
import "./--blue-active.css";

/**
 * This component represents a Toggle
 * @constuctor
 * @param {string} elementStyle - sets the color palette for this element. You can choose one of availables
 * @param {string} addClasses - adds new classes to the element, usually it's used for positioning, but sometimes custom is needed
 * @param {Function} handleFunction - onClick handler for a toggle
 * {this.props.children} - name of a toggle
 */

export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.styles = {
            orange: ["toggle--orange", "toggle--orange toggle--orange-active"],
            blue: ["toggle--blue", "toggle--blue toggle--blue-active"],
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({ active: !this.state.active });
        this.props.handleFunction();
    }

    render() {
        return (
            <button
                className={
                    (this.state.active
                        ? this.styles[
                              this.props.elementStyle
                                  ? this.props.elementStyle
                                  : "orange"
                          ][1]
                        : this.styles[
                              this.props.elementStyle
                                  ? this.props.elementStyle
                                  : "orange"
                          ][0]) +
                    " " +
                    (this.props.addClasses ? this.props.addClasses : "")
                }
                onClick={this.handleClick}
            >
                {this.props.children}
            </button>
        );
    }
}
