import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import Position from "./position";
import "./index.css";

class Menu extends React.Component {
    render() {
        return (
            <div>
                <Position />
                <Position />
                <Position />
            </div>
        );
    }
}

ReactDOM.render(<Menu />, document.getElementById("root"));

serviceWorker.unregister();
