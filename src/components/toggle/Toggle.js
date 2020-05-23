import React from "react";
import "./toggleOrange.css";
import "./toggleBlue.css";

export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
        this.styles = {
            orange: ["toggle__orange", "toggle__orange toggle__orange--active"],
            blue: ["toggle__blue", "toggle__blue toggle__blue--active"],
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.setState({active: !this.state.active});
        this.props.handleFunction();
    }

    render() {
        return (
            <button
                className={
                    (this.state.active
                        ? this.styles[this.props.elementStyle][1]
                        : this.styles[this.props.elementStyle][0]) +
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
