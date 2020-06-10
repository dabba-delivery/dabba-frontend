/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import { MainPart } from "./mainPart";
import { Bin } from "./bin.js";
import { Finish } from "./finish";
import { Register } from "./register";

import { Loader } from "./components";
import { restaurants } from "./dbexample";

import "./style/index.css";

const Restaurant = (props) => {
    const {
        match: {
            params: { id },
        },
    } = props;

    const [data, setData] = useState("");
    const [finishForm, setFinishForm] = useState(false);
    useEffect(() => {
        getData(id);
    }, [id]);

    const getData = async (link) => {
        const result = await fetch(
            `https://dabba-ru.herokuapp.com/restaurant/find/${link}`
        );
        const json = await result.json();
        setData(json);
    };

    const makeOrder = () => {
        setFinishForm(!finishForm);
    };

    return (
        <>
            {data ? (
                <div className="page app-appear">
                    {finishForm ? <Finish closeFunction={makeOrder} /> : ""}

                    <MainPart data={data} />
                    <Bin finishFunc={makeOrder} />
                </div>
            ) : (
                <div className="page">
                    <Loader />
                </div>
            )}
        </>
    );
};

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
