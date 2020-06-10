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

import { BinContext } from "./context";

import "./style/index.css";

const Restaurant = (props) => {
    const {
        match: {
            params: { id },
        },
    } = props;

    const [data, setData] = useState("");
    const [finishForm, setFinishForm] = useState(false);
    const { items, addPosition, removePosition, countPositions } = useBin();

    useEffect(() => {
        getData(id);
    }, [id]);

    const getData = async (link) => {
        const result = await fetch(
            `https://dabba-ru.herokuapp.com/restaurant/find/${link}`
        );

        if (result.ok) {
            const json = await result.json();
            setData(json);
        } else {
            alert("Ошибка HTTP: " + result.status);
        }
    };

    const makeOrder = () => {
        setFinishForm(!finishForm);
    };

    return (
        <BinContext.Provider
            value={{
                items,
                addPosition,
                removePosition,
                countPositions,
            }}
        >
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
        </BinContext.Provider>
    );
};

const useBin = () => {
    const [items, setBin] = useState(new Map());

    const addPosition = (id) => {
        if (items.has(id)) {
            const map = new Map(items);
            ++map.get(id).val;
            setBin(new Map(map));
        } else {
            setBin(new Map(items.set(id, { val: 1 })));
        }
    };

    const removePosition = (id) => {
        if (items.has(id)) {
            setBin(new Map(--items.get(id).val));
            if (items.get(id).val <= 0) {
                setBin(new Map(items.delete(id)));
            }
        }
    };

    const countPositions = () => {
        let result = 0;
        for (const item of items.entries()) {
            result += item[0].price * item[1].val;
        }
        return result;
    };

    return {
        items,
        addPosition,
        removePosition,
        countPositions,
    };
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
