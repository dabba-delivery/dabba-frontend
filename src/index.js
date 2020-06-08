import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import MainPart from "./mainPart";
import Bin from "./Bin";
import Finish from "./finish";
import Register from "./register";

import { Loader } from "./components";
import { restaurants } from "./dbexample";

import "./style/index.css";
class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = { finishOrder: false, cost: 0, data: "" };
    }

    componentDidMount = async () => {
        const {
            match: {
                params: { id },
            },
        } = this.props;

        let rest = restaurants;

        if (rest) {
            // for developing
            setTimeout(() => this.setState({ data: rest[id] }), 2000);
            // for developing
        } else {
            let response = await fetch(
                `https://dabba-ru.herokuapp.com/restaurant/find/${id}`
            );

            if (response.ok) {
                let json = await response.json();
                this.setState({ data: json });
            } else {
                alert("Ошибка HTTP: " + response.status);
            }
        }
    };

    makeOrder = (finalCost) => {
        this.setState({
            finishOrder: !this.state.finishOrder,
            cost: finalCost,
        });
    };

    render() {
        const { data } = this.state;

        return (
            <>
                {this.state.data ? (
                    <div className="page app-appear">
                        {this.state.finishOrder ? (
                            <Finish
                                finalCost={this.state.cost}
                                closeFunction={this.makeOrder}
                            />
                        ) : (
                            ""
                        )}

                        <MainPart data={data} />
                        <Bin finishFunc={this.makeOrder} />
                    </div>
                ) : (
                    <div className="page">
                        <Loader />
                    </div>
                )}
            </>
        );
    }
}

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
