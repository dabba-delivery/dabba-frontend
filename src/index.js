import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import { Register } from "./register";
import { Restaurant } from "./restaurant";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/restaurants/:id" component={Restaurant} />
                    <Route path="/register/" exact component={Register} />
                    <Link to="/restaurants/dodo">
                        <button>Перейти на мой ресторан Dodo</button>
                    </Link>
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
