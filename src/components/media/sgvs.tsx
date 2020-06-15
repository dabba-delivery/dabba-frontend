import React from "react";

export const svg = {
    __cart: {
        cartOptions: (
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 14V16H6V14H0ZM0 2V4H10V2H0ZM10 18V16H18V14H10V12H8V18H10ZM4 6V8H0V10H4V12H6V6H4ZM18 10V8H8V10H18ZM12 6H14V4H18V2H14V0H12V6Z"
                    fill="black"
                    fillOpacity="0.5"
                />
            </svg>
        ),
    },
    __counter: {
        buttonLeft: (
            <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
                    fill="black"
                />
            </svg>
        ),
        buttonRight: (
            <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                    fill="black"
                />
            </svg>
        ),
    },
    __navigation: {
        burger: (
            <svg
                className="navigation__svg-margin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                width="50px"
                height="40px"
            >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
        ),
        registration: (
            <svg
                className="navigation__svg-margin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fa7921"
                width="24px"
                height="24x"
            >
                <path d="M0 0h24v24H0z" fill="none" fill-rule="evenodd" />
                <g fill-rule="evenodd">
                    <path d="M9 17l3-2.94c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4" />
                    <path d="M15.47 20.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z" />
                </g>
            </svg>
        ),
        about: (
            <svg
                className="navigation__svg-margin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fa7921"
                width="20px"
                height="20px"
            >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
            </svg>
        ),
    },
    bin: {
        bin: (
            <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M24.5417 6.45833V24.5417H6.45833V6.45833H24.5417ZM25.9625 3.875H5.0375C4.39167 3.875 3.875 4.39167 3.875 5.0375V25.9625C3.875 26.4792 4.39167 27.125 5.0375 27.125H25.9625C26.4792 27.125 27.125 26.4792 27.125 25.9625V5.0375C27.125 4.39167 26.4792 3.875 25.9625 3.875ZM14.2083 9.04167H21.9583V11.625H14.2083V9.04167ZM14.2083 14.2083H21.9583V16.7917H14.2083V14.2083ZM14.2083 19.375H21.9583V21.9583H14.2083V19.375ZM9.04167 9.04167H11.625V11.625H9.04167V9.04167ZM9.04167 14.2083H11.625V16.7917H9.04167V14.2083ZM9.04167 19.375H11.625V21.9583H9.04167V19.375Z"
                    fill="#FA7921"
                />
            </svg>
        ),
    },
    header: {
        ratingStar: (
            <svg
                className="wall__rating"
                width="17"
                height="17"
                viewBox="0 0 27 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M13.5 3.23607L15.5799 9.63729L15.8044 10.3283H16.5309H23.2616L17.8164 14.2844L17.2286 14.7115L17.4531 15.4025L19.533 21.8037L14.0878 17.8475L13.5 17.4205L12.9122 17.8475L7.46701 21.8037L9.54689 15.4025L9.77141 14.7115L9.18362 14.2844L3.73842 10.3283H10.4691H11.1956L11.4201 9.63729L13.5 3.23607Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                />
            </svg>
        ),
    },
};
