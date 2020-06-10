import React, { useState, useEffect } from "react";

import { MainPart } from "./mainPart";
import { Bin } from "./bin.js";
import { Finish } from "./finish";

import { Loader } from "./components";
// import { restaurants } from "./dbexample";

import { BinContext } from "./context";

import "./style/index.css";

export const Restaurant = (props) => {
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
        const map = new Map(items);
        map.has(id) ? ++map.get(id).val : map.set(id, { val: 1 });
        setBin(new Map(map));
    };

    const removePosition = (id) => {
        const map = new Map(items);
        items.has(id) && --map.get(id).val;
        map.get(id).val <= 0 && map.delete(id);
        setBin(new Map(map));
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
