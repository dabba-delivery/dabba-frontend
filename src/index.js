import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import MainPart from "./mainPart";
import Bin from "./bin";
import Finish from "./finish";
import Register from "./register";

import { Loader } from "./components/library.js";
import { restaurants } from "./dbexample";

import "./style/index.css";

class Restaurant extends React.Component {
    constructor(props) {
        super(props);
        this.state = { finishOrder: false, cost: 0, data: "" };
    }

    componentDidMount = () => {
        const {
            match: {
                params: { id },
            },
		} = this.props;
		
        setTimeout(() => {
            this.setState({ data: restaurants[id] });
        }, 2000);

        // ** Template for future request **

        // const dataJSON = await fetch(
        //     `https://dabba-ru.herokuapp.com/restaurant/${id}`,
        //     {
        //         method: "GET",
        //     }
        // );
        // const data = await dataJSON.json();
        // this.setState({ data: data[0] });

        // ** Template for future request **
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
            <div>
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
            </div>
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

// function Success() {
//     const success = document.createElement("div");
//     success.className = "success";
//     success.innerText = "Success";
//     success.onclick = function () {
//         document.body.removeChild(this);
//     };
//     document.body.append(success);

//     const location = new URL(window.location);
//     setTimeout(() => {
//         window.location = location.host + "/addDishes";
//     }, 1000);
// }

// window.restaurant = restaurant;
