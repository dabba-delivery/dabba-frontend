import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import MainPart from "./mainPart";
import Bin from "./Bin";
import { Finish } from "./finish";
import Register from "./register";

import { Loader } from "./components";
import { restaurants } from "./dbexample";

import "./style/index.css";

/**
 * Restaurant  - represents main page of the Reastaurant
 */
class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = { finishOrder: false, cost: 0, data: "" };
    }
    /**
     * This method donwload all data and put it in the component
     */
    componentDidMount = async () => {
        const {
            match: {
                params: { id },
            },
        } = this.props;

        const rest = restaurants;

        if (rest) {
            setTimeout(() => this.setState({ data: rest[id] }), 2000);
        } else {
            const response = await fetch(
                `https://dabba-ru.herokuapp.com/restaurant/find/${id}`
            );

            if (response.ok) {
                const json = await response.json();
                this.setState({ data: json });
            } else {
                alert("Ошибка HTTP: " + response.status);
            }
        }
    };
    /**
     * This method open the Finish component and put all data about the order in
     *
     * @param {number} finalCost - shows final cost for orders
     */
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
/**
 * App - represents all application which will be inplemented in HTML
 */
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
