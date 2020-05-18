import React from "react";
import "./buttonOrange.css";

export class ButtonOrange extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.handleFunction();
    }

    render() {
        return (
            <button className="position__button" onClick={this.handleClick}>
                {this.props.name}
            </button>
        );
    }
}