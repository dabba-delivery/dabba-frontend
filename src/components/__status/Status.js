import React from "react";
import "./status--true.css";

export class Status extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statusOk: this.props.trueMessage,
            statusNotOk: this.props.falseMessage,
            currentStatus: this.props.current,
        };
    }

    render() {
        return (
            <div className="status">
                <svg
                    className="status__svg"
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.00002 11.2L1.80002 6.99998L0.400024 8.39998L6.00002 14L18 1.99998L16.6 0.599976L6.00002 11.2Z"
                        fill="#7CDAA2"
                    />
                </svg>
                <p className="status__text">
                    {this.state.current
                        ? this.state.statusNotOk
                        : this.state.statusNotOk}
                </p>
            </div>
        );
    }
}
