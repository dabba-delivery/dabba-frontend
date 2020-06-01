import React from "react";
import "./--orange.css";
import "./--orange-active.css";
import "./--blue.css";
import "./--blue-active.css";

/**
 * This component represents a Toggle
 *
 * logic
 * @constuctor
 * @param {Function} onChange - onClick handler for a toggle
 * {this.props.children} - name of a toggle
 *
 * style
 * @param {string} classNames - adds new classes to the element, usually it's used for positioning, but sometimes custom is needed
 * @param {string} style - sets the color palette for this element. You can choose one of availables
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
    }

    handleClick = (event) => {
        const { onChange = () => console.log("ok") } = this.props;

        event.preventDefault();
        this.setState({ active: !this.state.active });
        onChange();
    };

    render() {
        const { classNames = "", style = "orange", children } = this.props;

        return (
            <button
                className={
                    (this.state.active
                        ? this.styles[style][1]
                        : this.styles[style][0]) +
                    " " +
                    classNames
                }
                onClick={this.handleClick}
            >
                {children}
            </button>
        );
    }
}
