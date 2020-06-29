// React
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";

// Main commmponents
import { Register } from "./register";
import { Restaurant } from "./restaurant";

// Components from library

// Types and Interfaces

// Store
import store from "./components/redux/store";

// CSS

/**
 * App represent all application
 */
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path="/restaurants/:id" component={Restaurant} />
                        <Route path="/register/" exact component={Register} />
                        <Link to="/restaurants/dodo">
                            <button>Перейти на мой ресторан Dodo</button>
                        </Link>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
