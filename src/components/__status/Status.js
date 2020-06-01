import React from "react";
import "./status.css";

/**
 * This component represents a Status box for indicating is that true or false
 *
 * logic
 * @constuctor
 * @param {string} classNames - adds new classes to the element, usually it's used for positioning, but sometimes custom is needed
 * @param {string} trueMessage - will be representing true value of Status box
 * @param {string} falseMessage - will be representing false value of Status box
 * @param {boolean} current - initial value for Status component
 */

export class Status extends React.Component {
    render() {
        const { classNames, trueMessage, falseMessage, current } = this.props;

        return (
            <div className={"status " + (classNames ? classNames : "")}>
                <svg
                    style={{
                        display: current ? "box" : "none",
                    }}
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
                    {current ? trueMessage : falseMessage}
                </p>
            </div>
        );
    }
}
